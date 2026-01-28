import { baseEmailTemplate } from './base.template.js';

export function projectRequestEmailTemplate(data) {
  const content = `
    <h2 style="color:#0f5c5c;margin-top:0;">
      💻 New IT Project Request
    </h2>

    <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;">
      <tr><td><strong>👤 Name:</strong></td><td>${data.name}</td></tr>
      <tr><td><strong>📧 Email:</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>🏢 Company:</strong></td><td>${data.company || '-'}</td></tr>
      <tr><td><strong>📞 Phone:</strong></td><td>${data.phone || '-'}</td></tr>
      <tr><td><strong>🛠 Service Type:</strong></td><td>${data.serviceType}</td></tr>
      <tr><td><strong>💰 Budget:</strong></td><td>${data.budgetRange || '-'}</td></tr>
    </table>

    <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

    <h3 style="color:#0f5c5c;">📝 Project Description</h3>
    <p style="font-size:14px;line-height:1.6;">
      ${data.description}
    </p>

    <p style="margin-top:20px;">
      📅 <strong>Discovery Call:</strong>
      ${data.discoveryCall ? 'Requested' : 'Not requested'}
    </p>
  `;

  return baseEmailTemplate({
    title: 'New IT Project Request',
    content
  });
}
