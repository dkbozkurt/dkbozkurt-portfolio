"use client"

import React, { useEffect, useRef, useState } from 'react'
import { playableAdsData } from '@/lib/playable-ads-data'
import { useSectionInView } from '@/lib/hooks';
import { getPlayableId, parsePlayIdFromHash } from '@/lib/playable-id';
import SectionHeading from './section-heading';
import PlayableAd from './playableAd';
import { PlayableAdCardSkeletons } from './playableads-skeleton';

// Cards are mounted a batch at a time. Building all 150 at once is ~2.500 DOM
// nodes plus 150 components' worth of state, effects and observers — a long
// task the phone can't hide. A batch is roughly a screenful.
const BATCH_SIZE = 24;

// How far past the viewport the next batch is prepared.
const PRELOAD_MARGIN_PX = 900;

export default function PlayableAds() {
    const { ref } = useSectionInView("PlayableAds");
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // The leading placeholder doubles as the scroll sentinel: once it reaches
    // the pre-load window, the next batch replaces it.
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    // Measured from scroll position rather than an IntersectionObserver on
    // purpose. An observer only reports *threshold crossings*, so a fast flick
    // that carries the sentinel from below the viewport to above it in a
    // single frame produces no callback at all and strands the visitor on a
    // wall of placeholders.
    useEffect(() => {
        if (visibleCount >= playableAdsData.length) return;

        let frame = 0;
        const check = () => {
            frame = 0;
            const sentinel = sentinelRef.current;
            if (!sentinel) return;
            if (sentinel.getBoundingClientRect().top > window.innerHeight + PRELOAD_MARGIN_PX) return;
            setVisibleCount((count) => Math.min(count + BATCH_SIZE, playableAdsData.length));
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(check);
        };

        // Re-running on every `visibleCount` change is what chains batches
        // together: one per frame until the sentinel is out of reach again, so
        // catching up after a long jump never blocks a single frame.
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, [visibleCount]);

    // A shared link (/#playableAds?play=<id>) points at one specific card,
    // which may sit far past the first batch. Render up to it so the card is
    // mounted and can open itself.
    useEffect(() => {
        const playId = parsePlayIdFromHash(window.location.hash);
        if (!playId) return;
        const index = playableAdsData.findIndex((playableAd) => getPlayableId(playableAd.url) === playId);
        if (index >= 0) setVisibleCount((count) => Math.max(count, index + 1));
    }, []);

    const placeholderCount = playableAdsData.length - visibleCount;

    return (
        <section
            ref={ref}
            className="scroll-mt-28 mb-28 animate-fade-in motion-reduce:animate-none"
            id="playableAds"
        >
            <SectionHeading>Playable Ads</SectionHeading>

            <div className="flex flex-wrap justify-center w-full gap-x-3 gap-y-3 text-lg text-gray-800 sm:gap-x-0 sm:gap-y-8 sm:w-full lg:w-[60rem] xl:w-[80rem]">
                {playableAdsData.slice(0, visibleCount).map((playableAd, index) => (
                    <PlayableAd
                        key={`${playableAd.url}-${index}`}
                        {...playableAd}
                        isInFirstRows={index < BATCH_SIZE}
                    />
                ))}

                {placeholderCount > 0 && (
                    <PlayableAdCardSkeletons
                        count={placeholderCount}
                        firstRef={sentinelRef}
                    />
                )}
            </div>
        </section>
    );
}
