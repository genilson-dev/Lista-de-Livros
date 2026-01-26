import { Router } from "express";
import CreateUserController from "../../controllers/user/CreateUserController.js";
import ListUserCController from "../../controllers/user/ListUserController.js";
import UpdateUserController from "../../controllers/user/UpdateUserController.js";
import {LoginUserController} from "../../controllers/user/LoginUserController.js";
import { IsAuthenticated } from "../../middlewares/isAuthenticatedUser.js";

const router = Router();

router.post("/create/user",  new CreateUserController().handle);
router.post("/login/user", new LoginUserController().handle);
router.get("/list/users",IsAuthenticated, new ListUserCController().handle);
router.put("/user/:id",IsAuthenticated, new UpdateUserController().handle);
export default router;
