"use client"

import React from 'react'
import { languageData, playableAdsData } from '@/lib/data'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import PlayableAd from './playableAd';

export default function PlayableAds() {

    const {ref} = useSectionInView("PlayableAds",0.5);
    
    return (
    <motion.section
    ref = {ref}
    className="scroll-mt-28 mb-28"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition = {{ delay: 0.2 }}
    id="playableAds"
    >
        <SectionHeading>
            Playable Ads.
        </SectionHeading>
        
        <div className="flex flex-wrap justify-center w-[32rem] gap-x-1 text-lg text-gray-800 gap-y-8
        sm:w-[40rem] sm:gap-x-2
        lg:w-[72rem] 
        xl:w-[90rem]">
            {
                playableAdsData.map((playableAd, index) => (
                    <React.Fragment key={index}>
                        <PlayableAd {...playableAd} />
                    </React.Fragment>
                ))
            }
        </div>

    </motion.section>
    );
}
