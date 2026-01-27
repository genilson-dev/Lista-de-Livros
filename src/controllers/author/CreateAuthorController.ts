import { Request, Response } from "express";
import CreateBookService from "../../servers/author/CreateAuthorService.js";

class CreateAuthorController { // Controlador para criar autor
    async handle(req: Request, res: Response) { // Manipulador da requisição
        const {name, bio } = req.body; // Extrai nome e biografia do corpo da requisição
        if (!name) { // Validação simples do autor
            return res.status(400).json({ message: "Author name is required" });
        }
        try { // Tenta criar o autor
            const createAuthorService = new CreateBookService(); // Instancia o serviço de criação de autor
            const newAuthor = await createAuthorService.execute({ // Executa o serviço com os dados fornecidos
                name, // nome do autor 
                bio // biografia do autor 
            });

            return res.status(201).json(newAuthor); // Retorna o autor criado com status 201
        } catch (error) { // Captura erros durante o processo 
            return res.status(400).json({ message: (error as Error).message }); // Retorna erro com status 400

        }
    }
}

export default CreateAuthorController;
