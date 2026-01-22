import { Request, Response } from "express";
import { ListUserService } from "../../servers/user/ListUserService.js";

class ListUserCController{
    async handle(req: Request, res: Response){
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return res.json(users);
    }
}
export default ListUserCController;
