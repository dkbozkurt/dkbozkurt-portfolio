"use client";

import { useRef } from "react";
import { certificatesData} from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"

type CertificateProps = (typeof certificatesData)[number];

export default function Certificate({
    title,
    company,
    date,
    tags,
    imageUrl,
}: CertificateProps)
{
    const ref = useRef<HTMLDivElement>(null);

    return (
    <motion.div
    ref={ref}
    className="mb-3 h-50 group sm:mb-8 last:mb-6"
    >
        <section 
        className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg"
        >
            <div
            className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-4 sm:max-w-[58%] flex flex-col h-full sm:group-even:ml-[18rem]"
            >
                <h3
                className = "text-2xl font-semibold"
                >
                    {title}
                </h3>
    
                <p
                className="mt-0 text-gray-500"
                >
                    {date}
                </p>

                <p
                className="mt-2 leading-relaxed text-gray-700"
                >
                    {company}
                </p>
                <ul
                className="flex flex-wrap gap-2 mt-4 sm:mt-auto"
                >
                    {tags.map((tag, index) => (
                        <li 
                        className ="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase    tracking-wider  text-white rounded-full"
                        key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
                    
            <Image 
            src={imageUrl} 
            alt="Project Image" 
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
                    
            group-hover:scale-[1.04] 
            group-hover:-translate-x-3 
            group:hover:translate-y-3 
            group-hover:-rotate-2 
                    
            group-even:group-hover:translate-x-3 
            group-even:group:hover:translate-y-3 
            group-even:group-hover:rotate-2 
                    
            group-even:right-[initial] 
            group-even:-left-40 "
            />
        </section>
    </motion.div>
    );
}