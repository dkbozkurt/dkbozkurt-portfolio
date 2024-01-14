"use client"

import { useRef } from "react";
import { languageData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"

type LanguageProps = typeof languageData[number];

export default function Language({
    title,
    level,
    icon,
    description,
}: LanguageProps) 
{
    const ref = useRef<HTMLDivElement>(null);
    
    return (
        <motion.div
        ref={ref}
        className="mb-3 group sm:mb-8 last:mb-0"
        >
            <section 
        className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg"
        >
            <div
            className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
            >
                <h3
                className = "text-2xl font-semibold"
                >
                    {title}
                </h3>
    
                <p
                className="mt-2 leading-relaxed text-gray-700"
                >
                    {description}
                </p>
            </div>
                    
            <Image 
            src={icon} 
            alt="Language Image" 
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
