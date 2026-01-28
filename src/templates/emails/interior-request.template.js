import { baseEmailTemplate } from './base.template.js';

export function interiorRequestEmailTemplate(data) {
  const attachmentSection = data.attachmentUrl
    ? `<p>📐 <a href="${data.attachmentUrl}" target="_blank">View Design Files</a></p>`
    : `<p>📐 No files uploaded</p>`;

  const content = `
    <h2 style="color:#0f5c5c;margin-top:0;">
      🏡 New Interior Project Request
    </h2>

    <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;">
      <tr><td><strong>👤 Name:</strong></td><td>${data.name}</td></tr>
      <tr><td><strong>📧 Email:</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>📞 Phone:</strong></td><td>${data.phone || '-'}</td></tr>
      <tr><td><strong>💬 WhatsApp:</strong></td><td>${data.whatsappNumber || '-'}</td></tr>
      <tr><td><strong>🏗 Project Type:</strong></td><td>${data.projectType}</td></tr>
      <tr><td><strong>📦 Package:</strong></td><td>${data.package}</td></tr>
    </table>

    <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

    <h3 style="color:#0f5c5c;">📝 Project Details</h3>
    <p style="font-size:14px;line-height:1.6;">
      ${data.projectDetails}
    </p>

    ${attachmentSection}

    <p style="margin-top:20px;">
      📅 <strong>Discovery Call:</strong>
      ${data.discoveryCall ? 'Requested' : 'Not requested'}
    </p>
  `;

  return baseEmailTemplate({
    title: 'New Design Project Request',
    content
  });
}
