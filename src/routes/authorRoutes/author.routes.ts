import Router from 'express';
import CreateAuthorController from '../../controllers/author/CreateAuthorController.js';
const router = Router();

router.post('/create/author', new CreateAuthorController().handle);

export default router;