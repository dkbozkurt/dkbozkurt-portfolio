"use client"

import { useRef, useState, useEffect } from "react";
import { playableAdsData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";

type PlayableAdsProps = typeof playableAdsData[number];

export default function PlayableAd({
    appName,
    playableName,
    icon,
    url,
    isHighlighted
}: PlayableAdsProps) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    const cardClasses = `bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-[16rem] h-[16rem] ${
        isHighlighted ? "bg-yellow-200 hover:bg-yellow-300 relative" : ""
    }`;

    useEffect(() => {
        if (isOverlayVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOverlayVisible]);

    const handleClick = (targetURL: string) => {
        if (window.innerWidth < 640 || window.innerHeight < 640) {
            window.open(targetURL, '_blank');
        } else {
            setOverlayVisible(!isOverlayVisible);
        }
    };

    const handleClose = () => {
        setOverlayVisible(false);
    };

    return (
        <motion.div
            ref={ref}
            className="mx-[1rem] group sm:mb-8 last:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className={cardClasses} onClick={() => handleClick(url)}>
                {isHighlighted && (
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-yellow-300 opacity-20"></div>
                        <div className="absolute inset-0 animate-[spin_3s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
                    </div>
                )}
                <Image
                    src={icon}
                    alt="Playable icon"
                    quality={95}
                    className="rounded-[2rem] transition flex justify-center group-hover:scale-[1.1] shadow-2xl m-5 relative h-[8rem] w-[8rem] rounded-m mt-3 mb-2 mr-5 z-10"
                />
    
                <div className="flex flex-col items-center pb-3 mt-auto z-10">
                    <h3 className="text-2xl font-bold">{appName}</h3>
                    <p className="pb-1 text-gray-700">{playableName}</p>
                    <div className="transition items-center flex w-[11rem] h-2 gap-1 pl-8 p-4 text-white text-m bg-gray-900 rounded-full outline-none sm:w-[12rem]">
                        Click to Play
                        <BsArrowRight className="transition opacity-70 group-hover:translate-x-2" />
                    </div>
                </div>
            </div>

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
                        borderRadius: '16px',
                        border: '6px solid white',
                    }}
                    >
                        <button className="absolute flex items-center justify-center bg-white shadow-md cursor-pointer"
                            style={{
                                top: '-20px',
                                right: '-20px',
                                background: 'white',
                                border: '4px solid white',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
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
        </motion.div>
    );
}