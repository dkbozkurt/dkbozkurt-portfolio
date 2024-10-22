"use client"

import React from 'react'
import { playableAdsData } from '@/lib/data'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import PlayableAd from './playableAd';

export default function PlayableAds() {
    const { ref } = useSectionInView("PlayableAds", 0.5);

    return (
        <motion.section
            ref={ref}
            className="scroll-mt-28 mb-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="playableAds"
        >
            <SectionHeading>Playable Ads</SectionHeading>

            <div className="flex flex-wrap justify-center w-full gap-x-0 text-lg text-gray-800 gap-y-8 sm:w-full lg:w-[60rem] xl:w-[80rem]">
                {playableAdsData.map((playableAd, index) => (
                    <React.Fragment key={index}>
                        <PlayableAd {...playableAd} />
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    );
}