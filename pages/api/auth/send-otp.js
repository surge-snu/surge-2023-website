import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { hashSync } from "bcrypt";
import { fetchUser } from "../../../services/userServer";
import { OTPTemplate } from "../../../public/Templates/OTP-template";
import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(SendOtp);

async function SendOtp(req, res) {
    console.log(req.body)
    const { email, friendlyName, password, confirmPassword } = req.body;
    const isUser = await fetchUser(email);
    console.log(isUser)
    if (isUser !== null) {
        return res.status(400).json({
            status: 400,
            message: { email: "Account already exists, Try logging in..." },
        });
    }
    if (friendlyName === null || friendlyName === "") {
        return res.status(400).json({
            status: 400,
            message: { name: "Invalid friendlyName" },
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
        to : email,
        subject : "OTP for Surge registration",
        html: OTPTemplate("Account Verification", otp, friendlyName, "If you didn't request for this, you can ignore the message")
    };

    let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'surge.snutech@gmail.com',
            pass : process.env.GMAIL_PASS,
        },
        secure : true,
    })
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            return res.status(400).json({
                status : 400,
                message : {email : "Something went wrong, Please try again later"},
                error: JSON.stringify(error)
            })
        }
        res.status(200).json({ status: 200, otp: `${hashSync(otp, 10)}` });
    })

}
