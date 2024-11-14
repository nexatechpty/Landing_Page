const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  console.log("Function invoked"); // Log entry point for debugging

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  // Parsing body data and logging it to verify input
  let formData;
  try {
    formData = JSON.parse(event.body);
    console.log("Received data:", formData);
  } catch (parseError) {
    console.error("Error parsing JSON body:", parseError);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid JSON format",
        error: parseError.toString(),
      }),
    };
  }

  const { name, email, subject, message } = formData;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Adjust if using a different email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@nexatech.co.za",
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    console.log("Sending email..."); // Log before sending email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully"); // Log success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (emailError) {
    console.error("Error sending email:", emailError); // Log email-specific errors
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email",
        error: emailError.toString(),
      }),
    };
  }
};
