import { Router } from 'express';
import projectRequestRoute from './project-request.route.js';
import healthRoute from './health.route.js';
import contactRoute from './contact.route.js';
import interiorRequestRoute from './interior-request.route.js';

const router = Router();

router.use('/health', healthRoute);
router.use('/api', projectRequestRoute);
router.use('/api', contactRoute);
router.use('/api', interiorRequestRoute);

export default router;
