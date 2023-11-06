'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value: unknown) =>{
    if(!value || typeof value != 'string'){
        return false;
    }
    return true;
}
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!message || typeof message != 'string'){
        return{
            error: 'Invalid message'
        }
    }

    if(!validateString(senderEmail)){
        return{
            error: 'Invalid sender'
        }
    }

    resend.emails.send({
        from: 'onbording@resend.dev',
        to: 'tkamit6@gmail.com',
        subject: "Message from contact form",
        text: message,
    })
}