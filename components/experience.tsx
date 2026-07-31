"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ExperienceItem = (typeof experiencesData)[number];

type Role = {
    title: string;
    date: string;
    location: string;
    description: ExperienceItem["description"];
};

type CompanyGroup = {
    company: string;
    location: string;
    icon: ExperienceItem["icon"];
    roles: Role[];
    dateRange: string;
};

// Groups roles that belong to the same company under a single card
// (LinkedIn-style), preserving the order in which each company first
// appears in the source data (which is reverse-chronological).
function groupByCompany(data: typeof experiencesData): CompanyGroup[] {
    const groups: CompanyGroup[] = [];
    const indexByCompany = new Map<string, number>();

    data.forEach((item) => {
        const role: Role = {
            title: item.title,
            date: item.date,
            location: item.location,
            description: item.description,
        };

        const existingIndex = indexByCompany.get(item.company);

        if (existingIndex === undefined) {
            indexByCompany.set(item.company, groups.length);
            groups.push({
                company: item.company,
                location: item.location,
                icon: item.icon,
                roles: [role],
                dateRange: item.date,
            });
        } else {
            groups[existingIndex].roles.push(role);
        }
    });

    groups.forEach((group) => {
        group.dateRange = computeDateRange(group.roles);
    });

    return groups;
}

// Builds a single "start - end" label that spans every role at a company.
// Roles are ordered most-recent first, so the newest role holds the end date
// and the oldest role holds the start date.
function computeDateRange(roles: Role[]): string {
    if (roles.length === 1) return roles[0].date;

    const newest = roles[0].date;
    const oldest = roles[roles.length - 1].date;

    const end = newest.split("-").pop()?.trim() ?? newest;
    const start = oldest.split("-")[0]?.trim() ?? oldest;

    return `${start} - ${end}`;
}

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 80,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * index,
        },
    }),
};

function RoleContent({ role, groupLocation }: { role: Role; groupLocation: string }) {
    return (
        <>
            <h4 className="text-base font-semibold capitalize leading-snug sm:text-lg">
                {role.title}
            </h4>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-white/50">
                {role.date}
                {role.location !== groupLocation && (
                    <>
                        {" "}
                        <span aria-hidden>&#8226;</span> {role.location}
                    </>
                )}
            </p>
            {Array.isArray(role.description) ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm font-normal text-gray-700 dark:text-white/75">
                    {role.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            ) : (
                <p className="mt-2 text-sm font-normal text-gray-700 dark:text-white/75">
                    {role.description}
                </p>
            )}
        </>
    );
}

function ExperienceCard({ group, index }: { group: CompanyGroup; index: number }) {
    const hasMultipleRoles = group.roles.length > 1;

    return (
        <motion.article
            className="rounded-2xl border border-black/10 bg-gray-100/70 p-5 text-left shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-6"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
        >
            <header className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white dark:border-white/10 dark:bg-white/10 [&_img]:!h-full [&_img]:!w-full [&_img]:!rounded-full [&_img]:!object-contain">
                    {group.icon}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-tight sm:text-xl">
                        {group.company}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-600 dark:text-white/60">
                        {group.location}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-white/50">
                        {group.dateRange}
                        {hasMultipleRoles && (
                            <>
                                {" "}
                                <span aria-hidden>&#8226;</span> {group.roles.length} positions
                            </>
                        )}
                    </p>
                </div>
            </header>

            {hasMultipleRoles ? (
                <ol className="mt-5">
                    {group.roles.map((role, i) => {
                        const isLast = i === group.roles.length - 1;

                        return (
                            <li key={i} className="flex gap-4">
                                {/* Sub-timeline rail: connector line + dot, always centered together */}
                                <div className="relative flex w-4 shrink-0 justify-center">
                                    {!isLast && (
                                        <span
                                            aria-hidden
                                            className="absolute left-1/2 top-3 h-full w-0.5 -translate-x-1/2 rounded-full bg-gray-300 dark:bg-gray-600"
                                        />
                                    )}
                                    <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                                </div>

                                <div className={"min-w-0 flex-1 " + (isLast ? "" : "pb-6")}>
                                    <RoleContent role={role} groupLocation={group.location} />
                                </div>
                            </li>
                        );
                    })}
                </ol>
            ) : (
                <div className="mt-4">
                    <RoleContent role={group.roles[0]} groupLocation={group.location} />
                </div>
            )}
        </motion.article>
    );
}

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const groupedExperiences = React.useMemo(
        () => groupByCompany(experiencesData),
        []
    );

    return (
        <section
            id="experience"
            ref={ref}
            className="mb-28 scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>Experience</SectionHeading>

            <div className="mx-auto flex max-w-[45rem] flex-col gap-6">
                {groupedExperiences.map((group, index) => (
                    <ExperienceCard key={group.company} group={group} index={index} />
                ))}
            </div>
        </section>
    );
}
