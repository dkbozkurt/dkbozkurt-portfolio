"use client"

import React from 'react'
import { languageData } from '@/lib/data'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import Language from './language';

export default function Languages() {
    const { ref } = useSectionInView("Languages",0.5);
    
    return (
    <motion.section
    ref={ref}
    className="scroll-mt-28 mb-28"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition = {{ delay: 0.2 }}
    id="languages"
    >
        <SectionHeading>
            Languages
        </SectionHeading>
        
        <div className = "flex flex-wrap justify-center w-[24rem] gap-2 text-lg text-gray-800 sm:w-[42rem]">
            {
                languageData.map((language, index) => (
                    <React.Fragment key={index}>
                        <Language {...language} />
                    </React.Fragment>
                ))
            }
        </div>

    </motion.section>
    );
}
