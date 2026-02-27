import Router from 'express';
import CreateBookController from '../../controllers/book/CreateBookController.js';
import ListAllBooksController from '../../controllers/book/ListAllBooksController.js';
import { IsAuthenticated } from '../../middlewares/isAuthenticatedUser.js';
import DeleteBookController from '../../controllers/book/DeleteBookController.js';
import UpdateBookController from '../../controllers/book/UpdateBookController.js';

const router = Router(); // Cria uma nova instância do roteador do Express
router.post('/create/book', IsAuthenticated, new CreateBookController().handle); // Define a rota POST para criar livro
router.get("/list/books/all",IsAuthenticated, new ListAllBooksController().handle) // Define a rota GET para listar todos os livros criados no db
router.delete("/delete/book/:id", IsAuthenticated, new DeleteBookController().handle) // Define a rota DELETE para deletar um livro específico
router.put("/update/book/:id", IsAuthenticated, new UpdateBookController().handle) // Define a rota PUT para atualizar um livro específico
export default router; // Exporta o roteador

