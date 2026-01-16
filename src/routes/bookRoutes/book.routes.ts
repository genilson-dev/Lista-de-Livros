import Router from 'express';
import CreateBookController from '../../controllers/book/CreateBookController.js';

const router = Router();
router.post('/create/book', new CreateBookController().handle);

export default router;

