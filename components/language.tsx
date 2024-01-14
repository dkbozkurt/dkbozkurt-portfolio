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
        className="mx-[1rem] group sm:mb-8 last:mb-0"
        >
            <section 
        className="bg-gray-100 w-[18rem] border border-black/5 overflow-hidden relative sm:h-[15rem] hover:bg-gray-200 transition rounded-lg flex flex-col items-center"
        >
            <Image 
            src={icon} 
            alt="Language Image" 
            quality={95}
            className="flex justify-center sm:block mt-8 mb-4 w-[3rem] transition
            group-hover:scale-[1.2] rounded-xl shadow-2xl sm:w-[7rem]"
            />

            <div className="flex flex-col items-center pb-4">
                <h3
                className = "text-2xl font-bold"
                >
                    {title}
                </h3>
                <p
                className="text-gray-700"
                >
                    {level}
                </p>
                <p
                className="mt-1 text-sm leading-relaxed text-gray-500"
                >
                    {description}
                </p>
            </div>
        </section>
        </motion.div>
    );
}
