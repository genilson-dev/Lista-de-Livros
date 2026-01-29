import { Request, Response } from "express";
import { ListAuthorService } from "../../servers/author/ListAuthorService.js";
class ListAuthorController {
    async handle(_req: Request, res: Response) {
        const listAuthorService = new ListAuthorService(); // Cria uma instância do serviço de listagem de autores        

        const authors = await listAuthorService.execute(); // Executa o serviço para obter a lista de autores
        return res.json(authors); // Retorna a lista de autores como resposta JSON
    }
}
export { ListAuthorController }; // Exporta a classe ListAuthorController