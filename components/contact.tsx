import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
    id="contact"
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
        <SectionHeading>Contact Me</SectionHeading>

        <p className="-mt-5 text-gray-700">
            Please contact me directly at{" "}
            <a className = "underline" href="mailto:dkaanbozkurt@gmail.com">dkaanbozkurt@gmail.com
            </a>
            {" "}or through this form.</p>
            
            <form className="flex flex-col mt-10">
                <input className="px-4 rounded-lg h-14 borderBlack" type="email" placeholder="Your email..." />

                <textarea className="p-4 my-3 rounded-lg h-52 borderBlack" placeholder="Your message..."/>

                <button type="submit" 
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105">
                    Submit <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
                </button>
            </form>
    </section>
  )
}
