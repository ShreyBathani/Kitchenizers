import { Router } from 'express';
import { submitContactMessage } from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact', submitContactMessage);

export default router;
