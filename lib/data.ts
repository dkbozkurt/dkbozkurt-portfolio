import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: "Playable Ads Developer",
    company: "JustDice",
    location: "Hamburg, Germany",
    description: "Developing playable ads for apps and mobile games by using Unity, LunaLabs, and C# programming language.Developing automation tools/ extensions for Unity using C# programming language and for Adobe programs by using UXP, ExtendScript, HTML, CSS and JavaScript. Creating 3D and 2D assets for marketing campaigns and playable ads by using Blender, Spline, Figma and PhotoShop.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr. 2023 - Present",
  },
  {
    title: "Playable Ads & Marketing Game Developer",
    company: "Panteon Games",
    location: "Ankara, Turkey",
    description:
      "Developing and designing playable ads for marketing campaigns by using Unity, LunaLabs, and C# programming language. Modifying and iterating games on the gameplay, adding new mechanics/ features, and being creative to make games as attractive as possible for the advertising campaigns Developing ready-to-use tools/ packages for playable ads development in unity by using editor scripting.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov. 2021 - Apr. 2023",
  },
  {
    title: "Technical Customer Support Specialist",
    company: "Ekmob SFA",
    location: "Istanbul, Turkey",
    description:
      "Solving the problems/ bugs customers have experienced while using the software. Describing the software properties to our customers using our company's sale/organizing-based software from a technical point of view.",
    icon: React.createElement(FaReact),
    date: "Sep. 2021 - Oct. 2021",
  },
  {
    title: "Project Engineer Intern",
    company: "TUPRAS",
    location: "Kocaeli, Turkey",
    description:
      "Led 'susTRAINable' project at TUPRAS, targeting net-zero railway emissions by 2050, aligning with 6 UN Sustainable Development Goals. Spearheaded 'TogetHER' project focused on improving women's lives in the refinery and energy sectors, including mentorship programs for STEM-inclined women.",
    icon: React.createElement(FaReact),
    date: "Aug. 2021 - Sep. 2021",
  },
  {
    title: "Software Engineer",
    company: "Avocuda",
    location: "Istanbul, Turkey",
    description:
      "Worked in the development team on mobile application development by using React-Native and Adobe XD.",
    icon: React.createElement(FaReact),
    date: "Feb. 2020 - Jun. 2020",
  },
  {
    title: "Electrical Design Engineering Intern",
    company: "Tempa Pano",
    location: "Kocaeli, Turkey",
    description:
      "Engineering internship in an electrical enclosure-producing factory, as a test and design engineer. Worked on EPLAN, AutoCAD, and electrical enclosure projects such as Rayyan Stadium (Qatar), International Reception Center of Ashgabat (Turkmenistan).",
    icon: React.createElement(FaReact),
    date: "Aug. 2019 - Sep. 2019",
  },
] as const;

export const educationData = [
    {
        title: "B.S., Electrical & Electronics Engineering (%100 English)",
        university: "Eskisehir Osmangazi University",
        location: "Eskisehir, Turkey",
        description:
          "3.01/4.00 GPA Activities: Artificial intelligence and Robotics Lab. Intern",
        icon: React.createElement(LuGraduationCap),
        date: "Sep. 2016 - Aug. 2021",
    },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
    "C#",
    "C++",
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
    "ThreeJS",
    "Node.js",
    "Express",
    "Next.js",
    "Jest",
    "Qt",
    "CannonJS",
    "ExtendScript",
    "Framer Motion",
    "PyTorch",
    "pandas",
    "NumPy",
    "SciPy",
    "Blender",
    "Spline",
    "Figma",
    "Adobe PhotoShop"
] as const;

export const languageSkillsData = [
    {
        language: "Turkish",
        level: "Native",
        icon: React.createElement(CgWorkAlt),
    },
    {
        language: "English",
        level: "C1",
        icon: React.createElement(CgWorkAlt),
    },
    {
        language: "Korean",
        level: "A2",
        icon: React.createElement(CgWorkAlt),
    },
    {
        language: "German",
        level: "A2",
        icon: React.createElement(CgWorkAlt),
    },
] as const;