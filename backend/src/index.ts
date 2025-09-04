import express from 'express';
import newsletterRouter from './routes/newsletterRoute';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
/*console.log("[ENV DEBUG]", {
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS, // Feel free to mask in production!
    NEWSLETTER_FROM: process.env.NEWSLETTER_FROM
});*/
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:4173'], // Add your frontend URLs
    credentials: true
}));

app.use(express.json());

app.use('/api', newsletterRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
