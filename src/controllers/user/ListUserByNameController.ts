import { Request, Response } from "express";
import { ListUserByNameService } from "../../servers/user/ListUserByNameService.js";

class ListUserByNameController { // Controlador para listar usuários por nome
    async handle(req: Request, res: Response): Promise<Response> { // Manipulador da requisição
        try { // Tenta listar os usuários
            const { name, email } = req.params;

            const listUserByNameService = new ListUserByNameService();

            const users = await listUserByNameService.execute({
                name: Array.isArray(name) ? name[0] : name,
                email: Array.isArray(email) ? email[0] : email,
            });

            return res.status(200).json(users);
        } catch (error) {
            console.error("ListUserByNameController error:", error);
            return res.status(500).json({
                error: "Internal server error",
            });
        }
    }
}

export { ListUserByNameController };

