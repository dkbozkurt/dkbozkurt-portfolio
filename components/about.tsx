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
                className="mb-12 mt-36"
            >
                I'm a Software Developer specializing in Playable Ads and HTML5 game development, with a strong background in building high-performance, lightweight interactive experiences. My work spans the full lifecycle of playable ads; from game mechanics and UI/UX to 2D/ 3D asset integration and performance optimization, ensuring each experience meets both creative and marketing goals.
            </p>
            <p className="mb-12">
                With experience across 30+ shipped games and playable ads, I've worked with TypeScript, JavaScript, C#, Unity Playworks(LunaLabs) PixiJS, and Three.js, often stepping in at critical moments to deliver scalable features at speed. This background has reinforced my appreciation for clean architecture, OOP principles, and maintainable codebases.
            </p>
            <p className="mb-12">
                Beyond development, I've built internal tools, npm libraries and engines to streamline Playable Ad and IEC production as well as supporting Design and Marketing teams, while leveraging performance data and marketing KPIs to inform technical decisions. I enjoy turning constraints into creative solutions, and continuously refining the craft of interactive advertising.
            </p>

        </motion.section>
    );
}
