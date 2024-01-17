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
        className="bg-gray-100 border border-black/5 overflow-hidden relative hover:bg-gray-200 transition rounded-lg flex flex-col items-center w-[24rem] h-[5rem] 
        sm:h-[12rem] sm:w-[12rem]"
        >
            <Image 
            src={icon} 
            alt="Language Image" 
            quality={95}
            className="
            transition rounded-s flex justify-center group-hover:scale-[1.2] shadow-2xl 
            absolute m-5 w-[3rem] mr-[18rem]
            sm:relative sm:w-[4rem] sm:rounded-xl sm:mt-8 sm:mb-4 sm:mr-5"
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
