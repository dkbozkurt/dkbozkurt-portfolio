"use client"

import { useRef, useState, useEffect } from "react";
import { playableAdsData } from "@/lib/data";
import {
    getPlayableId,
    parsePlayIdFromHash,
    buildPlayableHash,
    PLAYABLE_SECTION_HASH,
} from "@/lib/playable-id";
import Image from 'next/image'
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type PlayableAdsProps = typeof playableAdsData[number];

const StarAnimation = () => {
    const randomScale = Math.random() * 0.5 + 0.5; // Random scale between 0.5 and 1
    const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, randomScale, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: randomDelay,
            }}
        >
            <FaStar className="text-yellow-400 text-4xl sm:text-8xl" />
        </motion.div>
    );
};

export default function PlayableAd({
    appName,
    playableName,
    icon,
    url,
    isHighlighted
}: PlayableAdsProps) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const playableId = getPlayableId(url);

    const cardClasses = `bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-full h-[13rem] sm:w-[16rem] sm:h-[16rem] dark:bg-white/20 ${isHighlighted ? "bg-yellow-200 hover:bg-yellow-300 relative dark:bg-yellow-600 dark:hover:bg-yellow-500" : ""
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

    // Auto-open this playable if the URL matches on first load
    // (e.g. someone opened a shared link /#playableAds?play=<id>).
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const playId = parsePlayIdFromHash(window.location.hash);
        if (playId !== playableId) return;

        if (window.innerWidth < 640 || window.innerHeight < 640) {
            // On mobile we open the playable directly in a new tab,
            // matching the click-behavior on small screens.
            window.open(url, '_blank');
            return;
        }
        setOverlayVisible(true);
        // Defer scroll until after layout so the card position is known.
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // React to browser back/forward buttons so the modal opens/closes in
    // sync with history state.
    useEffect(() => {
        const onPopState = () => {
            const playId = parsePlayIdFromHash(window.location.hash);
            setOverlayVisible(playId === playableId);
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [playableId]);

    const handleClick = (targetURL: string) => {
        if (window.innerWidth < 640 || window.innerHeight < 640) {
            window.open(targetURL, '_blank');
            return;
        }
        if (!isOverlayVisible) {
            // Update the URL so the playable becomes shareable.
            const newHash = buildPlayableHash(playableId);
            window.history.pushState(
                { playableId },
                '',
                `${window.location.pathname}${window.location.search}${newHash}`,
            );
            setOverlayVisible(true);
        } else {
            handleClose();
        }
    };

    const handleClose = () => {
        if (typeof window !== 'undefined') {
            const playId = parsePlayIdFromHash(window.location.hash);
            if (playId === playableId) {
                // Drop ?play=<id> from the fragment but keep #playableAds
                // so the section anchor (and scroll position) is preserved.
                // Use replaceState to avoid leaving a "ghost" history entry
                // that would re-open the modal on Forward.
                window.history.replaceState(
                    {},
                    '',
                    `${window.location.pathname}${window.location.search}${PLAYABLE_SECTION_HASH}`,
                );
            }
        }
        setOverlayVisible(false);
    };

    return (
        <a onClick={() => handleClick(url)} className="block w-[calc(50%-0.375rem)] sm:w-auto">
            <motion.div
                ref={ref}
                className="mx-0 group mb-0 sm:mx-[1rem] sm:mb-8 last:mb-0"
            >
                <section className={cardClasses}>
                    {isHighlighted && (
                        <>
                            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 bg-yellow-300 opacity-20 dark:bg-yellow-100 dark:opacity-40"></div>
                                <motion.div
                                    className="absolute left-0 top-0 h-full w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                                    initial={{ x: "-150%" }}
                                    animate={{ x: "500%" }}
                                    transition={{
                                        duration: 1.4,
                                        repeat: Infinity,
                                        repeatDelay: 2.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                            <div className="absolute -top-2 -left-2 z--2">
                                <StarAnimation />
                            </div>
                            <div className="absolute -top-2 -right-2 z--2">
                                <StarAnimation />
                            </div>
                            <div className="absolute -bottom-2 -left-2 z--2">
                                <StarAnimation />
                            </div>
                            <div className="absolute -bottom-2 -right-2 z--2">
                                <StarAnimation />
                            </div>
                        </>
                    )}
                    <Image
                        src={icon}
                        alt="Playable icon"
                        quality={95}
                        className="rounded-[1.25rem] sm:rounded-[2rem] transition flex justify-center group-hover:scale-[1.1] shadow-2xl relative h-[4.5rem] w-[4.5rem] m-2 mt-6 mb-2 sm:h-[8rem] sm:w-[8rem] sm:m-5 sm:mt-3 sm:mb-2 sm:mr-5 z-10"
                    />

                    <div className="z-10 flex flex-col items-center px-2 pb-2 mt-auto sm:px-0 sm:pb-3">
                        <h3 className="text-center text-sm font-bold leading-tight line-clamp-1 dark:text-white/90 sm:text-2xl">{appName}</h3>
                        <p className="text-center text-[0.65rem] leading-tight text-gray-700 line-clamp-1 pb-1 dark:text-white/60 sm:text-base">{playableName}</p>
                        <div className="transition items-center justify-center flex w-[7rem] h-2 gap-1 p-3 text-white text-sm bg-gray-900 rounded-full outline-none sm:w-[11rem] sm:gap-1 sm:p-4 sm:text-lg md:w-[12rem]">
                            <span className="sm:hidden">Play</span>
                            <span className="hidden sm:inline">Click to Play</span>
                            <BsArrowRight className="transition opacity-70 group-hover:translate-x-2" />
                        </div>
                    </div>
                </section>

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
                                className="w-full h-full rounded-lg"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                )}
            </motion.div>
        </a>
    );
}