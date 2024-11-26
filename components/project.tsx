"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion,useScroll, useTransform} from "framer-motion"

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    date,
    description,
    tags,
}: ProjectProps)
{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress= useTransform(scrollYProgress, [0,1], [0.7,1]);
    const opacityProgress= useTransform(scrollYProgress, [0,1], [0.6,1]);

    return (
    <motion.div
    ref={ref}
    style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
    className="mb-3 group sm:mb-8 last:mb-6"
    >
        <section 
        className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[15rem] hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
        >
            <div
            className="flex flex-col h-full px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-4"
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
                className="mt-2 leading-relaxed text-gray-700 dark:text-white/70"
                >
                    {description}
                </p>
    
                <ul
                className="flex flex-wrap gap-2 mt-4 sm:mt-auto dark:text-white/70"
                >
                    {tags.map((tag, index) => (
                        <li 
                        className ="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase    tracking-wider  text-white rounded-full"
                        key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

        </section>
    </motion.div>
    );
}