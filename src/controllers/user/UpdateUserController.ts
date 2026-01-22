import { Request, Response } from "express";
import { UpdateUserService } from "../../servers/user/UpdateUserServer.js";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string };
        const { name, email, password } = req.body;
        const updateUserService = new UpdateUserService();
        const user = await updateUserService.execute({
            id,
            userId: id,
            name,
            email,
            password
        });
        console.log(user);

        return res.json(user);
    }
}
export default UpdateUserController;
