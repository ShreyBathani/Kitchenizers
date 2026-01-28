import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { env } from './config/env.js';

import { logger } from './config/logger.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

// Security
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server, curl, Postman
      if (!origin) return callback(null, true);

      if (env.corsOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
  })
);

// Body parsing
app.use(express.json({ limit: '1mb' }));

// Request logging (lightweight)
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

// Routes
app.use('/', routes);

// Error handler (last)
app.use(errorHandler);

export default app;
