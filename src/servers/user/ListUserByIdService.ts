import { bankPrisma } from "../../prisma/index.js"; // Importa a instância do Prisma Client para interagir com o banco de dados
import { ListUserRequest } from "../../interfaces/ListUserRequest.js";

class ListUserByIdService { // Define a classe ListUserService
    async execute({ id }: ListUserRequest) { // Define o método execute que recebe o ID do usuário
        if (!id) { // Verifica se o ID do usuário foi fornecido
            throw new Error("Um id de usuario é obrigatorio");
        }

        try {
            const user = await bankPrisma.user.findUnique({ // Busca o usuário no banco de dados
                where: { id }, // Usa id para localizar o usuário
                select: { // Seleciona os campos a serem retornados
                    id: true, // ID do usuário
                    name: true, // nome do usuário
                    email: true, // email do usuário
                    created_at: true, // data de criação
                    updated_at: true, // data de atualização
                },
            });
            if (id.length === 0) {
                throw new Error("User not found no db");
            }
            
            if (!user){
                throw new Error("User not found");
            }

            return user; // Retorna o usuário encontrado ou null se não existir
        } catch (error: any) { // Captura erros durante a busca
            throw new Error(`Erro ao buscar usuário: ${error.message}`);
        }
    }
}

export { ListUserByIdService };