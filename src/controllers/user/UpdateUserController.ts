import { Request, Response } from "express";
import { UpdateUserService } from "../../servers/user/UpdateUserServer.js";

class UpdateUserController { // Controlador para atualizar usuário
    async handle(req: Request, res: Response) { // Manipulador da requisição
        const { id } = req.params as { id: string }; // Extrai o ID do usuário dos parâmetros da requisição
        const { name, email, password } = req.body; // Extrai nome, email e senha do corpo da requisição
        const updateUserService = new UpdateUserService(); // Instancia o serviço de atualização de usuário
        const user = await updateUserService.execute({ // Executa o serviço com os dados fornecidos
            id, // ID do usuário
            userId: id, // ID do usuário
            name, // nome do usuário
            email, // email do usuário
            password // senha do usuário
        });
        
        return res.json(user); // Retorna o usuário atualizado em formato JSON
    }
}
export default UpdateUserController; // Exporta o controlador
