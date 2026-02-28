import { Request, Response } from "express";
// import ListAllBooksService from "../../servers/book/ListAllBookService.js";
import ListBooksByTitleService from "../../servers/book/ListBookByTitleService.js";

class ListBookByTitleController{
    async handle(req: Request, res: Response){ // Manipulador da requisição
        const { title } = req.body; // Extrai o título do livro dos parâmetros da requisição
        console.log("Título recebido para listagem:", title); // Log para verificar o título recebido
        const listook = new ListBooksByTitleService(); // Instancia o serviço de listagem de livros por título
        const result = await listook.execute({title}) // Chama o serviço com o título extraído
        return res.json(result) // Retorna o resultado em formato JSON
    }
}

export default ListBookByTitleController;  // Exportando para usarem outraspaginas do projeto



