import { Request, Response } from "express";
import ListAllBooksService from "../../servers/book/ListAllBookService.js";

class ListAllBooksController{
    async handle(req: Request, res: Response){ 
        const listook = new ListAllBooksService();
        const result = await listook.execute()
        return res.json(result)
    }
}

export default ListAllBooksController;  // Exportando para usarem outraspaginas do projeto

