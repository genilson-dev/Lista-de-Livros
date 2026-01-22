import { Router } from "express";
import CreateUserController from "../../controllers/user/CreateUserController.js";
import ListUserCController from "../../controllers/user/ListUserController.js";
import { get } from "node:http";
const router = Router();

router.post("/create/user", new CreateUserController().handle);
router.get("/list/users", new ListUserCController().handle);
export default router;
