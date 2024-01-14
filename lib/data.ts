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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Languages",
    hash: "#language",
  },
  {
    name: "Activity",
    hash: "#activity",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certificates",
    hash: "#certificates",
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
    description: "Creating interactive ads for apps and games using Unity and C#. Developing automation tools for Unity and Adobe programs with C#, UXP, ExtendScript, HTML, CSS, and JavaScript. Designing 3D and 2D assets for marketing campaigns with Blender, Figma, and PhotoShop.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr. 2023 - Present",
  },
  {
    title: "Playable Ads & Marketing Game Developer",
    company: "Panteon Games",
    location: "Ankara, Turkey",
    description:
      "Creating captivating playable ads for marketing campaigns with Unity, LunaLabs, and C#. Enhancing gameplay, introducing new mechanics/features, and applying creative elements to maximize game attractiveness for advertising. Developing customizable tools/packages in Unity through editor scripting to streamline playable ads development.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov. 2021 - Apr. 2023",
  },
  {
    title: "Technical Customer Support Specialist",
    company: "Ekmob SFA",
    location: "Istanbul, Turkey",
    description:
      "Addressing customer-reported problems and resolving software bugs. Communicating technical aspects of our company's sales/organizing-based software to customers, providing clear insights into software properties.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep. 2021 - Oct. 2021",
  },
  {
    title: "Project Engineer Intern",
    company: "TUPRAS",
    location: "Kocaeli, Turkey",
    description:
      "Led the 'susTRAINable' initiative at TUPRAS, aiming for net-zero railway emissions by 2050, aligning with 6 UN Sustainable Development Goals. Spearheaded the 'TogetHER' project, dedicated to enhancing the lives of women in the refinery and energy sectors, incorporating mentorship programs for women inclined towards STEM.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2021 - Sep. 2021",
  },
  {
    title: "Game Developer",
    company: "GEFEASOFT",
    location: "Mugla, Turkey",
    description:
      "Designed WebGL and mobile-based serious games, along with a VR-based Anatomy Atlas for the healthcare industry. Developed using Unity and C# programming language",
    icon: React.createElement(CgWorkAlt),
    date: "Mar. 2021 - Jun. 2021",
  },
  {
    title: "Software Engineer",
    company: "Avocuda",
    location: "Istanbul, Turkey",
    description:
      "Contributed to mobile application development in the development team, utilizing React-Native and Adobe XD",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2020 - Jun. 2020",
  },
  {
    title: "Electrical Design Engineering Intern",
    company: "Tempa Pano",
    location: "Kocaeli, Turkey",
    description:
      "Interned as a test and design engineer in an electrical enclosure-producing factory. Engaged in projects utilizing EPLAN and AutoCAD, including electrical enclosure projects such as Rayyan Stadium in Qatar and the International Reception Center of Ashgabat in Turkmenistan.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2019 - Sep. 2019",
  },
] as const;

export const educationData = [
    {
        title: "B.S., Electrical & Electronics Engineering (%100 English)",
        university: "Eskisehir Osmangazi University",
        location: "Eskisehir, Turkey",
        description: "After completing the English preparatory year, I pursued software-related courses in computer science and graduated with a GPA of 3.01/4.0. During my academic journey, I had the opportunity to work as an intern in the Artificial Intelligence and Robotics Lab.. Additionally, I took an active role in developing the website for the university's Artificial Intelligence and Robotics Lab. course",
        icon: React.createElement(LuGraduationCap),
        date: "Sep. 2016 - Aug. 2021",
    }
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