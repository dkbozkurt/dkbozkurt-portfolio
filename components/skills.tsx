"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { skillsData, softSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Skills</SectionHeading>

            <h1 className="mb-4 text-lg text-gray-800 dark:text-white/50">- Technical Skills -</h1>

            {/* Loop through each skill group */}
            {skillsData.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="mb-8">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                        {skillGroup.map((skill, index) => (
                            <motion.li
                                key={index}
                                className="flex flex-col items-center justify-start w-24 gap-2 px-2 py-3 bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                            <div className="flex items-center justify-center w-10 h-10">
                                <Image
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                                <span className="text-sm leading-tight text-center">{skill.name}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}

            <h1 className="mt-24 mb-4 text-lg text-gray-800 dark:text-white/50">- Soft Skills -</h1>

            <ul className="flex flex-wrap justify-center gap-1 text-lg text-gray-800">
                {softSkillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="px-5 py-3 bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}