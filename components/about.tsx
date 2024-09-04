"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About",0.5);

    return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition = {{ delay: 0.175 }}
    id="about"
    >
        <SectionHeading>
            About me
        </SectionHeading>
        <p
        className="mb-6"
        >
            After completing programming-based courses in university and earning a bachelor's degree in Electrical & Electronics Engineering, I decided to pursue my passion for software development. I enrolled in volunteer software development internships and acquired the fundamentals of software development through hands-on work. My favorite aspect of programming is discovering creative solutions to problems. I love the feeling of finally figuring out a solution. My core stack includes C#, JavaScript, C++, Python, and I am also familiar with TypeScript. I am always eager to learn new technologies and keep my GitHub fresh and updated.
        </p>
        <p className = "mb-6">
            After starting my working life, I closely collaborated with design and marketing teams. My interest in the field of art drew me into the world of design. "Design" helps me express my creative ideas. I wouldn't call myself a designer, but I like to spend time doodling or using modeling apps.
        </p>
        <p>
            When I'm not coding or designing, I love traveling, savoring sushi and exploring the fascinating world of geography. I have traveled to 25 countries so far and want to continually explore the planet I live on. I also enjoy learning new things and am currently learning German.
        </p>

    </motion.section>
    );
}
