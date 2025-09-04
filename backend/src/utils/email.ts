import nodemailer from 'nodemailer';
import 'dotenv/config'
import { promises as fs } from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


/*console.log("Loaded EMAIL_USER:", process.env.EMAIL_USER);
console.log("Loaded EMAIL_PASS:", process.env.EMAIL_PASS);*/

transporter.verify(function (error) {
    if (error) {
        console.log("SMTP verify error:", error);
    } else {
        console.log("SMTP is ready to send messages");
    }
});

export const sendNewsletterEmail = async (to: string) => {
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'newsletter-welcome.html');
    const html = await fs.readFile(templatePath, 'utf-8');

    await transporter.sendMail({
        from: process.env.NEWSLETTER_FROM,
        to,
        subject: 'Welcome to the Flivo Events Newsletter!',
        html
    });
};
