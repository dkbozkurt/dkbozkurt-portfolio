"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <header className="z-[999] relative">
        <motion.div className ="fixed top-0 left-1/2 h-[8.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[5.25rem] sm:w-[36rem] sm:rounded-full
        lg:top-6 lg:h-[3.25rem] lg:w-[68rem] lg:rounded-full"
            initial={{y: -100, x: "-50%", opacity: 0}}
            animate={{y: 0,  x: "-50%", opacity: 1}}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] h-16 left-1/2 -translate-x-1/2 py-2 
        sm:top-[1.7rem] sm:h-12 sm:py-0 sm:w-[34rem] 
        lg:top-[1.7rem] lg:h-[initial] lg:py-0 lg:w-[63rem] 
        ">
            <ul className ="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] 
            lg:flex-nowrap lg:gap-5">
                {
                    links.map(link => (
                        <motion.li
                        className = "relative flex items-center justify-center h-3/4" 
                        key={link.hash}
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0,  opacity: 1}}
                        >
                            <Link
                            className={clsx("flex items-center justify-center w-full px-3 py-3 transition hover:text-gray-950",{
                               "text-gray-950": activeSection === link.name,
                            })} 
                            href={link.hash}
                            onClick={() => {
                                setActiveSection(link.name);
                                setTimeOfLastClick(Date.now());
                            }}
                            >
                                {link.name}

                                {
                                    link.name === activeSection && (
                                        <motion.span 
                                        className="absolute inset-0 bg-gray-100 rounded-full -z-10"  
                                        layoutId="activeSection"
                                        transition={{
                                            type:"spring",
                                            stiffness:380,
                                            damping:30,
                                        }}
                                        >
                                        </motion.span>
                                    )
                                }

                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </nav>
    </header>
  );
}
