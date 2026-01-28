import { Router } from 'express';
import { submitProjectRequest } from '../controllers/project-request.controller.js';

const router = Router();

router.post('/project-request', submitProjectRequest);

export default router;
