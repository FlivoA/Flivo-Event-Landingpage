import nodemailer from 'nodemailer';
import 'dotenv/config'
import { promises as fs } from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
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
