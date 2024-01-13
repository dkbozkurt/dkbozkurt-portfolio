"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // Simple server-side validation
    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        };
    }
    if(!validateString(message, 5000)){
        return {
            error: "Invalid message"
        };
    }

    try{
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'dkaanbozkurt@gmail.com',
            subject: 'Message from my website contact form',
            reply_to: senderEmail as string,
            text: message as string,
        });
    }
    catch(error: unknown){
        return {
            error : getErrorMessage(error),
        }
    }
};