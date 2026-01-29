import { NextResponse, NextRequest } from "next/server";
import nodemailer from 'nodemailer';

export const POST = async (request) => {

  const reqBody = await request.json();
  const { name, message } = reqBody;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'tkamit6@gmail.com', 
      pass: 'vliq ggxg hwqi nbsk', 
    },
  });
  const mailOptions = {
    from: 'tkamit6@gmail.com',
    to: 'tkamit6@gmail.com', 
    subject: `New contact form submission from ${name}`,
    text: name , message, 
    html: `<p>You have a new contact form submission from <strong>${name}</strong> (${message}):</p>`, 
  };


  try {
    console.log(reqBody)

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: message, name,
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message || "Unknown error" });
  }
};
