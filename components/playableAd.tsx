"use client"

import { useRef } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlyAd({
    appName,
    playableName,
    icon,
    url
}: PlayableAdsProps)
{
    const ref = useRef<HTMLDivElement>(null);
    
    const handleClick = () => {
        // Perform any actions you need before navigating, if necessary
        // For example, sending analytics events, tracking the click, etc.
    
        // Navigate to the specified URL
        window.location.href = url;
      };
      
    return (
        <a href={url} onClick={handleClick}>
        <motion.div
        ref={ref}
        className="mx-[1rem] group sm:mb-8 last:mb-0"
        >
            <section 
        className="bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-[16rem] h-[16rem]"
        >
            <Image 
            src={icon} 
            alt="Language Image" 
            quality={95}
            className="
            rounded-[2rem] transition flex justify-center group-hover:scale-[1.1] shadow-2xl m-5 relative h-[8rem] w-[8rem] rounded-m mt-3 mb-2 mr-5"
            />

            <div className="flex flex-col items-center pb-3 mt-auto">
                <h3
                className = "text-2xl font-bold"
                >
                    {appName}
                </h3>
                <p
                className="pb-1 text-gray-700"
                >
                    {playableName}
                </p>
                <div
                className="transition items-center flex w-[11rem] h-2 gap-1 pl-8 p-4 text-white text-m bg-gray-900 rounded-full outline-none sm:w-[12rem]"
                >
                    Click to Play
                    <BsArrowRight 
                className ="transition opacity-70 group-hover:translate-x-2"/>
                </div>
            </div>
        </section>
        </motion.div>
        </a>
    );
}
