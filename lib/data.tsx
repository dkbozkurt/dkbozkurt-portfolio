
import React from "react";
import Image from 'next/image';

import turkishFlagImg from "@/public/flagImages/turkishFlag.png";
import englishFlagImg from "@/public/flagImages/englishFlag.png";
import germanFlagImg from "@/public/flagImages/germanFlag.png";
import koreaFlagImg from "@/public/flagImages/koreaFlag.png";

import coloradoCertificate from "@/public/certificateImages/coloradoCertificate.png";
import freeCodeCampCertificate from "@/public/certificateImages/freeCodeCampCertificate.png";
import ibmCertificate from "@/public/certificateImages/ibmCertificate.png";
import metaCertificate from "@/public/certificateImages/metaCertificate.png";
import michiganCertificate from "@/public/certificateImages/michiganCertificate.png";
import udemyCertificate from "@/public/certificateImages/udemyCertificate.png";
import udemyThreeJSCertificate from "@/public/certificateImages/udemyThreeJSCertificate.png";
import threeJSJourneyCertificate from "@/public/certificateImages/threeJSJourneyCertificate.png";
import professionalCSSCertificate from "@/public/certificateImages/professionalCSSCertificate.png";


import avocudaLogo from '@/public/companyIcons/avocuda_logo.jpeg'
import ekmobLogo from '@/public/companyIcons/ekmob_sfa_logo.jpeg'
import gefeasoftLogo from '@/public/companyIcons/gefeasoft_logo.jpeg'
import justdiceLogo from '@/public/companyIcons/justdice_logo.jpeg'
import panteonLogo from '@/public/companyIcons/panteon_logo.jpeg'
import tempaPanoLogo from '@/public/companyIcons/tempapano_logo.jpeg'
import tuprasLogo from '@/public/companyIcons/tupras_logo.jpeg'
import myGamesLogo from '@/public/companyIcons/myGames_logo.jpeg';
import gameGameLogo from '@/public/companyIcons/gamegame_logo.jpg';
import agaveLogo from '@/public/companyIcons/agave_logo.jpeg';

import oguLogo from '@/public/companyIcons/ogu_logo.jpeg';
import uhhLogo from '@/public/companyIcons/uhh_logo.png';

import aiesecLogo from '@/public/companyIcons/aiesec_logo.jpeg';
import kindCrabLogo from '@/public/companyIcons/kindCrab_logo.jpeg';
import koreanCulturalCenterLogo from '@/public/companyIcons/koreanCulturalCenter_logo.jpeg';

