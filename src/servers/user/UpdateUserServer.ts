import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { UpdateUserRequest } from "../../interfaces/user/UpdateUserRequest.js";

class UpdateUserService {
    async execute({ userId, email, name, password }: UpdateUserRequest) { // Corrigido para usar UpdateUserRequest
        if (!userId) { // Verifica se o ID do usuário foi fornecido
            throw new Error("User ID is required");
        }

        // Monta dinamicamente os campos a atualizar
        const data: Record<string, any> = {}; // Usando Record para permitir chaves dinâmicas 
        if (name) data.name = name; // Adiciona o nome se fornecido
        if (email) data.email = email; // Adiciona o email se fornecido
        if (password) { // Adiciona a senha se fornecida
            const passHash = await hash(password, 8); // Hash da nova senha
            data.password = passHash; // Define a senha hasheada no objeto de dados
        }

        try {
            const updatedUser = await bankPrisma.user.update({ // Atualiza o usuário no banco de dados
                where: { id: userId },  // Usa userId para localizar o usuário
                data, // Dados a serem atualizados
                select: { // Seleciona os campos a serem retornados
                    id: true, // ID do usuário
                    name: true, // nome do usuário
                    email: true, // email do usuário
                    created_at: true, // data de criação
                    updated_at: true, // data de atualização
                },
            });

            return updatedUser; // Retorna o usuário atualizado
        } catch (error: any) { // Captura erros durante a atualização
            // Prisma lança erro se o usuário não existir
            throw new Error(error.message);
        }
    }
}

export { UpdateUserService }; // Exporta o serviço de atualização de usuário
