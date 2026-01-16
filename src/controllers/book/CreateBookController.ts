import type { Request, Response } from "express";
import CreateBookService from "../../servers/book/CreateBookService.js";

class CreateBookController {
    async handle(req: Request, res: Response) {
        const { title, content, published, authorId } = req.body;

        const createBookService = new CreateBookService();

        try {
            const newBook = await createBookService.execute({
                
                title,
                content,
                published,
                authorId,
            });

            return res.status(201).json(newBook);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: "Unknown error" });
        }
    }
}

export default CreateBookController;
