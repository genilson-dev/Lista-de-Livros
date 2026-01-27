import { Request, Response } from "express";
// import { AuthUserService } from "../../services/user/AuthUserService.js";
import { LoginUserService } from "../../servers/user/LoginUserService.js";

class LoginUserController { // Controlador para login de usuário
    async handle(req: Request, res: Response) { // Manipulador da requisição
        try { // Tenta autenticar o usuário
            const { email, password } = req.body; // Extrai email e senha do corpo da requisição

            if (!email || !password) { // Validação simples dos dados de login
                return res.status(400).json({ // Retorna erro se faltar algum campo obrigatório
                    error: "Email and password are required", // Mensagem de erro
                });
            }

            const loginUserService = new LoginUserService(); // Instancia o serviço de login de usuário

            const result = await loginUserService.execute({ // Executa o serviço com os dados fornecidos
                email, // email do usuário
                password, // senha do usuário
            });

            return res.status(200).json(result); // Retorna o resultado do login com status 200
        } catch (error) { // Captura erros durante o processo
            if (error instanceof Error) { // Verifica se o erro é uma instância de Error
                return res.status(401).json({ // Retorna erro de não autorizado
                    error: error.message, // Mensagem de erro
                });
            }

            return res.status(500).json({ // Retorna erro genérico de servidor
                error: "Internal server error", // Mensagem de erro
            });
        }
    }
}

export { LoginUserController }; // Exporta o controlador
