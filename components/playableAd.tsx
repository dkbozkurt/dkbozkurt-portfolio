"use client"

import { useRef } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";
import React, { useState } from 'react';

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlyAd({
    appName,
    playableName,
    icon,
    url
}: PlayableAdsProps)
{
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const handleClick = (targetURL:string) => {
        setOverlayVisible(!isOverlayVisible);

        // const basePath = process.env.PUBLIC_URL || '';
        // const url = `${basePath}${targetURL}`;
        // window.open(url, '_blank');
    };
      
    return (
        <a onClick={() => handleClick(url)}>
          <motion.div ref={ref} className="mx-[1rem] group sm:mb-8 last:mb-0">
            <section className="bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-[16rem] h-[16rem]">
              <Image
                src={icon}
                alt="Language Image"
                quality={95}
                className="rounded-[2rem] transition flex justify-center group-hover:scale-[1.1] shadow-2xl m-5 relative h-[8rem] w-[8rem] rounded-m mt-3 mb-2 mr-5"
              />
    
              <div className="flex flex-col items-center pb-3 mt-auto">
                <h3 className="text-2xl font-bold">{appName}</h3>
                <p className="pb-1 text-gray-700">{playableName}</p>
                <div className="transition items-center flex w-[11rem] h-2 gap-1 pl-8 p-4 text-white text-m bg-gray-900 rounded-full outline-none sm:w-[12rem]">
                  Click to Play
                  <BsArrowRight className="transition opacity-70 group-hover:translate-x-2" />
                </div>
              </div>
            </section>
          </motion.div>
    
          {isOverlayVisible && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9998 }}>
              {/* Semi-transparent white overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 9998,
                }}
              ></div>
    
              {/* Content inside the overlay */}
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '405px',
                  height: '720px',
                  backgroundColor: 'white',
                  zIndex: 9999,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ color: 'black', textAlign: 'center', padding: '20px' }}>
                  This is the 405x720 overlay.
                </p>
              </div>
            </div>
          )}
        </a>
      );
}
