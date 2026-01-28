import { sendEmail } from './email.service.js';
import { projectRequestEmailTemplate } from '../templates/emails/project-request.template.js';
import { env } from '../config/env.js';

export async function handleProjectRequest(data) {
  const html = projectRequestEmailTemplate(data);

  await sendEmail({
    to: env.smtp.mailTo,
    subject: 'New IT Project Request - Kitchenizers',
    html
  });
}
