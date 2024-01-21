"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { educationData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Education() {
    const { ref } = useSectionInView("Education");
  
    return (
    <section
    id="education"
    ref = {ref} 
    className = "scroll-mt-28 mb-28 sm:mb-40"
    >
        <SectionHeading>Education</SectionHeading>
        <VerticalTimeline lineColor="">
            {educationData.map((item, index) => (
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
                            {item.university}
                            {" "}<span>&#8226;</span>{" "}
                            {item.location}
                        </p>
                        <p className ="!mt-1 !font-normal text-gray-700">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
    </VerticalTimeline>
    </section>
  )
}
