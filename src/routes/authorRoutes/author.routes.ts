import Router from 'express';
import { IsAuthenticated } from '../../middlewares/isAuthenticatedUser.js';
import CreateAuthorController from '../../controllers/author/CreateAuthorController.js';
import { ListAuthorController } from '../../controllers/author/ListAuthorController.js';
import UpdateAuthorController from '../../controllers/author/UpdateAuthorController.js';
import { DeleteAuthorController } from '../../controllers/author/DeleteAuthorController.js';
import ListAuthorByIdController from '../../controllers/author/ListAuthorByIdController.js';
import ListAuthorByNameController from '../../controllers/author/ListAuthorByNameController.js';


const router = Router(); // Cria uma nova instância do roteador do Express

router.post('/create/author', IsAuthenticated, new CreateAuthorController().handle); // Define a rota POST para criar autor
router.get('/authors/list',IsAuthenticated, new ListAuthorController().handle); // Define a rota GET para listar autores
router.put('/update/:id', IsAuthenticated, new UpdateAuthorController().handle); // Define a rota PUT para atualizar autor
router.delete('/author/delete/:id', IsAuthenticated, new DeleteAuthorController().handle); // Define a rota DELETE para deletar autor
router.get("/author/list/", IsAuthenticated, new ListAuthorByNameController().handle)
router.get("/author/list/:id", IsAuthenticated, new ListAuthorByIdController().handle)
export default router; // Exporta o roteador 