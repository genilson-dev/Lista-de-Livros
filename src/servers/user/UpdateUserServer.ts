import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { UpdateUserRequest } from "../../interfaces/UpdateUserRequest.js";

class UpdateUserService {
    async execute({ userId, email, name, password }: UpdateUserRequest) { // Corrigido para usar UpdateUserRequest
        if (!userId) { // Verifica se o ID do usuário foi fornecido
            throw new Error("User ID is required");
        }

        // Monta dinamicamente os campos a atualizar
        const data: Record<string, any> = {}; // Usando Record para permitir chaves dinâmicas 
        if (name) data.name = name; // Adiciona o nome se fornecido
        if (email) data.email = email; // Adiciona o email se fornecido
        if (password) {
            const passHash = await hash(password, 10);
            data.password = passHash;
        }

        try {
            const updatedUser = await bankPrisma.user.update({
                where: { id: userId },
                data,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                },
            });

            return updatedUser;
        } catch (error: any) {
            // Prisma lança erro se o usuário não existir
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }
    }
}

export { UpdateUserService };
