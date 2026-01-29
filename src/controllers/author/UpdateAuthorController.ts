import { Request, Response } from "express";
import { UpdateAuthorService } from "../../servers/author/UpdateAuthorService.js";


class UpdateAuthorController { // Controlador para atualizar autor
    async handle(req: Request, res: Response) { // Manipulador da requisição
        const { id } = req.params as { id: string }; // Extrai o ID do autor dos parâmetros da requisição
        const { name, bio } = req.body; // Extrai nome e biografia do corpo da requisição
        const updateAuthorService = new UpdateAuthorService(); // Instancia o serviço de atualização de autor
        const author = await updateAuthorService.execute({ // Executa o serviço com os dados fornecidos
            id, // ID do autor
            authorId: id, // ID do autor
            name, // nome do autor
            bio // biografia do autor
        }); 
        return res.json(author); // Retorna o autor atualizado em formato JSON
    }
}
export default UpdateAuthorController; // Exporta o controlador

