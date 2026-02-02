import Router from 'express';
import CreateBookController from '../../controllers/book/CreateBookController.js';
import ListAllBooksController from '../../controllers/book/ListAllBooksController.js';
import { IsAuthenticated } from '../../middlewares/isAuthenticatedUser.js';

const router = Router(); // Cria uma nova instância do roteador do Express
router.post('/create/book', IsAuthenticated, new CreateBookController().handle); // Define a rota POST para criar livro
router.get("/list/books/all",IsAuthenticated, new ListAllBooksController().handle)
export default router; // Exporta o roteador

