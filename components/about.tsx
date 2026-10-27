"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 animate-rise-in [animation-delay:0.175s] motion-reduce:animate-none"
            id="about"
        >
            <SectionHeading>
                About me
            </SectionHeading>
            <p
                className="mb-12 mt-36"
            >
                I'm a Software Engineer working at the intersection of ads, games, and growth, with 5 years of experience building playable ads, HTML5 games, and the tooling behind them. My work spans the full lifecycle of an ad unit; from mechanic design and 2D/ 3D development to network packaging and post-launch analysis of ROAS, IPM, CTR, CVR, and retention.
            </p>
            <p className="mb-12">
                I've shipped playables for mobile games with tens of millions of installs; my most recent playable set, localized into 15 languages, was the main driver of its title's scale, reaching $560K+ in daily ROAS-campaign spend, 14M+ daily impressions, and 1M+ daily clicks, and helping push the game into the Top 10 charts on both iOS and Android. I work with TypeScript, JavaScript, C#, Unity, Luna Playworks, PixiJS, and Three.js. This background has reinforced my appreciation for clean architecture, OOP principles, and maintainable codebases.
            </p>
            <p className="mb-12">
                Beyond the ads themselves, I build AI-powered tools, Node.js platforms, and npm libraries that automate creative production, and I use campaign and experiment data to drive technical decisions. I'm continuing to grow toward ad platforms and AdTech engineering: experimentation, measurement, and large-scale systems that make advertising work better for users and advertisers.
            </p>

        </section>
    );
}
