import React from "react";
import { Skeleton } from "./skeleton";

// The placeholders sit immediately after the last mounted card, so these
// leading ones are the only ones a visitor can realistically catch on screen.
// Shimmering all ~130 would mean ~130 live animations for cards that are
// thousands of pixels away.
const SHIMMERING_PLACEHOLDERS = 12;

/**
 * Placeholder for a playable card that has not been mounted yet.
 *
 * Deliberately flatter than the real card: ~130 of these ship in the initial
 * HTML, so every extra element is multiplied by 130. The icon is the focal
 * point, so that is the only part carrying the "still loading" shimmer.
 */
export function PlayableAdCardSkeleton({
    innerRef,
    shimmer = true,
}: {
    innerRef?: React.Ref<HTMLDivElement>;
    shimmer?: boolean;
}) {
    return (
        <div ref={innerRef} className="w-[calc(50%-0.375rem)] sm:mx-[1rem] sm:mb-8 sm:w-auto">
            <div className="flex h-[13rem] w-full flex-col items-center rounded-lg border border-black/5 bg-gray-100 dark:bg-white/20 sm:h-[16rem] sm:w-[16rem]">
                <Skeleton
                    animate={shimmer}
                    className="mt-6 h-[4.5rem] w-[4.5rem] rounded-[1.25rem] sm:mt-3 sm:h-[8rem] sm:w-[8rem] sm:rounded-[2rem]"
                />
                <Skeleton animate={false} className="w-3/5 h-4 mt-auto rounded sm:h-6" />
                <Skeleton
                    animate={false}
                    className="mt-2 mb-2 h-9 w-[8.5rem] rounded-full sm:mb-3 sm:h-10 sm:w-[11rem] md:w-[12rem]"
                />
            </div>
        </div>
    );
}

export function PlayableAdCardSkeletons({
    count,
    firstRef,
}: {
    count: number;
    /** Lets the caller track the leading placeholder as a scroll sentinel. */
    firstRef?: React.Ref<HTMLDivElement>;
}) {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <PlayableAdCardSkeleton
                    key={index}
                    innerRef={index === 0 ? firstRef : undefined}
                    shimmer={index < SHIMMERING_PLACEHOLDERS}
                />
            ))}
        </>
    );
}
