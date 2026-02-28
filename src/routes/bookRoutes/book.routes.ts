import Router from 'express';
import CreateBookController from '../../controllers/book/CreateBookController.js';
import ListAllBooksController from '../../controllers/book/ListAllBooksController.js';
import { IsAuthenticated } from '../../middlewares/isAuthenticatedUser.js';
import DeleteBookController from '../../controllers/book/DeleteBookController.js';
import UpdateBookController from '../../controllers/book/UpdateBookController.js';
import ListBookByIdController from '../../controllers/book/ListBookByIdController.js';
import ListBooksByTitleController from '../../controllers/book/ListBookByTitleController.js';

const router = Router(); // Cria uma nova instância do roteador do Express
router.post('/create/book', IsAuthenticated, new CreateBookController().handle); // Define a rota POST para criar livro
router.get("/list/books/all",IsAuthenticated, new ListAllBooksController().handle) // Define a rota GET para listar todos os livros criados no db
router.delete("/delete/book/:id", IsAuthenticated, new DeleteBookController().handle) // Define a rota DELETE para deletar um livro específico
router.put("/update/book/:id", IsAuthenticated, new UpdateBookController().handle) // Define a rota PUT para atualizar um livro específico
router.get("/list/book/:id", IsAuthenticated, new ListBookByIdController().handle) // Define a rota GET para listar um livro específico por ID
router.get("/book/:title", IsAuthenticated, new ListBooksByTitleController().handle) // Define a rota GET para listar um livro específico por título
export default router; // Exporta o roteador

