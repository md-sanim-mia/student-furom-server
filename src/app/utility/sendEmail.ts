import nodemailer from "nodemailer";

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "hasansanim562@gmail.com",
      pass: "yyeg bbcn wymq wqsz",
    },
  });

  await transporter.sendMail({
    from: "hasansanim562@gmail.com", // sender address
    to,
    subject: "Reset Your Password Now", // Subject line
    text: `Dear User,

    We received a request to reset your password. Please click the link below to complete the password reset process:

    ${html}

    This link will be valid for 6 minit.

    If you did not request this, please ignore this email.

    Best regards,
    HCSF Team`, // plain text body
  });
};
