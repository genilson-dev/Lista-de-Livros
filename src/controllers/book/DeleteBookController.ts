import { Request, Response } from "express";
import DeleteBookService from "../../servers/book/DeleteBookService.js";

class DeleteBookController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        console.log("ID recebido para exclusão:", id); // Log para verificar o ID recebido
        const deleteBookService = new DeleteBookService();
        try {
            const idString = Array.isArray(id) ? id[0] : id; // Verifica se o id é um array e, em caso afirmativo, pega o primeiro elemento. Caso contrário, usa o valor diretamente.
            const deleteBook = await deleteBookService.execute({ id: idString })
            return res.status(200).json(deleteBook)
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            return res.status(400).json({ message: errorMessage })
        }
    }
}
export default DeleteBookController;

