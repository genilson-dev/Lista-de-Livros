import Router from 'express';
import CreateAuthorController from '../../controllers/author/CreateAuthorController.js';
const router = Router(); // Cria uma nova instância do roteador do Express

router.post('/create/author', new CreateAuthorController().handle); // Define a rota POST para criar autor

export default router; // Exporta o roteador 