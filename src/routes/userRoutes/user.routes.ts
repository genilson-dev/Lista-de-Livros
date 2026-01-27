import { Router } from "express";
import CreateUserController from "../../controllers/user/CreateUserController.js";
import ListUserCController from "../../controllers/user/ListUserController.js";
import UpdateUserController from "../../controllers/user/UpdateUserController.js";
import {LoginUserController} from "../../controllers/user/LoginUserController.js";
import { IsAuthenticated } from "../../middlewares/isAuthenticatedUser.js";
import { ListUserByIdController } from "../../controllers/user/ListUserByIdController.js";
import { ListUserByNameController } from "../../controllers/user/ListUserByNameController.js";
const router = Router(); // Cria uma nova instância do roteador do Express

router.post("/create/user",  new CreateUserController().handle); // Define a rota POST para criar usuário
router.post("/login/user", new LoginUserController().handle); // Define a rota POST para login de usuário
router.get("/list/users",IsAuthenticated, new ListUserCController().handle); // Define a rota GET para listar usuários
router.put("/user/:id",IsAuthenticated, new UpdateUserController().handle); // Define a rota PUT para atualizar usuário
router.get("/list/:id",IsAuthenticated, new ListUserByIdController().handle); // Define a rota GET para listar usuário por ID
router.get("/users/:name/:email", IsAuthenticated, new ListUserByNameController().handle); // Define a rota GET para listar usuário por nome



export default router; // Exporta o roteador
