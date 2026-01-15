import type { Request, Response } from 'express';

import {CreateUserService} from "../../servers/user/CreateUserService.js";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const createUserService = new CreateUserService();
        try {
            const newUser = await createUserService.execute({
                name,
                email,
                password,
            });
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default CreateUserController;
