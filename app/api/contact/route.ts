import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";

// The contact form used to post to a Server Action. In Next 13 that opts the
// *whole page* out of static generation, so `/` was rendered by a serverless
// function on every single request (`cache-control: no-store`, TTFB ~2.6s
// cold / ~0.7s warm from Europe because the function runs in iad1). Moving the
// send behind a route handler keeps the page fully static and CDN-cached.
export const runtime = "nodejs";

export async function POST(request: Request) {
    const { senderEmail, message } = await request.json().catch(() => ({}));

    if (!validateString(senderEmail, 500)) {
        return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
    }
    if (!validateString(message, 5000)) {
        return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "dkaanbozkurt@gmail.com",
            subject: "Message from my website contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });

        return NextResponse.json({ data });
    } catch (error: unknown) {
        return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
    }
}
