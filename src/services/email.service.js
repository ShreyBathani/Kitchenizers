import nodemailer from 'nodemailer';
import { logger } from '../config/logger.js';
import { env } from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: false,
  auth: {
    user: env.smtp.user,
    pass: env.smtp.pass
  }
});

export async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: env.smtp.mailFrom,
      to,
      subject,
      html
    });

    logger.info({ messageId: info.messageId }, 'Email sent');
  } catch (error) {
    logger.error(error, 'Failed to send email');
    throw error;
  }
}
