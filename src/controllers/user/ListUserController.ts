import { Request, Response } from "express";
import { ListUserService } from "../../servers/user/ListUserService.js";

class ListUserCController{ // Controlador para listar usuários
    async handle(_req: Request, res: Response){ // Manipulador da requisição
        const listUserService = new ListUserService(); // Instancia o serviço de listagem de usuários
        const users = await listUserService.execute(); // Executa o serviço para obter a lista de usuários
        return res.json(users); // Retorna a lista de usuários em formato JSON
    }
}
export default ListUserCController; // Exporta o controlador
