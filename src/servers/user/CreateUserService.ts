import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { CreateUserRequest } from "../../interfaces/CreateUserRequest.js";



class CreateUserService {
    async execute({ name, email, password }: CreateUserRequest) {
        if (!email) {
            throw new Error("Email incorrect");
        }
        // Verifica se o email já existe no banco de dados
        const emailAlreadyExists = await bankPrisma.user.findFirst({
            where: { email: email },
        });
        // Verifica se o email já existe no banco de dados
        if (emailAlreadyExists) {
            throw new Error("Email already exists");
        }
        // criptografa a senha antes de salvar no banco de dados
        const passHash = await hash(password, 8)
        const createNewUser = await bankPrisma.user.create({
            data: {
                name: name,
                email: email,
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
        console.log(createNewUser);
        return createNewUser;
    }
}

export { CreateUserService };