"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About", 0.5);

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>
                About me
            </SectionHeading>
            <p
                className="mb-6"
            >
                After taking programming courses during my bachelor's in Electrical & Electronics Engineering, I pursued my passion for a career in software development. I began by undertaking a few volunteer internships, where hands-on experience solidified my foundations in coding and problem-solving. Nothing excites me more than finding creative ways to solve challenging problems, which ultimately culminates in that satisfying “aha” moment when it all clicks into place.
            </p>
            <p className="mb-6">
                My core tech stack comprises C#, TypeScript, JavaScript, C++, and Python, though I continually look forward to learning any new technologies while keeping GitHub updated. Across my career, I have contributed to almost 30 shipped game projects. My experience as a Marketing Game Developer across various brands of hyper and hybrid casual games placed me in an appropriate position for the integration of novel mechanics, frequently pinpointing the correct time to jump in and implement massive functionality at a superior pace. This experience further deepened my love for OOP and clear maintainable code.
            </p>
            <p className="mb-6">
                In addition, my work as a Playable Ads Developer honed my optimization skills to ensure every feature not only met but exceeded performance expectations. I've developed playable ads for diverse games and brands, creating both 2D and 3D assets and integrating them seamlessly. This role expanded my design background, improved my UI/UX skills, and provided valuable experience with audio and video editing applications to fine-tune in-game sound and IEC-based ads.
            </p>
            <p className="mb-6">
                Most recently, I've developed a playable ads engine for automating both Playable Ad and IEC processes. This engine also fits ads into different ad network requirements and uses both Three.js and PixiJS to further facilitate ad crafting to pass through a searing optimization and coding stage. Through performance and marketing KPI analyses, I also gained insights into UA strategies.
            </p>
            <p>
                When I'm not coding or designing, I enjoy traveling, savoring sushi, and exploring geography. Having visited 35 countries so far, I'm continually inspired to discover more of our incredible planet.
            </p>

        </motion.section>
    );
}
