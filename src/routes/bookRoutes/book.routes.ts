import Router from 'express';
import CreateBookController from '../../controllers/book/CreateBookController.js';

const router = Router(); // Cria uma nova instância do roteador do Express
router.post('/create/book', new CreateBookController().handle); // Define a rota POST para criar livro

export default router; // Exporta o roteador

