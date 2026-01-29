import { bankPrisma } from "../../prisma/index.js"; // Importa o cliente Prisma configurado para o banco de dados

class ListAuthorService { // Define a classe ListAuthorService
    async execute() { // Método assíncrono para listar autores
        const authors = await bankPrisma.author.findMany({ // Busca todos os autores no banco de dados
            select: { // Seleciona os campos a serem retornados
                id: true,
                name: true,
                bio: true,
            }
        });
        return authors; // Retorna a lista de autores encontrados
    }
}
export { ListAuthorService }; // Exporta a classe ListAuthorService
