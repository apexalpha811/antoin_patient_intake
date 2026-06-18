import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { patientName, patientEmail, pdfBase64, filename } = req.body;

  if (!pdfBase64 || !filename) {
    return res.status(400).json({ error: 'Missing PDF data' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const pdfBuffer = Buffer.from(pdfBase64, 'base64');

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'antoinstaff@gmail.com',
      subject: `New Patient Registration - ${patientName}`,
      html: `
        <h2>New Patient Registration Submission</h2>
        <p><strong>Patient Name:</strong> ${patientName}</p>
        <p><strong>Patient Email:</strong> ${patientEmail || 'Not provided'}</p>
        <p>The patient completed the online bilingual registration form. Please see the attached PDF.</p>
        <p><em>El paciente completó el formulario bilingüe de registro en línea. Por favor, consulte el PDF adjunto.</em></p>
      `,
      attachments: [
        {
          filename: filename,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
