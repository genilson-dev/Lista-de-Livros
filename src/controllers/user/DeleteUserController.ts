import { Request, Response } from "express";

import { DeleteUserServer } from "../../servers/user/DeleteUserServer.js";

class DeleteUserController { // Controlador para deletar usuário
  async handle(req: Request, res: Response): Promise<Response> { // Manipulador da requisição
    try { // Tenta deletar o usuário
      const id = req.params.id as string; // Extrai o ID do usuário dos parâmetros da rota
        const deleteUserServer = new DeleteUserServer(); // Instancia o servidor de deleção de usuário
        await deleteUserServer.execute({ id }); // Executa o serviço com o ID fornecido

      return res.status(200).json({ message: "User deleted successfully" }); // Retorna sucesso na deleção
    } catch (error) { // Captura erros durante o processo
      console.error("DeleteUserController error:", error);
        return res.status(500).json({ // Retorna erro genérico de servidor
        error: "Internal server error",
        });
    }
  } 
}

export { DeleteUserController }; // Exporta o controlador