import csharpIcon from "@/public/skillIcons/csharp.svg";
import typescriptIcon from "@/public/skillIcons/typescript.svg";
import javascriptIcon from "@/public/skillIcons/javascript.svg";
import pythonIcon from "@/public/skillIcons/python.svg";
import cppIcon from "@/public/skillIcons/cpp.svg";
import htmlIcon from "@/public/skillIcons/html.svg";
import cssIcon from "@/public/skillIcons/css.svg";
import tailwindIcon from "@/public/skillIcons/tailwind.svg";
import sassIcon from "@/public/skillIcons/sass.svg";
import reactIcon from "@/public/skillIcons/react.svg";
import svelteIcon from "@/public/skillIcons/svelte.svg";
import dotnetIcon from "@/public/skillIcons/dotnet.svg";
import nodejsIcon from "@/public/skillIcons/nodejs.svg";
import expressjsIcon from "@/public/skillIcons/expressjs.svg";
import mysqlIcon from "@/public/skillIcons/mysql.svg";
import postgresqlIcon from "@/public/skillIcons/postgresql.svg";
import mongodbIcon from "@/public/skillIcons/mongodb.svg";
import prismaIcon from "@/public/skillIcons/prisma.svg";
import redisIcon from "@/public/skillIcons/redis.svg";
import jestIcon from "@/public/skillIcons/jest.svg";
import dockerIcon from "@/public/skillIcons/docker.svg";
import gitIcon from "@/public/skillIcons/git.svg";
import npmIcon from "@/public/skillIcons/npm.svg";
import webpackIcon from "@/public/skillIcons/webpack.svg";
import viteIcon from "@/public/skillIcons/vite.svg";
import uxpIcon from "@/public/skillIcons/uxp.svg";
import unityIcon from "@/public/skillIcons/unity.svg";
import lunaIcon from "@/public/skillIcons/luna.svg";
import cocosIcon from "@/public/skillIcons/cocos.svg";
import threejsIcon from "@/public/skillIcons/threejs.svg";
import pixijsIcon from "@/public/skillIcons/pixi.svg";
import gsapIcon from "@/public/skillIcons/gsap.svg";
import tweenjsIcon from "@/public/skillIcons/tweenjs.svg";
import glslIcon from "@/public/skillIcons/glsl.svg";
import r3fIcon from "@/public/skillIcons/r3f.svg";
import blenderIcon from "@/public/skillIcons/blender.svg";
import splineIcon from "@/public/skillIcons/spline.svg";
import figmaIcon from "@/public/skillIcons/figma.svg";
import photoshopIcon from "@/public/skillIcons/photoshop.svg";
import premiereIcon from "@/public/skillIcons/premiere.svg";
import rabbitmqIcon from "@/public/skillIcons/rabbitmq.svg";
import afterEffectsIcon from "@/public/skillIcons/afterEffects.svg";


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
        hash: "#languages",
    },
    {
        name: "PlayableAds",
        hash: "#playableAds",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Activities",
        hash: "#activities",
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
        title: "Senior Software Engineer, Performance Marketing",
        company: "Agave Games",
        location: "Istanbul, Turkey",
        description: [
            // "Lead and coach a team of playable ad developers embedded in franchise squads — acting as the technical and strategic reference, staying hands-on in production, and defining the team's standards, workflows, and best practices."
            "Own the end-to-end lifecycle of playable ads reaching millions of users, from market-driven ideation through game development to post-launch KPI analysis, partnering with PMs, growth managers, and artists to maximize CTR and high-intent conversions.",
            "Drive rapid gameplay iteration and A/B testing to implement creative hooks and responsive mechanics that bridge technical polish and top-tier IPM across global UA campaigns; benchmark competitor playables to drive innovation in formats and stay ahead of market trends.",
            "Built AI-powered tooling to accelerate marketing creative production: optimizing artists' gameplay-video workflows and generating UGC-style videos, reducing turnaround per creative and expanding the volume of testable ad variants.",
            "Built a JSON-driven templating web based system, that let designers and growth managers ship various playable variants without engineering."
            // "Architected a proprietary TypeScript/Node.js engine — with AI-powered tooling, integrated asset compression, cross-device optimization, and one-click ad-network export — to automate playable ad, HTML5 game, and IEC creation at minimum build size and peak runtime performance.",
        ],
        icon: <Image
            src={agaveLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Apr. 2026 - Present",
    },
    {
        title: "Senior Playable Ads Developer",
        company: "JustDice",
        location: "Hamburg, Germany",
        description: [
            "Owned playable ads end-to-end for games and consumer apps; from market research and competitor benchmarking, through 2D/3D asset design and development to post-launch KPI analysis, optimizing against CTR, IPM, and CVR to steer each creative iteration.",
            "Built an internal TypeScript/Node.js platform to streamline playable ad/ HTML5 game, and IEC creation, with built-in size optimization and one-click ad-network export, cutting production time per creative, and letting designers ship without engineering.",
            "Analyzed A/B tests and interaction-event data to pinpoint engagement and drop-off points across the user journey, refining creative direction to lift CVR/ install rate.",
            "Built plugins and packages, including AI-powered tools, for Unity, Photoshop, After Effects, and Figma to accelerate the design team's workflow and speed up playable ad production; contributed to transversal initiatives by rolling these tools out across teams."
        ],
        icon: <Image
            src={justdiceLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Oct. 2024 - Apr. 2026",
    },
    {
        title: "Playable Ads Developer & Consultant (External)",
        company: "MY.GAMES",
        location: "Amsterdam, The Netherlands",
        description: [
            "Developed and designed playable ads for mobile games in Three.js, PixiJS, and TypeScript (HTML/CSS), delivering network-compliant creatives across multiple networks to drive user acquisition.",
            "Advised on and implemented the technical approach for each playable ad, optimizing runtime performance and tightening core gameplay hooks to lift CTR and IPM metrics.",
        ],
        icon: <Image
            src={myGamesLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Mar. 2025 - Mar. 2026",
    },
    {
        title: "Playable Ads Development Consultant",
        company: "GameGame",
        location: "Hamburg, Germany",
        description: [
            "Established the company's first playable ad development pipeline from the ground up, defining the tech stack, build tooling, and QA/delivery workflow that took them from zero to shipping network-ready playables."
        ],
        icon: <Image
            src={gameGameLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Jul. 2025 - Nov. 2025",
    },
    {
        title: "Playable Ads Developer",
        company: "JustDice",
        location: "Hamburg, Germany",
        description: [
            "Designed and developed engaging Playable Ads (Luna)/ HTML5 Games, into size-optimized, scalable, interactive experiences for apps and mobile games, ensuring alignment with marketing objectives and user acquisition strategies using Unity, Luna and C#.",
            "Created and optimized 3D/ 2D assets for performance and visual quality, supporting overall campaign strategy, using Blender, Photoshop, and Figma.",
            "Built plugins and packages for Unity, PhotoShop, AfterEffects and Figma to accelerate the Design team's creative workflow and improve playable ad production, using ExtendScript, UXP, JavaScript, HTML, and CSS.",
        ],
        icon: <Image
            src={justdiceLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Apr. 2023 - Oct. 2024",
    },
    {
        title: "Playable Ads Developer",
        company: "Panteon Games",
        location: "Ankara, Turkey",
        description: [
            "Designed and developed Playable Ads (Luna)/ HTML5 Games, transforming core gameplay into size-optimized, scalable, interactive experiences for hyper-casual and hybrid-casual titles.",
            "Built reusable, customizable playable ad templates and internal Unity packages, usable by designers and UA/ growth managers, to accelerate development and iteration across multiple ad networks and campaigns.",
            "Led and mentored junior playable ad devs, guiding on the playable ad pipeline, core UA/performance marketing principles and best practices."
        ],
        icon: <Image
            src={panteonLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Nov. 2021 - Apr. 2023",
    },
    {
        title: "Marketing Game Developer",
        company: "Panteon Games",
        location: "Ankara, Turkey",
        description: [
            "Rapidly transformed creative ideas into gameplay prototypes in Unity, to maximize advertising impact.",
            "Collaborated with growth, marketing, and creative teams to modify and iterate on gameplay mechanics, showcasing engaging gameplay moments for advertising campaigns.",
            "Built reusable Unity tools and editor extensions to improve development efficiency and accelerate creative iteration."
        ],
        icon: <Image
            src={panteonLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Nov. 2021 - Apr. 2023",
    },
    {
        title: "Project Engineer - Intern",
        company: "TUPRAS",
        location: "Kocaeli, Turkey",
        description: [
            "Led 'susTRAINable' project at TUPRAS, targeting net-zero railway emissions by 2050, aligning with 6 UN Sustainable Development Goals.",
            "Led 'TogetHER' project focused on improving women's lives in the refinery and energy sectors, including mentorship programs for STEM-inclined women."
        ],
        icon: <Image
            src={tuprasLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Aug. 2021 - Sep. 2021",
    },
    {
        title: "Game Developer - Intern",
        company: "GEFEASOFT",
        location: "Mugla, Turkey",
        description: [
            "Developed WebGL and HTML5-based serious games using C# and Unity.",
            "Designed gameplay systems, optimized performance for web deployment, and participated in feature development throughout the project lifecycle."
        ],
        icon: <Image
            src={gefeasoftLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Mar. 2021 - Jul. 2021",
    },
    {
        title: "Software Engineer - Intern",
        company: "Avocuda",
        location: "Istanbul, Turkey",
        description: [
            "Developed and maintained frontend features for mobile applications as part of the engineering team."
        ],
        icon: <Image
            src={avocudaLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Feb. 2020 - Jun. 2020",
    }
] as const;

export const educationData = [
    {
        title: "M.Sc., Computer Science",
        university: "University of Hamburg",
        location: "Hamburg, Germany",
        description: [
            "Dropout - Relocation",
        ],
        icon: <Image
            src={uhhLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "April. 2025 - Jan. 2026",
    },
    {
        title: "B.Sc., Electrical & Electronics Engineering (%100 English)",
        university: "Eskisehir Osmangazi University",
        location: "Eskisehir, Turkey",
        description: [
            "Graduated with a GPA of 3.01/ 4.0",
            "Successfully completed the English preparatory year and took elective courses from the Computer Science department, in addition to my regular classes.",
            "Worked as an intern in the Artificial Intelligence and Robotics Lab.",
            "Played an active role in developing the website for the university's Artificial Intelligence and Robotics Lab course.",
        ],
        icon: <Image
            src={oguLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Sep. 2016 - Aug. 2021",
    }
] as const;

export const projectsData = [
    {
        title: "smart-sheet-translate",
        date: "Apr. 2026- Apr. 2026",
        description:
            "Developed a Google Sheets add-on that automates batch translation of localization sheets via a custom HTTP API, enabling full multi-language coverage directly from the spreadsheet.",
        tags: ["Google Apps Script", "Node.js","clasp", "OpenAI API"],
    },
    {
        title: "base122-encoding (npm library)",
        date: "Sep. 2025- Nov. 2025",
        description:
            "Developing an npm library implementing Base‑122 encoding, reducing data size by up to ~30% compared to Base‑64 for use in data URIs.",
        tags: ["TypeScript", "NodeJS", "Vite"],
    },
    {
        title: "texture-optimize-pro (npm library)",
        date: "Oct. 2025- Oct. 2025",
        description:
            "Developed a texture optimization library for HTML5 games (PixiJS/ThreeJS), leveraging Sharp for high-performance image processing with per-texture configuration of max size, format, and quality.",
        tags: ["TypeScript", "NodeJS", "Sharp"],
    },
    {
        title: "Figma Design Plugin",
        date: "Jul. 2025- Present",
        description:
            "Developed a Figma plugin that automates the creation of static store screens, network end-cards, and marketing assets, featuring DeepL API integration for seamless multi‑GEO translations.",
        tags: ["Figma", "HTML", "CSS", "TypeScript", "Vite"],
    },
    {
        title: "Text Localization - GEO Package",
        date: "Jan. 2025 - Feb. 2025",
        description:
            "Developed a localization package that detects device language and updates playable ads./ HTML5 game texts for multilingual support.",
        tags: ["TypeScript", "NodeJS"],
    },
    {
        title: "AdCraft",
        date: "Oct. 2024",
        description:
            "Developed a tool designed to streamline the manipulation of ad network requirements and enable efficient build generation by providing a simple interface for playable ads./ HTML5 games.",
        tags: ["React", "TypeScript", "Tailwind", "HTML", "CSS", "NodeJS", "Vite"],
    },
    {
        title: "Adobe PhotoShop Design Tool",
        date: "Jul. 2023 - Dec. 2023",
        description: "Developed a Adobe PhotoShop extension focused on generating static store screens, network end cards and marketing purposed resources.",
        tags: ["ExtendScript", "JavaScript", "CSS", "HTML", "UXP"]
    },
    {
        title: "Unity Playable Ads Kit",
        date: "Apr. 2022 - Sep. 2023",
        description:
            "Developed a plugin for playable ads development, featuring essential template generation, translation(localization) package, utility methods, ...",
        tags: ["C#", "Unity"],
    },
    {
        title: "Semantic Segmentation using Deep Learning",
        date: "Sep. 2020 - Jun. 2021",
        description:
            "Implemented deep learning methods using Python libraries, for robot's capabilities in search and rescue scenarios.",
        tags: ["Python", "NumPy", "PyTorch", "pandas", "SciPy", "OpenGL"],
    },
    {
        title: "Interface design for Segmentation Data",
        date: "May. 2021 - Jun. 2021",
        description:
            "An interface for streamlined input organization in deep learning, facilitating  training, testing, and visualization with S3DIS and ESOGU RAMPS datasets.",
        tags: ["Python", "Qt", "OpenGL"],
    },
    {
        title: "Point Cloud Data Optimization",
        date: "Nov. 2020- Jan. 2021",
        description:
            "Developed a data size reduction technique using point cloud information for a specified object, employing similarity measures and midpoints for classification in deep learning applications.",
        tags: ["C++"],
    },
    {
        title: "Counting products on a Conveyor Belt",
        date: "Sep. 2018 - Dec. 2018",
        description:
            "Utilized Proteus to design a circuit system that sorts and separates products on a conveyor belt according to their individual colors.",
        tags: ["Proteus"],
    },
] as const;

export const skillsData = [
    // Programming Languages
    [
        { name: "C#", icon: csharpIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "Python", icon: pythonIcon },
        { name: "C++", icon: cppIcon },
    ],

    // Frontend & Styling
    [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "TailwindCSS", icon: tailwindIcon },
        { name: "Sass", icon: sassIcon },
        { name: "React", icon: reactIcon },
    ],

    // Backend & Databases
    [
        { name: ".Net", icon: dotnetIcon },
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express.js", icon: expressjsIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "MongoDB", icon: mongodbIcon },
        // { name: "Prisma", icon: prismaIcon },
        // { name: "Redis", icon: redisIcon },
    ],

    // Testing & DevOps
    [
        { name: "Jest", icon: jestIcon },
        { name: "Docker", icon: dockerIcon },
    ],

    // Messaging & Queues
    [
        { name: "RabbitMQ", icon: rabbitmqIcon },
    ],
    // Tools, Package Managers
    [
        { name: "Git", icon: gitIcon },
        { name: "npm", icon: npmIcon },
        { name: "Webpack", icon: webpackIcon },
        { name: "Vite", icon: viteIcon },
        { name: "UXP", icon: uxpIcon },
    ],

    // Game Development
    [
        { name: "Unity", icon: unityIcon },
        { name: "Luna (Unity Playworks)", icon: lunaIcon },
        { name: "Cocos Creator", icon: cocosIcon },
    ],

    // Libraries
    [
        { name: "ThreeJS", icon: threejsIcon },
        { name: "PixiJS", icon: pixijsIcon },
        { name: "GSAP", icon: gsapIcon },
        { name: "GLSL", icon: glslIcon },
        { name: "React Three Fiber", icon: r3fIcon },
    ],

    // Design Tools
    [
        { name: "Blender", icon: blenderIcon },
        { name: "Spline", icon: splineIcon },
        { name: "Figma", icon: figmaIcon },
        { name: "Adobe PhotoShop", icon: photoshopIcon },
        { name: "Adobe After Effects", icon: afterEffectsIcon },
        { name: "Adobe Premier Pro", icon: premiereIcon },
    ]
] as const;


export const softSkillsData = [
    "Problem Solving",
    "Marketing KPI Analysis",
    "Creativity",
    "Communication",
    "Teamwork",
    "Market-Trend Analysis",
    "Quick Learner",
    "Efficient AI User"
] as const;

export const languageData = [
    {
        title: "Turkish",
        level: "Native",
        icon: turkishFlagImg,
        description: "",
    },
    {
        title: "English",
        level: "C1",
        icon: englishFlagImg,
        description: "EF Standard Test 81/100",
    },
    {
        title: "Korean",
        level: "A2",
        icon: koreaFlagImg,
        description: "TOPIK I 156/200",
    },
    {
        title: "German",
        level: "A2",
        icon: germanFlagImg,
        description: "",
    },
] as const;

export const activitiesData = [
    {
        title: "Founder",
        company: "Crabtic",
        location: "Hamburg, Germany",
        description: [
            "Developing a platform for automated interactive end cards and playable ads./ HTML5 games, leveraging AI integration to enhance engagement and streamline user experience.",
        ],
        icon: <Image
            src={kindCrabLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Jun. 2025 - Present",
    },
    {
        title: "Co-Founder & Administrative Assistant",
        company: "Eskisehir Korean Culture Academy",
        location: "Eskisehir, Turkey",
        description: [
            "Engaged in founding, overseeing, and managing academy operations.",
            "Coordinated and planned events for the academy.",
            "Taught introductory A1-level Korean to beginners."
        ],
        icon: <Image
            src={koreanCulturalCenterLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Jun. 2019 - Nov. 2021",
    },
    {
        title: "IGET-IT Member",
        company: "AIESEC Turkey",
        location: "Eskisehir, Turkey",
        description: [
            "Provided mentorship and translation services to foreign talents and entrepreneurs in Turkey.",
            "Aided in navigating permit procedures and resolving associated challenges for foreign talents."
        ],
        icon: <Image
            src={aiesecLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Oct. 2017 - Jun. 2018",
    },
] as const;

export const certificatesData = [
    {
        title: "Three.js Journey",
        company: "three.js journey by Bruno Simon",
        date: "Jun. 2024",
        tags: ["ThreeJS", "JavaScript", "React", "React Three Fiber", "HTML", "CSS", "Blender", "GLSL", "GSAP", "CannonJS", "Rapier"],
        imageUrl: threeJSJourneyCertificate,
    },
    {
        title: "Back-End Apps with Node.js and Express",
        company: "IBM",
        date: "Dec. 2023",
        tags: ["JavaScript", "Node.js", "Express"],
        imageUrl: ibmCertificate,
    },
    {
        title: "Professional Meta Front-End Developer Certificate",
        company: "META",
        date: "Nov. 2023",
        tags: ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "npm", "Jest", "Figma", "Sass"],
        imageUrl: metaCertificate,
    },
    {
        title: "Intermediate Object-Oriented Programming for Unity",
        company: "University of Colorado",
        date: "May 2021",
        tags: ["C#", "Unity"],
        imageUrl: coloradoCertificate,
    },
]
