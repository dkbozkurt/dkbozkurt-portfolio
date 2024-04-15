"use client"

import { useRef } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlyAd({
    appName,
    playableName,
    icon,
    url,
    isHighlighted
}: PlayableAdsProps)
{
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const cardClasses = `bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-[16rem] h-[16rem] ${
        isHighlighted ? "bg-amber-200 hover:bg-amber-300" : "" // Add golden color class if isGolden is true
      }`;

    useEffect(() => {
        // Disable scrolling when the overlay is visible
        if (isOverlayVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOverlayVisible]);

    const handleClick = (targetURL:string) => {
        if(window.innerWidth < 640 || window.innerHeight < 640)
        {
            window.open(targetURL,'_blank');
        }
        else{
            setOverlayVisible(!isOverlayVisible);
        }
        
        // const basePath = process.env.PUBLIC_URL || '';
        // const url = `${basePath}${targetURL}`;
        // window.open(url, '_blank');
    };

    const handleClose = () => {
        setOverlayVisible(false);
    };

    return (
        <a onClick={() => handleClick(url)}>
            <motion.div ref={ref} className="mx-[1rem] group sm:mb-8 last:mb-0">
                <section className={cardClasses}>
                    <Image
                        src={icon}
                        alt="Playable icon"
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
            <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 9998 }}>
                
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
                style={{ zIndex: 9998 }}
                ></div>

                <div className="fixed z-50 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-white top-1/2 left-1/2"
                style={{
                    width: '405px',
                    height: '720px',
                    zIndex: 9999,
                    borderRadius: '16px', // Adjust as needed
                    border: '6px solid white', // Thicker and white border
                }}
                >

                    <button className="absolute flex items-center justify-center bg-white shadow-md cursor-pointer"
                        style={{
                            top: '-20px',
                            right: '-20px',
                            background: 'white',
                            border: '4px solid white', // Border color matching the pop-up border
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow
                        }}
                        onClick={handleClose}
                    >
                        <span className="font-black text-[20px]">X</span>
                    </button>

                    <iframe
                        title="Popup Content"
                        src={url}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ borderRadius: '16px' }}
                    />
                </div>
            </div>
            )}
        </a>
    );
}
