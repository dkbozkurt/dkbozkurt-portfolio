"use client";

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";

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
    </section>
  );
}
