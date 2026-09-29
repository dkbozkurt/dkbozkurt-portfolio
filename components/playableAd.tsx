"use client"

import { useCallback, useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { PlayableAdItem } from "@/lib/playable-ads-data";
import {
    getPlayableId,
    parsePlayIdFromHash,
    buildPlayableHash,
    PLAYABLE_SECTION_HASH,
} from "@/lib/playable-id";
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import { Skeleton } from "./skeleton";
import { PlayableHighlightBase, PlayableHighlightParticles } from "./playable-highlight";

type PlayableAdsProps = PlayableAdItem & {
    /**
     * Cards in the first batch skip the wait for the intersection observer and
     * request their icon as soon as they mount, so the top of the grid is
     * never a wall of placeholders. The browser still decides *when* to fetch:
     * these stay `loading="lazy"` because the section is thousands of pixels
     * below the fold on a normal visit and must not compete with the hero.
     */
    isInFirstRows?: boolean;
};

export default function PlayableAd({
    appName,
    playableName,
    icon,
    url,
    isHighlighted,
    isInFirstRows = false,
}: PlayableAdsProps) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isIconLoaded, setIconLoaded] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const playableId = getPlayableId(url);

    // The highlight particles are a dozen infinitely-repeating animations per
    // card. With ~60 highlighted cards that would be hundreds of layers
    // ticking far outside the viewport. Mount them only while the card is
    // actually near the screen.
    const { ref: inViewRef, inView: isCardNearViewport } = useInView({
        rootMargin: '400px 0px',
        threshold: 0,
    });

    // The icons are the bulk of the page: 150 cards x an <Image> with a srcset
    // is ~300 KB of markup and 150 lazy-load candidates the browser has to
    // track. Mounting the <Image> only once its card has come within 400px of
    // the viewport keeps the initial HTML small and means an icon is never
    // requested for a card the visitor never scrolls to. The latch makes it
    // one-way, so scrolling back up doesn't tear icons out of the DOM.
    const [hasReachedViewport, setHasReachedViewport] = useState(isInFirstRows);
    useEffect(() => {
        if (isCardNearViewport) setHasReachedViewport(true);
    }, [isCardNearViewport]);

    // Safety net: without IntersectionObserver the latch above could never
    // flip and the card would sit on a grey placeholder forever, so fall back
    // to rendering every icon and letting native `loading="lazy"` pace them.
    const [isObserverUnavailable, setObserverUnavailable] = useState(false);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') setObserverUnavailable(true);
    }, []);

    const shouldRenderIcon = isInFirstRows || hasReachedViewport || isObserverUnavailable;

    const setCardRef = useCallback(
        (node: HTMLDivElement | null) => {
            ref.current = node;
            inViewRef(node);
        },
        [inViewRef],
    );

    const cardClasses = `bg-gray-100 border border-black/5 overflow-hidden hover:bg-gray-200 transition cursor-pointer rounded-lg flex flex-col items-center w-full h-[13rem] sm:w-[16rem] sm:h-[16rem] dark:bg-white/20 ${isHighlighted ? "bg-yellow-200 hover:bg-yellow-300 relative dark:bg-yellow-600 dark:hover:bg-yellow-500" : ""
        }`;

    useEffect(() => {
        if (isOverlayVisible) {
            document.body.style.overflow = 'hidden';
            // Pauses the highlight particles behind the modal (globals.css).
            document.body.dataset.playableOpen = '';
        } else {
            document.body.style.overflow = 'visible';
            delete document.body.dataset.playableOpen;
        }
        return () => {
            document.body.style.overflow = 'visible';
            delete document.body.dataset.playableOpen;
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

    // Escape closes the modal, matching the X button.
    useEffect(() => {
        if (!isOverlayVisible) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOverlayVisible]);

    return (
        <a onClick={() => handleClick(url)} className="block w-[calc(50%-0.375rem)] sm:w-auto">
            <div
                ref={setCardRef}
                className="mx-0 group mb-0 sm:mx-[1rem] sm:mb-8 last:mb-0"
            >
                <section className={cardClasses}>
                    {isHighlighted && <PlayableHighlightBase />}
                    {isHighlighted && isCardNearViewport && (
                        <PlayableHighlightParticles seed={playableId} />
                    )}

                    <div className="relative z-10 m-2 mt-6 mb-2 h-[4.5rem] w-[4.5rem] sm:h-[8rem] sm:w-[8rem] sm:m-5 sm:mt-3 sm:mb-2 sm:mr-5">
                        {/* Holds the card layout steady and signals that the
                            icon is still downloading. Off-screen cards get the
                            same block without the pulse, so we don't keep 140
                            idle animations alive for icons nobody is looking at. */}
                        {!isIconLoaded && (
                            <Skeleton
                                animate={isCardNearViewport}
                                className="absolute inset-0 rounded-[1.25rem] sm:rounded-[2rem]"
                            />
                        )}
                        {shouldRenderIcon && (
                            <Image
                                src={icon}
                                alt={`${appName} icon`}
                                quality={85}
                                // Rendered at 72px (mobile) / 128px (desktop). Giving
                                // explicit dimensions instead of `sizes` keeps the
                                // srcset to a 1x/2x pair rather than 13 candidates
                                // across 143 cards worth of markup.
                                width={128}
                                height={128}
                                onLoad={() => setIconLoaded(true)}
                                className={`rounded-[1.25rem] sm:rounded-[2rem] transition-[transform,opacity] duration-300 flex justify-center group-hover:scale-[1.1] shadow-2xl relative h-full w-full ${isIconLoaded ? "opacity-100" : "opacity-0"}`}
                            />
                        )}
                    </div>

                    <div className="z-10 flex flex-col items-center w-full px-2 pb-2 mt-auto sm:px-0 sm:pb-3">
                        <h3 className="w-full text-base font-bold leading-tight text-center line-clamp-1 dark:text-white/90 sm:text-2xl">{appName}</h3>
                        <p className="w-full pb-1 text-xs leading-tight text-center text-gray-700 line-clamp-1 dark:text-white/60 sm:text-base">{playableName}</p>
                        <div className="transition items-center justify-center flex w-[8.5rem] h-9 gap-1.5 px-4 text-white text-sm bg-gray-900 rounded-full outline-none sm:w-[11rem] sm:h-10 sm:px-5 sm:text-lg md:w-[12rem]">
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
                            // Without this, clicks anywhere inside the modal
                            // frame bubble up to the card and close the playable.
                            onClick={(event) => event.stopPropagation()}
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
                                aria-label="Close playable"
                                onClick={handleClose}
                            >
                                <span className="font-black text-[20px]">X</span>
                            </button>

                            {/* No loading overlay here on purpose: every
                                playable build ships its own loading screen, and
                                stacking ours on top just delayed showing it. */}
                            <iframe
                                title={`${appName} — ${playableName}`}
                                src={url}
                                className="w-full h-full rounded-lg"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </a>
    );
}