import { Request, Response } from "express";
import UpdateBookService from "../../servers/book/UpdateBookService.js";


class UpdateBookController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const { title, content, published, authorId, createdById } = req.body;
        const updateBookService = new UpdateBookService();
        try {
            const idString = Array.isArray(id) ? id[0] : id; // Verifica se o id é um array e, em caso afirmativo, pega o primeiro elemento. Caso contrário, usa o valor diretamente.
            const updateBook = await updateBookService.execute({ id: idString, title, content, published, authorId, createdById })
            return res.status(200).json(updateBook)
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            return res.status(400).json({ message: errorMessage })
        }
    }
}
export default UpdateBookController;
