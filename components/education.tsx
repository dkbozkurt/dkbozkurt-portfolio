"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { useInView } from 'react-intersection-observer';

export default function Education() {
    const { ref } = useSectionInView("Education");
    const { theme } = useTheme();
    // The timeline's built-in observer (react-intersection-observer v8) loses its
    // node under React 18 Strict Mode and never reveals the cards, so drive
    // visibility from our own observer instead.
    const { ref: timelineRef, inView: timelineInView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -40px 0px',
    });

    return (
        <section
            id="education"
            ref={(node) => {
                ref(node);
                timelineRef(node);
            }}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Education</SectionHeading>
            <VerticalTimeline lineColor="">
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={timelineInView}
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem, 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af " : "0.4rem solid rgba(255,255,255,0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="text-lg font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0"
                            >
                                {item.university}
                                {" "}<span>&#8226;</span>{" "}
                                {item.location}
                            </p>
                            {Array.isArray(item.description) ? (
                                <ul className="list-disc ml-5 !mt-1 !font-normal text-gray-700 dark:text-white/75">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="!mt-1 !font-normal text-gray-700">
                                    {item.description}
                                </p>
                            )}
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
