import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

/**
 * Scroll-spy for the header nav.
 *
 * We deliberately do NOT use a visibility ratio (`threshold`) here.
 * `intersectionRatio` is capped at `viewportHeight / sectionHeight`, so any
 * section taller than the viewport can never reach a 0.5/0.75 threshold and
 * would never light up in the header. The Playable Ads section alone is
 * ~10.000px tall on a 720px viewport, so its max possible ratio is 0.07.
 *
 * Instead we collapse the observer root down to a thin horizontal line near
 * the top third of the viewport via `rootMargin`, and mark whichever section
 * crosses that line as active. That behaves identically for short and for
 * very tall sections.
 */

// Zero-height detection line at ~35% of the viewport height.
// Order: top / right / bottom / left.
const SPY_LINE_ROOT_MARGIN = "-35% 0px -65% 0px";

// Ignore observer updates for a moment after a nav click, so the sections we
// smooth-scroll *past* don't steal the highlight from the one we're heading
// to. Released early by the `scrollend` listener in the context provider.
const CLICK_LOCK_MS = 1000;

export function useSectionInView(sectionName: SectionName) {
    const { ref, inView } = useInView({
        // A zero-height root can never be "x% visible", so this stays 0.
        threshold: 0,
        rootMargin: SPY_LINE_ROOT_MARGIN,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > CLICK_LOCK_MS) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}
