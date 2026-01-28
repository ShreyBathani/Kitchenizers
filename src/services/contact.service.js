import { sendEmail } from './email.service.js';
import { contactEmailTemplate } from '../templates/emails/contact.template.js';
import { env } from '../config/env.js';

export async function handleContactMessage(data) {
  const html = contactEmailTemplate(data);

  await sendEmail({
    to: env.smtp.mailTo,
    subject: 'New Contact Message - Kitchenizers',
    html
  });
}
