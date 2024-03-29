import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";
import { hashSync } from "bcrypt";
import { fetchUser } from "../../../services/userServer";
import { OTPTemplate } from "../../../public/Templates/OTP-template";
import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(SendPasswordOtp);

async function SendPasswordOtp(req, res) {
    const { email, password, confirmPassword } = req.body;
    const isUser = await fetchUser(email);

    if (isUser === null) {
        return res.status(400).json({
            status: 400,
            message: { email: "Account does not exist, Sign up instead" },
        });
    }

    if (password.trim() !== confirmPassword.trim()) {
        return res.status(400).json({
            status: 400,
            message: { password: "Passwords does not match" },
        });
    }

    const nanoid = customAlphabet("1234567890abcdef");
    const otp = nanoid(5);
    var mailOptions = {
        to: email,
        subject: "OTP for Surge registration",
        html: OTPTemplate(
            "Password Reset",
            otp,
            isUser.name,
            "If you didn't request for password reset, you can ignore this email"
        ),
    };
    let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'surge.snutech@gmail.com',
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(400).json({
                status: 400,
                message: { email: "Something went wrong, Try again later..." },
                error: JSON.stringify(error),
            });
        }

        res.status(200).json({ status: 200, otp: `${hashSync(otp, 10)}` });
    });
}
