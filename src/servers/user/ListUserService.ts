import { bankPrisma } from "../../prisma/index.js"; // Importa a instância do Prisma Client para interagir com o banco de dados
class ListUserService { // Define a classe ListUserService
    async execute() { // Método assíncrono para listar usuários
        const users = await bankPrisma.user.findMany({ // Busca todos os usuários no banco de dados
            select:{ // Seleciona os campos a serem retornados
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true,
                // password: true

            }
        })
        
        
        return users; // Retorna a lista de usuários encontrados
    }
}
export { ListUserService }; // Exporta a classe ListUserService
