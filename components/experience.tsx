"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
    const { ref } = useSectionInView("Experience");
  
    return (
    <section
    id="experience"
    ref = {ref} 
    className = "scroll-mt-28 mb-28 sm:mb-40"
    >
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle ={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem, 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "white",
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
                                <ul className="list-disc ml-5 !mt-1 !font-normal text-gray-700">
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
