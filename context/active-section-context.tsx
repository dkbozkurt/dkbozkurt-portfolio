"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext, useEffect } from 'react';

// Hard ceiling for the post-click observer lock, used as a fallback in
// browsers without the `scrollend` event. Smooth-scrolling the full page
// height can take well over a second, which is why the old flat 1000ms
// window let a section we scrolled past win the highlight.
const MAX_CLICK_LOCK_MS = 2000;

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType= {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ 
    children,
 }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] =useState(0); // We need to keep track of this to disable the observer temporarily when user clicks on a link

    // Release the observer lock as soon as the smooth scroll actually settles,
    // instead of guessing a fixed duration. Resetting to 0 makes the
    // `Date.now() - timeOfLastClick` check in useSectionInView pass again.
    useEffect(() => {
        if (timeOfLastClick === 0) return;

        const release = () => setTimeOfLastClick(0);

        window.addEventListener('scrollend', release, { once: true });
        const fallback = window.setTimeout(release, MAX_CLICK_LOCK_MS);

        return () => {
            window.removeEventListener('scrollend', release);
            window.clearTimeout(fallback);
        };
    }, [timeOfLastClick]);

    return(
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}
    >
        {children}
    </ActiveSectionContext.Provider>
    );
}

// Custom hook
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null)
    {
        throw new Error(
            "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        );
    }

    return context;
}