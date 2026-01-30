import { baseEmailTemplate } from './base.template.js';

export function contactEmailTemplate(data) {
  const attachments = data.attachmentUrls || [];

  /* =========================
     Multiple attachments block
  ========================= */
  const attachmentBlock =
    attachments.length > 0
      ? `
        <h3 style="color:#0f5c5c;margin-bottom:10px;">📎 Attachments</h3>
        <ul style="padding-left:18px;margin:0;font-size:14px;line-height:1.8;">
          ${attachments
            .map((url, index) => {
              const fileName = url.split('/').pop()?.split('?')[0];

              return `
                <li>
                  <a
                    href="${url}"
                    target="_blank"
                    style="color:#0f5c5c;text-decoration:none;font-weight:500;"
                  >
                    📄 File ${index + 1}
                  </a>
                </li>
              `;
            })
            .join('')}
        </ul>
      `
      : `
        <p style="font-size:14px;">📎 No attachments provided</p>
      `;

  const content = `
    <h2 style="color:#0f5c5c;margin-top:0;">
      📩 New Contact Message
    </h2>

    <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;border-collapse:collapse;">
      <tr><td><strong>👤 Name:</strong></td><td>${data.name}</td></tr>
      <tr><td><strong>📧 Email:</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>📞 Phone:</strong></td><td>${data.phone || '-'}</td></tr>
    </table>

    <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

    <h3 style="color:#0f5c5c;">💬 Message</h3>
    <p style="font-size:14px;line-height:1.6;white-space:pre-line;">
      ${data.message}
    </p>

    <div style="margin-top:18px;">
      ${attachmentBlock}
    </div>

    <p style="margin-top:20px;font-size:14px;">
      📅 <strong>Discovery Call:</strong>
      ${data.discoveryCall ? 'Requested' : 'Not requested'}
    </p>
  `;

  return baseEmailTemplate({
    title: 'New Contact Message',
    content
  });
}
