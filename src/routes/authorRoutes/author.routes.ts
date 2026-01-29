import Router from 'express';
import { IsAuthenticated } from '../../middlewares/isAuthenticatedUser.js';
import CreateAuthorController from '../../controllers/author/CreateAuthorController.js';
import { ListAuthorController } from '../../controllers/author/ListAuthorController.js';
import UpdateAuthorController from '../../controllers/author/UpdateAuthorController.js';

const router = Router(); // Cria uma nova instância do roteador do Express

router.post('/create/author', IsAuthenticated, new CreateAuthorController().handle); // Define a rota POST para criar autor
router.get('/authors/list',IsAuthenticated, new ListAuthorController().handle); // Define a rota GET para listar autores
router.put('/update/:id', IsAuthenticated, new UpdateAuthorController().handle); // Define a rota PUT para atualizar autor
export default router; // Exporta o roteador 