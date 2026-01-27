import { bankPrisma } from "../../prisma/index.js";
import { CreateAuthorRequest } from "../../interfaces/CreateAuthorRequest.js";

class CreateAuthorService { // Serviço para criar um autor
    async execute({ name, bio }: CreateAuthorRequest) { // Executa o serviço com os dados do autor
        try { // Tenta criar o autor
            if (!name) { // Validação simples do nome do autor
                throw new Error("Name is required"); // Lança erro se o nome não for fornecido
            } 
            const createNewBook = await bankPrisma.author.create({ // Cria um novo autor no banco de dados
                data: { // Dados do autor                     
                    name, // nome do autor
                    bio // biografia do autor
                },
                select: { // Seleciona os campos a serem retornados
                    id: true, // id do autor
                    name: true, // nome do autor
                    bio: true // biografia do autor
                }
            });
            
            return createNewBook; // Retorna o autor criado
        } catch (error) { // Captura erros durante o processo
            console.error("Error creating book:", (error as Error).message); // Loga o erro no console
            return null;    // Retorna null em caso de erro
        }

    }
}

export default CreateAuthorService; // Exporta o serviço

