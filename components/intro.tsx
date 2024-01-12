"use client";

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsBehance, BsLinkedin} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaBehance, FaBehanceSquare, FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className ="mb-28 max-w-[50rem] text-center">
        <div className = "flex items-center justify-center sm:mb-0">
            <div className= "relative">
                <motion.div
                    initial={{opacity: 0, scale:0}}
                    animate={{opacity: 1, scale:1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                alt="Dogukan portrait"
                width = "192"
                height= "192"
                quality="95"
                priority={true}
                className = "w-36 h-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                </motion.div>
                <motion.span 
                className= "absolute bottom-0 right-0 text-4xl"
                initial ={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type:"spring",
                    stiffness: 125,
                    delay:0.1,
                    duration:0.7,
                }}
                >👋</motion.span>
                
            </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I'm Dogukan.</span> I'm a{" "}
            <span className="font-bold">playable ads and web developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">automation tools, eating sushi and geography.</span>
        </motion.h1>

        <motion.div 
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{opacity: 0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay: 0.1,
        }}
        >
            <Link href="#contect"
            className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" >
                Contact me here 
                <BsArrowRight 
                className ="transition opacity-70 group-hover:translate-x-2"/>
            </Link>

            
            <a 
            className="flex items-center gap-2 py-3 bg-white rounded-full px-7"
            >
                Download CV <HiDownload />
            </a>


            <a
            className="flex items-center gap-2 p-4 text-gray-700 bg-white rounded-full"
            >
                <BsLinkedin />
            </a>


            <a
            className="flex items-center text-[1.35rem] gap-2 p-4 text-gray-700 bg-white rounded-full"
            >
                <FaGithubSquare/>
            </a>


            <a
            className="flex items-center text-[1.35rem] gap-2 p-4 text-gray-700 bg-white rounded-full"
            >
                <FaBehanceSquare/>
            </a>
        </motion.div>
    </section>
  );
}
