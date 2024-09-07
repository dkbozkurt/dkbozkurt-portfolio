"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const {ref} = useSectionInView("Contact");

  return (
    <motion.section
    ref ={ ref }
    id="contact"
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{ opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{
        duration: 0.75,
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading>Contact Me</SectionHeading>

        <p className="-mt-5 text-gray-700">
            Please contact me directly at{" "}
            <a className = "underline" href="mailto:dkaanbozkurt@gmail.com">dkaanbozkurt@gmail.com
            </a>
            {" "}or through this form.</p>
            
            <form className="flex flex-col mt-10"
            action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if(error)
                {
                    toast.error(error);
                    return;
                }

                toast.success("Email sent successfully!");
            }}
            >
                <input 
                className="px-4 rounded-lg h-14 borderBlack" 
                name="senderEmail"
                type="email" 
                required
                maxLength={500}
                placeholder="Your email..." 
                />
                <textarea 
                name="message"
                className="p-4 my-3 rounded-lg h-52 borderBlack" 
                required
                maxLength={1000}
                placeholder="Your message..."
                />

                <SubmitBtn />
            </form>
    </motion.section>
  )
}
