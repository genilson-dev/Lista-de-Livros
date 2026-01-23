import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { CreateUserRequest } from "../../interfaces/CreateUserRequest.js";

class CreateUserService {
    async execute({ name, email, password }: CreateUserRequest) {
        // Verificando se o email foi enviado
        if (!email) {
            throw new Error("this email is incorrect");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");

        }

                // Verifica se o email já existe no banco de dados
        const emailAlreadyExists = await bankPrisma.user.findMany({
            where: { email: email },
        });

        // Verifica se o email já existe no banco de dados
        if (emailAlreadyExists) {
            // throw new Error("Email already exists");
            throw new Error("this email is incorrect");

        }
        // criptografa a senha antes de salvar no banco de dados
        const passHash = await hash(password, 10)
        const createNewUser = await bankPrisma.user.create({
            data: {
                name,
                email,
                password: passHash,
            },
            select:{
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true,
            }
        })
        // console.log(createNewUser);
        if (process.env.NODE_ENV === "development") {
            console.log(createNewUser);
        }

        return createNewUser;
    }
}

export { CreateUserService };