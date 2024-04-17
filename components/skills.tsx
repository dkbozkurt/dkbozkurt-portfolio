"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData, softSkillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number)=>( {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

export default function Skills() {
    const {ref} = useSectionInView("Skills");

  return (
    <section
    id= "skills"
    ref = {ref}
    className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
        <SectionHeading>
            Skills
        </SectionHeading>

        <h1 className="mb-4 text-lg text-gray-800">- Technical Skills -</h1>
        
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                    key={index}
                    className = "px-5 py-3 bg-white borderBlack rounded-xl"
                    variants={fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>

        <h1 className="mt-24 mb-4 text-lg text-gray-800">- Soft Skills -</h1>

        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                softSkillsData.map((skill, index) => (
                    <motion.li 
                    key={index}
                    className = "px-5 py-3 bg-white borderBlack rounded-xl"
                    variants={fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
