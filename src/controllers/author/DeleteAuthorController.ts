import { Request, Response } from "express";
import { DeleteAuthorService } from "../../servers/author/DeleteAuthorService.js";

class DeleteAuthorController { // Iniciando a classe delete
  async handle(req: Request, res: Response): Promise<Response> { // 
    try { // 
      const { id } = req.params; // 

      // ✅ validação básica
      if (!id) {
        return res.status(400).json({
          error: "Author id is required",
        });
      }

      // Garantir que id seja sempre string
      const authorId = Array.isArray(id) ? id[0] : id;

      const deleteAuthorService = new DeleteAuthorService();

      const author = await deleteAuthorService.execute({ id: authorId });

      // ✅ se o service retornar null
      if (!author) {
        return res.status(404).json({
          error: "Author not found",
        });
      }

      return res.status(200).json({
        message: "Author deleted successfully",
      });
    } catch (error: any) {
      console.error("DeleteAuthorController error:", error);

      // ✅ erro comum do Prisma 
      if (error.code === "P2025") { // 
        return res.status(404).json({
          error: "Author not found",
        });
      }

      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

export { DeleteAuthorController };


