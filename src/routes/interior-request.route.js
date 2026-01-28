import { Router } from 'express';
import { submitInteriorRequest } from '../controllers/interior-request.controller.js';

const router = Router();

router.post('/interior-project-request', submitInteriorRequest);

export default router;
