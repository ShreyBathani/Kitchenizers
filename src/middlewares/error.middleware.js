import { ZodError } from 'zod';
import { logger } from '../config/logger.js';

export function errorHandler(err, req, res, next) {
  if (err.message?.includes('file')) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS: Origin not allowed'
    });
  }
  
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation failed',
      success: false,
      errors: err.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message
      }))
    });
  }

  logger.error(err);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
}
