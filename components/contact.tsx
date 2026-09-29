"use client";

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { m } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const [isPending, setPending] = useState(false);

    // Posts to /api/contact instead of a Server Action so that `/` stays a
    // statically generated, CDN-cached page. See app/api/contact/route.ts.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        setPending(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    senderEmail: formData.get('senderEmail'),
                    message: formData.get('message'),
                }),
            });
            const { error } = await response.json();

            if (error) {
                toast.error(error);
                return;
            }

            toast.success("Email sent successfully!");
            form.reset();
        } catch (error) {
            toast.error("Could not send the message. Please try again.");
        } finally {
            setPending(false);
        }
    };

    return (
        <m.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{
                duration: 0.75,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>

            <p className="-mt-5 text-gray-700 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:dkaanbozkurt@gmail.com">dkaanbozkurt@gmail.com
                </a>
                {" "}or through this form.</p>

            <form className="flex flex-col mt-10 dark:text-black" onSubmit={handleSubmit}>
                <input
                    className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email..."
                />
                <textarea
                    name="message"
                    className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
                    required
                    maxLength={1000}
                    placeholder="Your message..."
                />

                <SubmitBtn pending={isPending} />
            </form>
        </m.section>
    )
}
