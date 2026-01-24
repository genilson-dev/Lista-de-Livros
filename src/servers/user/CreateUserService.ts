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
        const emailAlreadyExists = await bankPrisma.user.findUnique({
            where: { email: email },
        });

        // Verifica se o email já existe no banco de dados
        if (emailAlreadyExists) {
            // throw new Error("Email already exists");
            throw new Error("Erro no email: Já existe um usuário cadastrado com este email.");

        }
        // criptografa a senha antes de salvar no banco de dados
        const passHash = await hash(password, 10)
        const user = await bankPrisma.user.create({
  data: {
    name,
    email,
    password: passHash,
  },
  select: {
    id: true,
    name: true,
    email: true,
    created_at: true,
    updated_at: true,
  },
});

        // console.log(createNewUser);
        if (process.env.NODE_ENV === "development") {
            console.log(user);
        }

        return user;
    }
}

export { CreateUserService };