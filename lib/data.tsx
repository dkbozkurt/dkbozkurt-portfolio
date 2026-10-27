
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
import goodgameLogo from '@/public/companyIcons/goodgame_logo.png';

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
        company: "Goodgame Studios (Stillfront Group)",
        location: "Hamburg, Germany",
        description: [
            "Lead playable ad and video-base production end to end: design each mechanic, ship it as both a self-contained web playable (TypeScript/Three.js) and a Unity build, and test new formats and interactions to stay ahead of market trends.",
            "Own the creative side of the UA funnel from first impression to Day 3: benchmark competitor playables and run creative and marketability A/B tests with growth managers and creative strategists, optimizing CTR, IPM, CVR, D1/D3 retention, and ROAS from pre-launch through global launch.",
            "Define the playable workflow, tooling, and standards: a no-code tuning editor connected directly to the playables, Node.js build/QA pipelines for multi-network packaging, and ad-network reporting feeding back into iteration.",
            "Drive AI-assisted code and asset based production, and automate LLM-assisted variant and localization generation to scale creative-testing velocity.",
        ],
        icon: <Image
            src={goodgameLogo}
            alt="logo"
            sizes="60px"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Nov. 2026 - Present",
    },
    {
        title: "Senior Software Engineer, Performance Marketing",
        company: "Agave Games",
        location: "Istanbul, Turkey",
        description: [
            "Owned end-to-end playable ad development for a 50M+ install puzzle portfolio; my playables were the main driver of one title's UA scale, reaching $560K+ in daily ad spend and 1M+ daily clicks and helping push it into the Top 10 charts on both iOS and Android.",
            "Led playable creative iteration: benchmarked competitor ads to spot winning hooks, then designed and ran gameplay iterations and A/B tests to improve CTR, IPM, and CVR while keeping ads true to gameplay to protect early retention.",
            "Co-built Agave AI Studio, an internal AI creative platform replacing a third-party UGC tool at ~1/3 the cost, featuring AI video generation, localization, an LLM agent converting gameplay videos into playables, and a JSON-driven variant generator that lets designers and growth managers ship playable variants without engineering, accelerating high-volume creative testing."
        ],
        icon: <Image
            src={agaveLogo}
            alt="logo"
            // Shown at 40-60px; without `sizes` Next serves the 256px variant.
            sizes="60px"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Apr. 2026 - Nov. 2026",
    },
    {
        title: "Senior Playable Ads Developer",
        company: "JustDice",
        location: "Hamburg, Germany",
        description: [
            "Owned playable ads and IECs end-to-end across a rewarded-gaming portfolio of 20+ apps and 300M+ lifetime downloads, including the flagship title Cash Giraffe (10M+ installs), from competitor benchmarking and concept development to post-launch optimization of CTR, IPM, CVR, and ROAS.",
            "Built an internal TypeScript/Node.js platform for producing playable ads, HTML5 games, and IECs, featuring automated asset compression and one-click multi-network export. Also developed AI-powered plugins for Photoshop, After Effects, and Figma, which were rolled out across teams, reducing production time per creative.",
            "Analyzed A/B test results and in-playable interaction-event data to identify engagement patterns and drop-off points throughout the ad-to-install funnel, aligning ad messaging with the in-app experience to improve install rates and user quality (retention and LTV)."
        ],
        icon: <Image
            src={justdiceLogo}
            alt="logo"
            sizes="60px"
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
            "Designed and developed playable ads for mobile games in TypeScript, Three.js, and PixiJS, MRAID-compliant creatives within each ad network's size and CTA rules for global UA campaigns.",
            "Advised on the technical and creative approach for each playable, optimizing load time and runtime performance on low-end devices and tightening core gameplay hooks to lift CTR and IPM.",
        ],
        icon: <Image
            src={myGamesLogo}
            alt="logo"
            sizes="60px"
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
            "Established the company's first playable ad pipeline from the ground up, defining the tech stack, build tooling, and QA/delivery workflow that took the team from zero to shipping network-ready playables for UA campaigns."
        ],
        icon: <Image
            src={gameGameLogo}
            alt="logo"
            sizes="60px"
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
            "Developed size-optimized playable ads and HTML5 games for rewarded-gaming apps, aligned with UA strategy and optimized for CTR, IPM, and CVR.",
            "Created performance-optimized 2D/3D assets using Blender, Photoshop, and Figma, balancing visual quality with strict ad-network size limits.",
            "Built plugins for Unity, Photoshop, After Effects, and Figma to automate marketing production workflows and accelerate creative production.",
        ],
        icon: <Image
            src={justdiceLogo}
            alt="logo"
            sizes="60px"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Apr. 2023 - Oct. 2024",
    },
    {
        title: "Playable Ads & Marketing Game Developer",
        company: "Panteon Games",
        location: "Ankara, Turkey",
        description: [
            "Developed size-optimized Unity/Luna playable ads and HTML5 games for hyper- and hybrid-casual titles, supporting global UA campaigns.",
            "Rapidly prototyped gameplay mechanics in Unity (C#) for video creatives and marketability tests, validating hooks through CTR and IPM performance.",
            "Built reusable playable ad templates, Unity packages, and editor tools to streamline production and accelerate creative A/B testing across ad networks.",
            "Collaborated with growth, and creative teams to optimize ad performance (IPM, CPI, CTR) while mentoring junior developers on production workflows."
        ],
        icon: <Image
            src={panteonLogo}
            alt="logo"
            sizes="60px"
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
            sizes="60px"
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
            sizes="60px"
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
            sizes="60px"
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
        title: "M.Sc., Informatik (Computer Science)",
        university: "University of Hamburg",
        location: "Hamburg, Germany",
        description: [
            "Dropout - Relocation",
        ],
        icon: <Image
            src={uhhLogo}
            alt="logo"
            sizes="60px"
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
            sizes="60px"
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
        title: "Agave AI Studio",
        date: "Aug. 2026 - Present",
        description:
            "Co-built Agave's internal generative AI platform for image, video, lipsync, and localization ads at 1/3 the cost of a third-party UGC tool. Built an LLM agent (Claude, OpenAI) that turns gameplay videos into HTML5 playables, and a JSON-driven variant generator for non-engineers.",
        tags: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "GCP", "LLM"],
    },
    {
        title: "smart-sheet-translate",
        date: "Apr. 2026",
        description:
            "Built a Google Sheets add-on in Google Apps Script that batch-translates game localization sheets through a custom Node.js API and the OpenAI API, delivering full multi-language coverage directly inside the spreadsheet.",
        tags: ["Google Apps Script", "Node.js", "clasp", "OpenAI API"],
    },
    {
        title: "base122-encoding (npm library)",
        date: "Sep. 2025 - Nov. 2025",
        description:
            "Built a TypeScript npm library implementing Base-122 binary-to-text encoding for data URIs, cutting encoding overhead from 33% (Base64) to about 14% and shrinking embedded assets in single-file HTML5 playable ads.",
        tags: ["TypeScript", "Node.js", "Vite"],
    },
    {
        title: "texture-optimize-pro (npm library)",
        date: "Oct. 2025",
        description:
            "Built a TypeScript npm library that batch-optimizes textures for PixiJS and Three.js HTML5 games using Sharp, with per-texture max size, format, and quality settings to keep builds within ad-network size limits.",
        tags: ["TypeScript", "Node.js", "Sharp"],
    },
    {
        title: "Figma Design Plugin",
        date: "Jul. 2025 - Present",
        description:
            "Built a Figma plugin in TypeScript that automates production of app store screenshots, ad-network end cards, and marketing assets, with DeepL API integration for one-click localization across multiple GEOs.",
        tags: ["Figma", "TypeScript", "DeepL API", "HTML", "CSS", "Vite"],
    },
    {
        title: "AdCraft",
        date: "Oct. 2024",
        description:
            "Built a React and TypeScript web tool that manages ad-network requirements and generates network-ready builds of playable ads and HTML5 games from a single interface, replacing manual per-network packaging.",
        tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Vite"],
    },
    {
        title: "Adobe Photoshop Design Tool",
        date: "Jul. 2023 - Dec. 2023",
        description:
            "Built an Adobe Photoshop plugin with UXP and ExtendScript that automates generation of app store screenshots, ad-network end cards, and marketing assets, reducing manual design work for the creative team.",
        tags: ["UXP", "ExtendScript", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "Unity Playable Ads Kit",
        date: "Apr. 2022 - Sep. 2023",
        description:
            "Built a Unity (C#) package for playable ad development with project template generation, a localization system, and reusable gameplay utilities, accelerating production of new playables and A/B test variants.",
        tags: ["C#", "Unity"],
    },
    {
        title: "Semantic Segmentation using Deep Learning",
        date: "Sep. 2020 - Jun. 2021",
        description:
            "Implemented deep learning models in PyTorch for 3D point cloud semantic segmentation, enabling a mobile robot to understand its surroundings in search-and-rescue scenarios at the university's AI and Robotics Lab.",
        tags: ["Python", "PyTorch", "NumPy", "pandas", "SciPy", "OpenGL"],
    },
    {
        title: "Interface Design for Segmentation Data",
        date: "May 2021 - Jun. 2021",
        description:
            "Built a Python desktop application with Qt and OpenGL to organize input data, train and test segmentation models, and visualize 3D point cloud results on the S3DIS and ESOGU RAMPS datasets.",
        tags: ["Python", "Qt", "OpenGL"],
    },
    {
        title: "Point Cloud Data Optimization",
        date: "Nov. 2020 - Jan. 2021",
        description:
            "Developed a C++ point cloud downsampling algorithm that uses similarity measures and midpoint merging to reduce object data size while preserving the features needed for deep learning classification.",
        tags: ["C++"],
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
    "Performance Marketing KPIs Analysis",
    "A/B Testing & Experimentation",
    "AI-Assisted Engineering & LLM Tooling",
    "Creative Strategy & Competitor Benchmarking",
    "Problem Solving",
    "Cross-functional Communication",
    "Quick Learner",
    "Mentoring"
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
        description: "GOETHE A1 89/100",
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
            sizes="60px"
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
            sizes="60px"
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
            sizes="60px"
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
