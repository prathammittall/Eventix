import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email endpoint
app.post('/api/sendEmail', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error('Missing environment variables:', {
            hasEmailUser: !!process.env.EMAIL_USER,
            hasEmailPassword: !!process.env.EMAIL_PASSWORD
        });
        return res.status(500).json({ message: 'Email configuration is missing' });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        // Verify transporter configuration
        await transporter.verify();
        
        // Send welcome email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Eventix!',
            html: `
                <h1>Welcome to Eventix!</h1>
                <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with the latest campus events and opportunities.</p>
                <p>Stay tuned for exciting updates!</p>
                <br>
                <p>Best regards,</p>
                <p>The Eventix Team</p>
            `
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Detailed error sending email:', error);
        res.status(500).json({ 
            message: 'Failed to send email',
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 