"use server"

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactForm from "@/email/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const message = formData.get("message");
    let data;

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
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'varunpatil2502@gmail.com',
            subject: 'Message from portfolio form.',
            reply_to: email as string,
            react: React.createElement(ContactForm, {
                message: message as string,
                email: email as string
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}