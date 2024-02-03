"use client"

import { useRef } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlyAd({
    appName,
    playableName,
    icon,
    playButton,
    url
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
            rounded-[2rem] transition flex justify-center group-hover:scale-[1.15] shadow-2xl m-5 relative w-[8rem] rounded-m mt-6 mb-2 mr-5"
            />

            <div className="flex flex-col items-center pb-4 mt-auto">
                <h3
                className = "text-2xl font-bold"
                >
                    {appName}
                </h3>
                <p
                className="text-gray-700"
                >
                    {playableName}
                </p>
                <p
                className="flex mt-1 text-sm leading-relaxed text-gray-500"
                >
                    {playButton}
                </p>
            </div>
        </section>
        </motion.div>
    );
}
