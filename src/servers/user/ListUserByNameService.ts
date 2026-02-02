import { bankPrisma } from "../../prisma/index.js";
import { SearchUserRequest } from "../../interfaces/user/SearchUserRequest.js";

class ListUserByNameService { // Serviço para listar usuários por nome ou email
    async execute({ name, email }: SearchUserRequest) { // Recebe o nome ou email para busca
        if (!name && !email) { // Verifica se pelo menos um dos campos foi fornecido
            throw new Error("User name or email is required"); // Lança um erro se nenhum campo for fornecido
        }
        try { // Tenta buscar os usuários no banco de dados
            const users = await bankPrisma.user.findMany({ // Busca múltiplos usuários
                where: { // Condição de busca
                    name: { // Busca por nome
                        contains: name, // Usa contains para busca parcial
                        mode: "insensitive", // Busca sem diferenciar maiúsculas de minúsculas
                    },
                    email: { // Busca por email
                        contains: email, // Usa contains para busca parcial
                        mode: "insensitive", // Busca sem diferenciar maiúsculas de minúsculas
                    }
                },
                select: { // Seleciona os campos a serem retornados
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                },
            });
            return users; // Retorna a lista de usuários encontrados

        } catch (error: any) { // Captura erros durante a busca
            throw new Error(`Error fetching users by name: ${error.message}`);
        }
    }
}
export { ListUserByNameService };


