"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: 
                                theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
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
                                {item.company}
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
