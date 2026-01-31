import { Request, Response } from "express";
import ListAuthorByNameService from "../../servers/author/ListAuthorByNameService.js";

class ListAuthorByNameController {
    async handle(req: Request, res: Response) {
        try {
            // const { name } = req.body; // Esse linha chama a pesquisa via body
            const name = req.query.name as string; // Essa linha de codigo 
            if (!name) {
                return res.status(400).json({
                    error: "Author name is required",
                });
            }
            const instanceService = new ListAuthorByNameService();
            const executeInstaceAuthor = await instanceService.execute({ name })
            if (!executeInstaceAuthor) {
                return res.status(404).json({
                    error: "Author not found",
                });
            }
            return res.status(200).json(executeInstaceAuthor);
        } catch (error) {
            console.error("ListAuthorByNameController error:", error);
            return res.status(500).json({
                error: "Internal server error",
            });
        }
    }
}

export default ListAuthorByNameController

