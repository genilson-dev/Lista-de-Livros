import { Request, Response } from "express";
import CreateBookService from "../../servers/author/CreateAuthorService.js";

class CreateAuthorController {
    async handle(req: Request, res: Response) {
        const {name, bio } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Author name is required" });
        }
        try {
            const createAuthorService = new CreateBookService();
            const newAuthor = await createAuthorService.execute({
                
                name,
                bio
            });
            return res.status(201).json(newAuthor);
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });

        }
    }
}

export default CreateAuthorController;
