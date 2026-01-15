import { Router } from "express";
import CreateUserController from "../../controllers/user/CreateUserController.js";

const router = Router();

router.post("/create/user", new CreateUserController().handle);

export default router;
