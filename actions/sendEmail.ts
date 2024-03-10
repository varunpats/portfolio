"use server"

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const message = formData.get("message");

    if (!validateString(email, 60)) {
        return {
            error: "Invalid email"
        }
    }

    if (!validateString(message, 2000)) {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'varunpatil2502@gmail.com',
            subject: 'Message from portfolio form.',
            reply_to: email as string,
            text: message as string
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                error: error.message
            }
        } else if (error && typeof error === 'object' && 'message' in error) {
            return {
                error: error.message
            }
        }
    }
}