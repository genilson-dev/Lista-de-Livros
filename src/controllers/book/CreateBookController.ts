import type { Request, Response } from "express";
import CreateBookService from "../../servers/book/CreateBookService.js";

class CreateBookController { // Controlador para criar livro 
    async handle(req: Request, res: Response) { // Manipulador da requisição 
        const { title, content, published, createdById, authorId } = req.body; // Extrai dados do corpo da requisição

         if (!title || !content || !authorId || !createdById) { // Validação simples dos dados do livro
            return res.status(400).json({ error: "Title, content, authorId and createdById are required" }); // Retorna erro se faltar algum campo obrigatório
        }

        const createBookService = new CreateBookService(); // Instancia o serviço de criação de livro 

        try {
            const newBook = await createBookService.execute({       // Executa o serviço com os dados fornecidos          
                title, // título do livro 
                content, // conteúdo do livro
                published, // status de publicação do livro
                authorId, // ID do autor do livro
                createdById: createdById // ID do usuário que criou o livro
            });

            return res.status(201).json(newBook); // Retorna o livro criado com status 201
        } catch (error) { // Captura erros durante o processo
            if (error instanceof Error) { // Verifica se o erro é uma instância de Error
                return res.status(400).json({ error: error.message }); // Retorna erro com status 400
            }
            return res.status(400).json({ error: "Unknown error" }); // Retorna erro genérico se não for uma instância de Error
        }
    }
}

export default CreateBookController; // Exporta o controlador
