"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsBehance, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaBehanceSquare, FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]"
            id="home">
            <div className="flex items-center justify-center sm:mb-0">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/infoImages/DogukanProfile.jpg"
                            alt="Dogukan portrait"
                            width="192"
                            height="192"
                            quality="100"
                            priority={true}
                            className="mt-16 w-40 h-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:w-48 sm:h-48 sm:mt-0 w-"
                        />
                    </motion.div>
                    {/* <motion.span 
                className= "absolute bottom-0 right-0 text-5xl sm:text-6xl "
                initial ={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type:"spring",
                    stiffness: 125,
                    delay:0.1,
                    duration:0.7,
                }}
                >👋</motion.span> */}

                </div>
            </div>

            <motion.h1
                className="mb-16 mt-16 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello,</span> I'm {" "}
                <span className="font-bold">Dogukan Kaan Bozkurt.</span> I'm a{" "}
                <span className="font-bold">Senior Playable Ads. Developer/ Creative Developer.</span> I enjoy crafting{" "}
                <span className="italic">automation tools,</span> building{" "}
                <span className="italic">interactive advertisements,</span> and bringing{" "}
                <span className="italic">innovative designs</span> to life.
            </motion.h1>

            <motion.div
                className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact"
                    className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-30"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here
                    <BsArrowRight
                        className="transition opacity-70 group-hover:translate-x-2" />
                </Link>

                <a
                    className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
                    href="/CV_DogukanKaanBozkurt.pdf"
                    download={true}
                >
                    Download CV
                    <HiDownload
                        className="opacity-60 group-hover:translate-y-1 translation" />
                </a>

                <div className="flex items-stretch gap-2">
                    <a
                        className="flex items-center gap-2 p-4 text-gray-700 transition bg-white rounded-full cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://www.linkedin.com/in/dkbozkurt/en" target="_blank"
                    >
                        <BsLinkedin />
                    </a>


                    <a
                        className="flex items-center gap-2 p-4 text-[1.35rem] text-gray-700 transition bg-white rounded-full cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/dkbozkurt" target="_blank"
                    >
                        <FaGithubSquare />
                    </a>


                    <a
                        className="flex items-center gap-2 p-4 text-[1.35rem] text-gray-700 transition bg-white rounded-full cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://behance.com/dkbozkurt" target="_blank"
                    >
                        <FaBehanceSquare />
                    </a>
                </div>


            </motion.div>
        </section>
    );
}
