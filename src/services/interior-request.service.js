import { sendEmail } from './email.service.js';
import { interiorRequestEmailTemplate } from '../templates/emails/interior-request.template.js';
import { env } from '../config/env.js';
export async function handleInteriorRequest(data) {
  const html = interiorRequestEmailTemplate(data);

  await sendEmail({
    to: env.smtp.mailTo,
    subject: 'New Interior Project Request - Kitchenizers',
    html
  });
}
