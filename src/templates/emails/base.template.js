export function baseEmailTemplate({ title, content }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0f5c5c;padding:20px 30px;color:#ffffff;">
              <h1 style="margin:0;font-size:22px;">Kitchenizers</h1>
              <p style="margin:5px 0 0;font-size:13px;color:#d9f3f3;">
                24-Hour Kitchen Design & IT Solutions
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0fafa;padding:20px 30px;font-size:12px;color:#555;">
              <p style="margin:0 0 8px;">
                📍 Ahmedabad, Gujarat, India
              </p>
              <p style="margin:0 0 8px;">
                📧 hello@kitchenizers.com | 📞 +91 7984269071
              </p>
              <p style="margin:0;color:#888;">
                © ${new Date().getFullYear()} Kitchenizers. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}
