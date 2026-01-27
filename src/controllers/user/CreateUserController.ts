import type { Request, Response } from 'express';
import {CreateUserService} from "../../servers/user/CreateUserService.js";

class CreateUserController { // Controlador para criar usuário
    async handle(req: Request, res: Response) { // Manipulador da requisição
        const { name, email, password } = req.body; // Extrai nome, email e senha do corpo da requisição 
        if (!name || !email || !password) { // Validação simples dos dados do usuário
            return res.status(400).json({ message: "Name, email and password are required" }); // Retorna erro se faltar algum campo obrigatório
        }
        const createUserService = new CreateUserService(); // Instancia o serviço de criação de usuário
        try { // Tenta criar o usuário
            const newUser = await createUserService.execute({ // Executa o serviço com os dados fornecidos
                name, // nome do usuário
                email, // email do usuário
                password, // senha do usuário
            });
            return res.status(201).json(newUser); // Retorna o usuário criado com status 201
        } catch (error) { // Captura erros durante o processo
            return res.status(400).json({ message: (error as Error).message }); // Retorna erro com status 400
        }
    }
}

export default CreateUserController; // Exporta o controlador
