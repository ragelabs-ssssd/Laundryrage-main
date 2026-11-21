import nodemailer from 'nodemailer';

// Admin email to receive notifications
const ADMIN_EMAIL = 'sahooswarup60@gmail.com';

// Create a transporter using Gmail SMTP
// For production, use environment variables for credentials
// For now, we use a test/ethereal account as fallback
let transporter = null;

async function getTransporter() {
  if (transporter) return transporter;

  // Try to use Gmail with App Password if env vars are set
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Fallback: create an Ethereal test account (emails captured but not actually delivered)
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log('📧 Using Ethereal test email (emails will be logged, not delivered)');
      console.log('   To send real emails, set EMAIL_USER and EMAIL_PASS in .env');
    } catch {
      console.log('⚠️  Email service unavailable — notifications will be logged to console only');
      return null;
    }
  }
  return transporter;
}

async function sendLoginNotification(userData, action = 'login') {
  const actionText = action === 'signup' ? 'New Sign Up' : 'User Login';
  const subject = `🔔 LaundryRage: ${actionText} — ${userData.name || userData.email}`;

  const html = `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: #facc15; padding: 24px 32px;">
        <h1 style="margin: 0; color: #111827; font-size: 24px;">🧺 LaundryRage</h1>
        <p style="margin: 4px 0 0; color: #374151; font-weight: 600;">Admin Notification</p>
      </div>
      <div style="padding: 32px;">
        <h2 style="color: #111827; margin-top: 0;">${actionText}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #6b7280; width: 120px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 700;">${userData.name || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #6b7280;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 700;">${userData.email}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #6b7280;">Action</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
              <span style="background: ${action === 'signup' ? '#dcfce7' : '#dbeafe'}; color: ${action === 'signup' ? '#166534' : '#1e40af'}; padding: 4px 12px; border-radius: 99px; font-weight: 700; font-size: 13px;">
                ${actionText}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #6b7280;">Time</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 700;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; color: #9ca3af; font-size: 13px;">
          This is an automated notification from LaundryRage admin system.
        </p>
      </div>
    </div>
  `;

  try {
    const t = await getTransporter();
    if (!t) {
      console.log(`📧 [EMAIL LOG] ${subject} — ${userData.email} at ${new Date().toISOString()}`);
      return;
    }

    const info = await t.sendMail({
      from: '"LaundryRage Admin" <noreply@laundryrage.com>',
      to: ADMIN_EMAIL,
      subject,
      html,
    });

    console.log(`📧 Notification sent: ${info.messageId}`);

    // If using Ethereal, log the preview URL
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`   Preview: ${previewUrl}`);
    }
  } catch (err) {
    console.error('📧 Email send failed (non-blocking):', err.message);
  }
}

export { sendLoginNotification, ADMIN_EMAIL };
