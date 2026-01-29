import { Request, Response } from "express";
import ListAuthorServiceById from "../../servers/author/ListAuthorByIdService.js";

class ListAuthorByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      let { id } = req.params;

      if (!id) {
        return res.status(400).json({
          error: "Author id is required",
        });
      }

      // Ensure id is a string
      if (Array.isArray(id)) {
        id = id[0];
      }

      const authorService = new ListAuthorServiceById();

      const author = await authorService.execute({ id });

      if (!author) {
        return res.status(404).json({
          error: "Author not found",
        });
      }

      return res.status(200).json(author);

    } catch (error) {
      console.error("ListAuthorByIdController error:", error);

      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

export default ListAuthorByIdController;
