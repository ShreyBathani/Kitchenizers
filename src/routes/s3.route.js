import { Router } from 'express';
import { createPresignedUpload } from '../controllers/s3.controller.js';

const router = Router();

router.post('/s3/presign', createPresignedUpload);

export default router;
