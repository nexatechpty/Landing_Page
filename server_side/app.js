const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors({ origin: "https://codespere.co.za" }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

app.post(
  "/submit",
  [
    // Validation rules
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, msg: errors.errors[0].msg });
    }

    // Data from the request
    const { name, email, subject, message } = req.body;

    // Message to send to Codespere email
    const htmlMsg = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; padding: 15px; background-color: #fafafa;">
      <div style="text-align: center; margin-bottom: 15px;">
        <img src="https://codespere.co.za/images/codespere_logo.png" alt="Codespere Logo" style="width: 80px; margin-bottom: 10px;">
      </div>
      <h1 style="color: #004080; text-align: center; margin-bottom: 15px;">New Request</h1>
            <p style="font-size: 1rem; margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
      <p style="font-size: 1rem; margin: 8px 0;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 1rem; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 1rem; margin: 8px 0;"><strong>Message:</strong></p>
      <blockquote style="font-size: 0.95rem; color: #555; margin: 8px 0; padding-left: 15px; border-left: 3px solid #007bff;">${message}</blockquote>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
      <p style="font-size: 0.85rem; color: #555; text-align: center;">
        This request was made from your website: 
        <a href="https://www.codespere.co.za" style="color: #007bff; text-decoration: none;">codespere.co.za</a>
      </p>
      <p style="font-size: 0.85rem; color: #555; text-align: center; margin-top: 10px;">
        © ${new Date().getFullYear()} Codespere | All rights reserved.
      </p>
    </div>`;

    const nexatechMessage = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; padding: 15px; background-color: #fafafa;">
      <div style="text-align: center; margin-bottom: 15px;">
        <img src="https://codespere.co.za/images/codespere_logo.png" alt="Codespere Logo" style="width: 80px; margin-bottom: 10px;">
      </div>
      <h1 style="color: #004080; text-align: center; margin-bottom: 15px;">Thank You for Reaching Out!</h1>
      <p style="font-size: 1rem; margin: 8px 0; text-align: justify;">
        Dear <strong>${name}</strong>, 
      </p>
      <p style="font-size: 1rem; margin: 8px 0; text-align: justify;">
        We have received your request and will get back to you as soon as possible. Our team is here to assist you with any questions or concerns.
      </p>
      <p style="font-size: 1rem; margin: 8px 0; text-align: justify;">
        In the meantime, feel free to explore our website for more information about our services.
      </p>
      <div style="text-align: center; margin: 15px 0;">
        <a href="https://www.codespere.co.za" style="background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 15px; border-radius: 5px; font-size: 0.95rem;">Visit Our Website</a>
      </div>
      <p style="font-size: 1rem; margin: 8px 0; text-align: justify;">
        Thank you for choosing Codespere.
      </p>
      <p style="font-size: 1rem; margin: 8px 0; text-align: justify;">
        <strong>Best regards,</strong><br>
        The Codespere Team
      </p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
      <div style="text-align: center; margin: 10px 0;">
        <a href="https://www.facebook.com/profile.php?id=61568964744778" style="margin: 0 5px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.instagram.com/_nexatech?igsh=bzlrZHV6MHNudnE=" style="margin: 0 5px;">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.linkedin.com/company/nexatechh" style="margin: 0 5px;">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" style="width: 24px; height: 24px;">
        </a>
        <a href="https://www.tiktok.com/@nayveetech" style="margin: 0 5px;">
          <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style="width: 24px; height: 24px;">
        </a>
      </div>
      <p style="font-size: 0.85rem; color: #555; text-align: center; margin-top: 10px;">
        © ${new Date().getFullYear()} Codespere | All rights reserved.
      </p>
    </div>`;

    // Config nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: process.env.SECURE === "true",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      // Transport nodemailer function to send email to Codespere email
      await transporter.sendMail({
        from: `Codespere Website <info@codespere.co.za>`,
        to: "info@codespere.co.za, nigel@codespere.co.za, siya@codespere.co.za, prosper@codespere.co.za",
        subject: subject,
        html: htmlMsg,
      });

      // Transport nodemailer function to send auto reply email to user
      await transporter.sendMail({
        from: `Codespere <info@codespere.co.za>`,
        to: email,
        subject: "Message Received",
        html: nexatechMessage,
      });

      // Respond with true status
      res.status(200).json({ status: true, msg: "Message sent successfully!" });
    } catch (error) {
      console.log(error);
      // Handle error and update user
      res.status(400).json({
        status: false,
        msg: "Failed to send message. Please make sure your email is valid and try again.",
      });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
