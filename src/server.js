import app from './app.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';

console.log('typeof app:', typeof app);
console.log('app.listen:', app.listen);

const server = app.listen(env.port, () => {
  logger.info(`🚀 Server running on http://localhost:${env.port}`);
});

// Graceful shutdown
const shutdown = (signal) => {
  logger.info(`⚠️ Received ${signal}. Shutting down...`);
  server.close(() => {
    logger.info('✅ Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
process.on('uncaughtException', (err) => {
  logger.fatal(err);
  process.exit(1);
});
process.on('unhandledRejection', (err) => {
  logger.fatal(err);
  process.exit(1);
});
