import { Router } from "express";
import CreateUserController from "../../controllers/user/CreateUserController.js";
import ListUserCController from "../../controllers/user/ListUserController.js";
import UpdateUserController from "../../controllers/user/UpdateUserController.js";

const router = Router();

router.post("/create/user", new CreateUserController().handle);
router.get("/list/users", new ListUserCController().handle);
router.put("/user/:id", new UpdateUserController().handle);
export default router;
