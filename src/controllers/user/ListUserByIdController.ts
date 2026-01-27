import { Request, Response } from "express";
import { ListUserByIdService } from "../../servers/user/ListUserByIdService.js";

class ListUserByIdController { // Controlador para listar usuário por ID
  async handle(req: Request, res: Response): Promise<Response> { // Manipulador da requisição
    try { // Tenta listar o usuário
      const id = req.params.id as string; // Extrai o ID do usuário dos parâmetros da rota

      if (!id) { // Validação simples do ID
        return res.status(400).json({ // Retorna erro se o ID não for fornecido
          error: "User id is required", // Mensagem de erro
        });
      }

      const listUserByIdService = new ListUserByIdService(); // Instancia o serviço de listagem de usuário por ID
      const user = await listUserByIdService.execute({ id }); // Executa o serviço com o ID fornecido

      if (!user) { // Verifica se o usuário foi encontrado
        return res.status(404).json({ // Retorna erro se o usuário não for encontrado
          error: "User not found", // Mensagem de erro
        });
      }

      return res.status(200).json(user); // Retorna o usuário encontrado com status 200
    } catch (error) { // Captura erros durante o processo
      console.error("ListUserByIdController error:", error);

      return res.status(500).json({ // Retorna erro genérico de servidor
        error: "Internal server error",
      });
    }
  }
}

export { ListUserByIdController }; // Exporta o controlador
