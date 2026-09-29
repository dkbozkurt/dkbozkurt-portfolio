"use client";

import React from "react";
import { LazyMotion } from "framer-motion";

// framer-motion's animation, gesture and layout code is most of its bundle.
// With LazyMotion + `m` components the page only ships the small renderer up
// front, and the features arrive in their own chunk after hydration. Nothing
// above the fold depends on them any more (the hero entrance is plain CSS),
// so the wait is invisible.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={loadFeatures} strict>
            {children}
        </LazyMotion>
    );
}
