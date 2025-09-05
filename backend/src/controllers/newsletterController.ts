import type { Request, Response } from 'express';
import { sendNewsletterEmail } from '../utils/email.js'; // use .js extension for ESM compatibility

export const subscribeNewsletter = async (req: Request, res: Response) => {
    const {email} = req.body;
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return res.status(400).json({message: 'Invalid email address'});
    }
    try {
        await sendNewsletterEmail(email);
        return res.json({message: 'Subscription successful, confirmation email sent.'});
    } catch (err) {
        return res.status(500).json({message: 'Error sending email', error: err});
    }
};
