import 'dotenv/config';
import { z } from 'zod';

/**
 * Core env variables
 * Required for app to start
 */
const coreEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive(),
  CORS_ORIGINS: z.string().optional()
});

/**
 * SMTP env variables
 * Required ONLY when sending emails
 */
const smtpEnvSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  MAIL_FROM: z.string().min(1),
  MAIL_TO: z.string().min(1)
});

// Validate core env on startup
const parsedCoreEnv = coreEnvSchema.safeParse(process.env);

if (!parsedCoreEnv.success) {
  console.error('❌ Invalid core environment variables');
  console.error(parsedCoreEnv.error.format());
  process.exit(1);
}

const corsOrigins = parsedCoreEnv.data.CORS_ORIGINS
  ? parsedCoreEnv.data.CORS_ORIGINS.split(',')
      .map(origin => origin.trim())
      .filter(Boolean)
  : [];

export const env = {
  // Core
  nodeEnv: parsedCoreEnv.data.NODE_ENV,
  port: parsedCoreEnv.data.PORT,
  corsOrigins,
  /**
   * Lazy SMTP validation
   * Will throw ONLY when accessed
   */
  get smtp() {
    const parsedSmtpEnv = smtpEnvSchema.safeParse(process.env);

    if (!parsedSmtpEnv.success) {
      throw new Error(
        '❌ SMTP environment variables are missing or invalid'
      );
    }

    return {
      host: parsedSmtpEnv.data.SMTP_HOST,
      port: parsedSmtpEnv.data.SMTP_PORT,
      user: parsedSmtpEnv.data.SMTP_USER,
      pass: parsedSmtpEnv.data.SMTP_PASS,
      mailFrom: parsedSmtpEnv.data.MAIL_FROM,
      mailTo: parsedSmtpEnv.data.MAIL_TO
    };
  }
};
