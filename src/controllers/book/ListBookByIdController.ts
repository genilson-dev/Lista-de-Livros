import { Request, Response } from "express";
// import ListAllBooksService from "../../servers/book/ListAllBookService.js";
import ListBooksByIdService from "../../servers/book/ListBookByIdService.js";

class ListBookByIdController {
    async handle(req: Request, res: Response) { // Manipulador da requisição
        const { id } = req.params; // Extrai o ID do livro dos parâmetros da requisição
        console.log("ID recebido para listagem:", id); // Log para verificar o ID recebido
        const listook = new ListBooksByIdService(); // Instancia o serviço de listagem de livros por ID
        const result = await listook.execute(Array.isArray(id) ? id[0] : id) // Verifica se o id é um array e, em caso afirmativo, pega o primeiro elemento. Caso contrário, usa o valor diretamente.
        return res.json(result) // Retorna o resultado em formato JSON
    }
}

export default ListBookByIdController;  // Exportando para usarem outraspaginas do projeto

