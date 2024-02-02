"use client"

import { useRef } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlyAd({
    title,
    level,
    icon,
    description,
}: PlayableAdsProps) 
{
    const ref = useRef<HTMLDivElement>(null);
    
    return (
        <motion.div
        ref={ref}
        className="mx-[1rem] group sm:mb-8 last:mb-0"
        >
            <section 
        className="bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition rounded-lg flex flex-col items-center w-[12rem] h-[12rem] 
        sm:h-[16rem] sm:w-[16rem]"
        >
            <Image 
            src={icon} 
            alt="Language Image" 
            quality={95}
            className="
            scale-[1.6] transition flex justify-center group-hover:scale-[1.4] shadow-2xl m-5 relative w-[4rem] rounded-m mt-8 mb-4 mr-5"
            />

            <div className="flex flex-col items-center pb-4 mt-auto">
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
                className="flex mt-1 text-sm leading-relaxed text-gray-500"
                >
                    {description}
                </p>
            </div>
        </section>
        </motion.div>
    );
}
