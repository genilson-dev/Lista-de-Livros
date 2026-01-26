import { Request, Response } from "express";
// import { AuthUserService } from "../../services/user/AuthUserService.js";
import { LoginUserService } from "../../servers/user/LoginUserService.js";

class LoginUserController {
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    error: "Email and password are required",
                });
            }

            const loginUserService = new LoginUserService();

            const result = await loginUserService.execute({
                email,
                password,
            });

            return res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).json({
                    error: error.message,
                });
            }

            return res.status(500).json({
                error: "Internal server error",
            });
        }
    }
}

export { LoginUserController };
