
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

import hundredMysteryButtonsLogo from "@/public/AppIcons/100 Mystery Buttons.png";
import airportMasterLogo from "@/public/AppIcons/Airport Master.png";
import appStationLogo from "@/public/AppIcons/App Station.png";
import ballBrawl3DLogo from "@/public/AppIcons/Ball Brawl 3D - Soccer Cup.png";
import beMyGuestLogo from "@/public/AppIcons/Be My Guest.png";
import bounceAndPopLogo from "@/public/AppIcons/Bounce And Pop.png";
import carnivalClashLogo from "@/public/AppIcons/Carnival Clash.png";
import cashAlarmLogo from "@/public/AppIcons/Cash Alarm.png";
import cashCowLogo from "@/public/AppIcons/Cash Cow.png";
import cashEmAllLogo from "@/public/AppIcons/Cash Em All.png";
import cashEmpireLogo from "@/public/AppIcons/Cash Empire.png";
import cashGiraffeLogo from "@/public/AppIcons/Cash Giraffe.png";
import cashyyLogo from "@/public/AppIcons/Cashyy.png";
import clayShopLogo from "@/public/AppIcons/Clay Shop.png";
import destroyMasterLogo from "@/public/AppIcons/Destroy Master.png";
import fashionFamousLogo from "@/public/AppIcons/Fashion Famous.png";
import gamePerksLogo from "@/public/AppIcons/Game Perks.png";
import gameXpertLogo from "@/public/AppIcons/GameXpert.png";
import ginRummyLogo from "@/public/AppIcons/GinRummy.png";
import goalPartyLogo from "@/public/AppIcons/Goal Party.png";
import guessAndHitLogo from "@/public/AppIcons/Guess And Hit.png";
import homeRestorationLogo from "@/public/AppIcons/Home Restoration.png";
import mobu2Logo from "@/public/AppIcons/Mobu2.png";
import modelAgencyLogo from "@/public/AppIcons/Model Agency.png";
import moneyBunnyLogo from "@/public/AppIcons/Money Bunny.png";
import moneySlotsLogo from "@/public/AppIcons/Money Slots.png";
import moneyWellLogo from "@/public/AppIcons/Money Well.png";
import muscleLandLogo from "@/public/AppIcons/Muscle Land.png";
import myChocolateShopLogo from "@/public/AppIcons/My Chocolate Shop.png";
import rabbitsVSMonsterLogo from "@/public/AppIcons/Rabbits VS Monsters.png";
import raidRushLogo from "@/public/AppIcons/Raid Rush.png";
import rollMerge3DLogo from "@/public/AppIcons/Roll Merge 3D.png";
import scratch4LifeLogo from "@/public/AppIcons/Scratch 4 Life.png";
import slingPlaneLogo from "@/public/AppIcons/Sling Plane.png";
import testEmAllLogo from "@/public/AppIcons/Test Em All.png";
import theLuckyMinerLogo from "@/public/AppIcons/The Lucky Miner.png";
import tradingMaster3DLogo from "@/public/AppIcons/Trading Master 3D.png";
import valetMasterLogo from "@/public/AppIcons/Valet Master.png";
import wChallengeLogo from "@/public/AppIcons/W Challenge.png";
import moneyTurnLogo from "@/public/AppIcons/Money Turn.png";
import newTestEmAllLogo from "@/public/AppIcons/NewTestEmAllLogo.png";
import cashGrannyLogo from '@/public/AppIcons/CashGrannyLogo.png'
import shootDefenderLogo from '@/public/AppIcons/Shoot Defender.png'
import mobControlLogo from '@/public/AppIcons/MobControl.png'
import blockBlastLogo from '@/public/AppIcons/blockblast.png'
import diceMergeLogo from '@/public/AppIcons/dicemerge.png'
import fruitMergeLogo from '@/public/AppIcons/fruitmerge.png'
import goodsSortLogo from '@/public/AppIcons/goodssort.png'
import matchFactoryLogo from '@/public/AppIcons/matchfactory.png'
import parkingJamLogo from '@/public/AppIcons/parkingjam.png'
import pizzaReadyLogo from '@/public/AppIcons/pizzaready.png'
import tapAwayLogo from '@/public/AppIcons/tapaway.png'
import trafficEspaceLogo from '@/public/AppIcons/trafficescape.png'
import waterSortLogo from '@/public/AppIcons/watersort.png'
import hexaSortLogo from '@/public/AppIcons/hexasort.png'
import knifeHitLogo from '@/public/AppIcons/knifehit.png'
import knowWordsLogo from '@/public/AppIcons/knotwords.png'
import monopolyLogo from '@/public/AppIcons/monopoly.png'
import oneLineDrawingLogo from '@/public/AppIcons/oneLineDrawing.png'
import toonBlastLogo from '@/public/AppIcons/toonblast.png'
import woodsNutLogo from '@/public/AppIcons/woodsnut.png'
import busOutLogo from '@/public/AppIcons/BusOut.png'
import travelTownLogo from '@/public/AppIcons/TravelTown.png'
import colorBlockJamLogo from '@/public/AppIcons/ColorBlockJam.png'
import miniMetroLogo from '@/public/AppIcons/Mini Metro.png'
import coffeePackLogo from '@/public/AppIcons/CoffeePackLogo.png'
import reignsLogo from '@/public/AppIcons/ReignsLogo.png'
import mahjongLogo from '@/public/AppIcons/MahjongIcon.png'
import grandHotelManiaLogo from '@/public/AppIcons/GrandHotelManiaIcon.png'
import holeIOLogo from '@/public/AppIcons/hole-ioLogo.png'
import blockJam3DLogo from '@/public/AppIcons/blockJam3D-ColorPuzzle.png';
import toTheMoonLogo from '@/public/AppIcons/ToTheMoonLogo.png';
import bundesBankLogo from '@/public/AppIcons/BundesBank.jpg';
import sodaSortLogo from '@/public/AppIcons/SodaSort.png';
import ninjaJumpLogo from '@/public/AppIcons/NinjaJump.png';

import avocudaLogo from '@/public/companyIcons/avocuda_logo.jpeg'
import ekmobLogo from '@/public/companyIcons/ekmob_sfa_logo.jpeg'
import gefeasoftLogo from '@/public/companyIcons/gefeasoft_logo.jpeg'
import justdiceLogo from '@/public/companyIcons/justdice_logo.jpeg'
import panteonLogo from '@/public/companyIcons/panteon_logo.jpeg'
import tempaPanoLogo from '@/public/companyIcons/tempapano_logo.jpeg'
import tuprasLogo from '@/public/companyIcons/tupras_logo.jpeg'
import myGamesLogo from '@/public/companyIcons/myGames_logo.jpeg';
import gameGameLogo from '@/public/companyIcons/gamegame_logo.jpg';

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
        title: "Senior Playable Ads Developer",
        company: "JustDice",
        location: "Hamburg, Germany",
        description: [
            "Managing end-to-end playable ads development from market research and ideation through 2D-3D asset design and game development to post-launch KPI analysis, ensuring campaign alignment and performance insights.",
            "Developing a web-based platform using TypeScript and Node.js to streamline HTML5 games/ Playable Ads and IEC creation, featuring built-in optimization and Ad network export tools.",
        ],
        icon: <Image
            src={justdiceLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Oct. 2024 - Present",
    },
    {
        title: "Playable Ads Developer & Consultant (External)",
        company: "MY.GAMES",
        location: "Amsterdam, The Netherlands",
        description: [
            "Developing interactive playable ads for mobile games using ThreeJS, PixiJS, TypeScript, HTML and CSS to support marketing goals and user acquisition.",
            "Consulting on and executing technical strategies for playable ads, focusing on seamless runtime performance and polished gameplay mechanics to boost player retention."
        ],
        icon: <Image
            src={myGamesLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Mar. 2025 - Present",
    },
    {
        title: "Playable Ads Development Consultant",
        company: "GameGame",
        location: "Hamburg, Germany",
        description: [
            "Providing consultation on playable ad development, including structural planning, strategic guidance, playable ad optimization, and overall performance enhancement."
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
            "Developing engaging playable ads./ HTML5 games for apps and mobile games utilizing TypeScript, ThreeJS, PixiJS as well as Unity, LunaLabs and C#.",
            "Designing 3D & 2D assets for marketing campaigns using Blender, Adobe PhotoShop and Figma.",
            "Developing plugins to automate the playable ads development process.",
            "Building automation plugins for Adobe Apps to support the Design Team, utilizing ExtendScript, JavaScript, HTML, CSS and UXP.",
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
        title: "Playable Ads & Marketing Game Developer",
        company: "Panteon Games",
        location: "Ankara, Turkey",
        description: [
            "Designed and developed playable ads./ HTML5 games using Unity, LunaLabs and C#.",
            "Enhanced gameplay, integrated new mechanics/features, and applied creative elements to boost game appeal and optimize marketing performance of advertising assets.",
            "Developed extensions/packages for playable ads. and creative game development in Unity using C#."
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
        title: "Technical Customer Support Specialist",
        company: "Ekmob SFA",
        location: "Istanbul, Turkey",
        description: [
            "Addressed customer-reported problems and resolved software bugs.",
            "Communicated technical aspects of our software apps to customers."
        ],
        icon: <Image
            src={ekmobLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Sep. 2021 - Oct. 2021",
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
            "Developed WebGL and HTML5 based serious games, by using C# and Unity."
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
            "Contributed to mobile application development in the development team."
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
    },
    {
        title: "Electrical Design Engineer - Intern",
        company: "Tempa Pano",
        location: "Kocaeli, Turkey",
        description: [
            "Interned as a test and design engineer in an electrical enclosure-producing factory.",
            "Engaged in projects including electrical enclosure projects such as Rayyan Stadium in Qatar and the International Reception Center of Ashgabat in Turkmenistan."
        ],
        icon: <Image
            src={tempaPanoLogo}
            alt="logo"
            style={{
                objectFit: 'contain',
                borderRadius: '50%'
            }}
        />,
        date: "Aug. 2019 - Sep. 2019",
    },
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
        title: "B.S., Electrical & Electronics Engineering (%100 English)",
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
        title: "base122-encoding (npm library)",
        date: "Sep. 2025- Present",
        description:
            "Developing an npm library implementing Base‑122 encoding, reducing data size by up to ~30% compared to Base‑64 for use in data URIs.",
        tags: ["TypeScript","NodeJS","Vite"],
    },
    {
        title: "texture-optimize-pro (npm library)",
        date: "Oct. 2025- Oct. 2025",
        description:
            "Developed a texture optimization library for HTML5 games (PixiJS/ThreeJS), leveraging Sharp for high-performance image processing with per-texture configuration of max size, format, and quality.",
        tags: ["TypeScript","NodeJS","Sharp"],
    },
    {
        title: "Figma Design Plugin",
        date: "Jul. 2025- Present",
        description:
            "Developed a Figma plugin that automates the creation of static store screens, network end-cards, and marketing assets, featuring DeepL API integration for seamless multi‑GEO translations.",
        tags: ["Figma","HTML","CSS","TypeScript","Vite"],
    },
    {
        title: "Text Localization - GEO Package",
        date: "Jan. 2025 - Fe. 2025",
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
        { name: "Svelte", icon: svelteIcon },
    ],

    // Backend & Databases
    [
        { name: ".Net", icon: dotnetIcon },
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express.js", icon: expressjsIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "Prisma", icon: prismaIcon },
        { name: "Redis", icon: redisIcon },
    ],

    // Testing & DevOps
    [
        { name: "Jest", icon: jestIcon },
        { name: "Docker", icon: dockerIcon },
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
        { name: "TweenJS", icon: tweenjsIcon },
        { name: "GLSL", icon: glslIcon },
        { name: "React Three Fiber", icon: r3fIcon },
    ],

    // Design Tools
    [
        { name: "Blender", icon: blenderIcon },
        { name: "Spline", icon: splineIcon },
        { name: "Figma", icon: figmaIcon },
        { name: "Adobe PhotoShop", icon: photoshopIcon },
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
        title: "Professional CSS",
        company: "by ByteGrad",
        date: "Jan. 2025",
        tags: ["HTML","CSS", "Grid & Flexbox", "Responsiveness", "Sass/SCSS", "BEM", "Animations & Transitions"],
        imageUrl: professionalCSSCertificate,
    },
    {
        title: "Three.js Journey",
        company: "three.js journey by Bruno Simon",
        date: "Jun. 2024",
        tags: ["ThreeJS", "JavaScript", "React", "React Three Fiber", "HTML", "CSS", "Blender", "GLSL", "GSAP", "CannonJS", "Rapier"],
        imageUrl: threeJSJourneyCertificate,
    },
    {
        title: "Three.js and TypeScript",
        company: "Udemy",
        date: "Apr. 2024",
        tags: ["ThreeJS", "TypeScript", "Blender"],
        imageUrl: udemyThreeJSCertificate,
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
        title: "3D Web Game Development With Three.JS",
        company: "Udemy",
        date: "Sep. 2023",
        tags: ["JavaScript", "ThreeJs", "CannonJS"],
        imageUrl: udemyCertificate,
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        company: "freeCodeCamp",
        date: "Jul. 2023",
        tags: ["Javascript"],
        imageUrl: freeCodeCampCertificate,
    },
    {
        title: "Intermediate Object-Oriented Programming for Unity",
        company: "University of Colorado",
        date: "May 2021",
        tags: ["C#", "Unity"],
        imageUrl: coloradoCertificate,
    },
    {
        title: "Game Design and Development",
        company: "Michigan State University",
        date: "Mar. 2021",
        tags: ["C#", "Unity"],
        imageUrl: michiganCertificate,
    },
]

export const playableAdsData = [
    {
        appName:"Cash Clash",
        playableName: "Ninja Jump",
        icon: ninjaJumpLogo,
        url: "/playableAds/NinjaJump_CashClash_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Soda Sort",
        playableName: "Agave Games",
        icon: sodaSortLogo,
        url: "/playableAds/SodaSort_AgaveGames_Responsive_Playable_01_Applovin_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Money Well",
        playableName: "Bundes Bank",
        icon: bundesBankLogo,
        url: "/playableAds/BundesBank_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Cash Giraffe",
        playableName: "2 The Moon",
        icon: toTheMoonLogo,
        url: "/playableAds/ToTheMoon_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Play Zone",
        playableName: "Block Jam 3D: Color Puzzle",
        icon: blockJam3DLogo,
        url: "/playableAds/BlockJam3D_PlayZone_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Cash Giraffe",
        playableName: "Hole.IO",
        icon: holeIOLogo,
        url: "/playableAds/HoleIO_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Grand Hotel Mania",
        playableName: "Prepare Street Food",
        icon: grandHotelManiaLogo,
        url: "/playableAds/PBStreetFood_GrandHotelMania_MyGames_DogukanKaanBozkurt.html",
        isHighlighted: true,
    },
    {
        appName:"Just Games",
        playableName: "Mahjong With GameIcons",
        icon: mahjongLogo,
        url: "/playableAds/MahjongCarousel_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Just Games",
        playableName: "Mahjong Original",
        icon: mahjongLogo,
        url: "/playableAds/MahjongOriginal_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Just Games",
        playableName: "Reigns",
        icon: reignsLogo,
        url: "/playableAds/StoryTeller_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Game Perks",
        playableName: "Coffee Pack",
        icon: coffeePackLogo,
        url: "/playableAds/CoffeePack_GamePerks_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Bonus Held",
        playableName: "Mini Metro",
        icon: miniMetroLogo,
        url: "/playableAds/MiniMetro_BonusHeld_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Cash Em All",
        playableName: "Color Block Jam",
        icon: colorBlockJamLogo,
        url: "/playableAds/ColorBlockJam_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Cash Giraffe",
        playableName: "Valentines Goods Sort",
        icon: goodsSortLogo,
        url: "/playableAds/Valentines-GoodsSort_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName:"Cash Giraffe",
        playableName: "Travel Town",
        icon: travelTownLogo,
        url: "/playableAds/TravelTown_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName:"Cash Giraffe",
        playableName: "Bus Out",
        icon: busOutLogo,
        url: "/playableAds/BusOut_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Mob Control",
        playableName: "Defeat Enemy Base",
        icon: mobControlLogo,
        url: "/playableAds/MobControlUnityExport.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Goods Sort",
        icon: goodsSortLogo,
        url: "/playableAds/GoodsSorting_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Em All",
        playableName: "Fruit Merge",
        icon: fruitMergeLogo,
        url: "/playableAds/FruitMerge_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Shoot Defender",
        playableName: "Evolving Weapons",
        icon: shootDefenderLogo,
        url: "/playableAds/ShootDefender_unityads.html",
        isHighlighted: true,
    },
    {
        appName: "Game Perks",
        playableName: "MoneyBunny Base GP",
        icon: gamePerksLogo,
        url: "/playableAds/MoneyBunnyBaseGP_GamePerks_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Game Perks",
        playableName: "Gold Rush",
        icon: gamePerksLogo,
        url: "/playableAds/GoldRush_GamePerks_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    // {
    //     appName:"Cash Granny",
    //     playableName:"Kill The Snake",
    //     icon: cashGrannyLogo,
    //     url:"/playableAds/KillTheSnake_CashGranny_Responsive_Playable_01_Unity_ALL.html",
    //     isHighlighted:false,
    // },
    {
        appName: "Test Em All",
        playableName: "Wood Nut & Bolt Puzzle",
        icon: woodsNutLogo,
        url: "/playableAds/ScrewPuzzle_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Money Turn",
        playableName: "KnifeHit",
        icon: knifeHitLogo,
        url: "/playableAds/KnifeHit_MoneyTurn_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Test Em All",
        playableName: "OneLine",
        icon: oneLineDrawingLogo,
        url: "/playableAds/OneLine_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Test Em All",
        playableName: "Monopoly",
        icon: monopolyLogo,
        url: "/playableAds/Monopoly_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Cow",
        playableName: "Dice Merge",
        icon: diceMergeLogo,
        url: "/playableAds/DiceMerge_CashCow_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Turn",
        playableName: "Tap Away",
        icon: tapAwayLogo,
        url: "/playableAds/TapAway_MoneyTurn_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "AppStation",
        playableName: "Traffic Escape!",
        icon: trafficEspaceLogo,
        url: "/playableAds/TrafficEscape_Appstation_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Money Well",
        playableName: "Block Blast",
        icon: blockBlastLogo,
        url: "/playableAds/BlockBlast_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Test Em All",
        playableName: "IEC-Water Sort",
        icon: waterSortLogo,
        url: "/playableAds/IEC-WaterSort_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Test Em All",
        playableName: "Hexa Sort",
        icon: hexaSortLogo,
        url: "/playableAds/HexaSort_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Cow",
        playableName: "Feed The Cow",
        icon: cashCowLogo,
        url: "/playableAds/FeedTheCow_CashCow_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Test Em All",
        playableName: "Match Factory",
        icon: matchFactoryLogo,
        url: "/playableAds/MatchFactory_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Water Sort",
        icon: waterSortLogo,
        url: "/playableAds/WaterSort-EASY_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Test Em All",
        playableName: "Knot Words",
        icon: knowWordsLogo,
        url: "/playableAds/KnotWords_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Scratch 4 Life",
        playableName: "Memorize And Scratch",
        icon: scratch4LifeLogo,
        url: "/playableAds/MemorizeAndScratch_Scratch4Life_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "The Lucky Miner",
        playableName: "Gold Miner",
        icon: theLuckyMinerLogo,
        url: "/playableAds/GoldMiner_TheLuckyMiner_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Bunny",
        playableName: "Boss Fight",
        icon: moneyBunnyLogo,
        url: "/playableAds/BearBossFight_MoneyBunny_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Bunny",
        playableName: "Upgrade Your Bunny",
        icon: moneyBunnyLogo,
        url: "/playableAds/BaseGameplay_MoneyBunny_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Em All",
        playableName: "Parking Lot",
        icon: parkingJamLogo,
        url: "/playableAds/ParkingLot_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Game Perks",
        playableName: "Cafe Clicker",
        icon: pizzaReadyLogo,
        url: "/playableAds/CafeClicker_GamePerks_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "App Station",
        playableName: "Toon Blast",
        icon: toonBlastLogo,
        url: "/playableAds/ToonBlast_Appstation_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Well",
        playableName: "Carousel Gifs",
        icon: moneyWellLogo,
        url: "/playableAds/CarouselGifs_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Empire",
        playableName: "Shell Game",
        icon: cashEmpireLogo,
        url: "/playableAds/ShellGame_CashEmpire_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "GameXpert",
        playableName: "Chicks Revenge",
        icon: gameXpertLogo,
        url: "/playableAds/ChicksRevenge_GameXpert_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Slots",
        playableName: "Slot Machine",
        icon: moneySlotsLogo,
        url: "/playableAds/SlotMachine_MoneySlots_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cashyy",
        playableName: "Planet Drive",
        icon: cashyyLogo,
        url: "/playableAds/PlanetDrive_Cashyy_Responsive_Playable_09_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Money Well",
        playableName: "Free Fall",
        icon: moneyWellLogo,
        url: "/playableAds/FreeFall_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cashyy",
        playableName: "Three Click Chest",
        icon: cashyyLogo,
        url: "/playableAds/ThreeClickChest_Cashyy_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Alarm",
        playableName: "3D Pillow Throw",
        icon: cashAlarmLogo,
        isHighlighted: false,
        url: "/playableAds/3DPillowThrow_CashAlarm_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Carnival Clash",
        playableName: "Whack A Mole",
        icon: carnivalClashLogo,
        url: "/playableAds/BaseWhackAMole_CarnivalClash_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Match3",
        icon: cashGiraffeLogo,
        url: "/playableAds/Match3_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Rabbits VS Monsters",
        playableName: "Kill The Monsters",
        icon: rabbitsVSMonsterLogo,
        url: "/playableAds/BaseGameplay_RvM_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Raid Rush",
        playableName: "Re-Claim America",
        icon: raidRushLogo,
        url: "/playableAds/ReClaimAmerica_DefenseLand_PLY_11.html",
        isHighlighted: false,
    },
    {
        appName: "Raid Rush",
        playableName: "Drag And Place Towers",
        icon: raidRushLogo,
        url: "/playableAds/DragAndPlaceTowers_DefenseLand_PLY_09.html",
        isHighlighted: true,
    },
    {
        appName: "Gin Rummy",
        playableName: "Draw And Sort",
        icon: ginRummyLogo,
        url: "/playableAds/DrawAndSort_GinnRummy_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "Raid Rush",
        playableName: "FPS Tower Shooter",
        icon: raidRushLogo,
        url: "/playableAds/FPSTowerShooter_DefenseLand_PLY_08.html",
        isHighlighted: false,
    },
    {
        appName: "Be My Guest",
        playableName: "AirBnb Idle",
        icon: beMyGuestLogo,
        url: "/playableAds/AirbnbIdle_BeMyGuest_PLY_07.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Seat Jam",
        icon: airportMasterLogo,
        url: "/playableAds/SeatJam_AirportMaster_PLY_14.html",
        isHighlighted: true,
    },
    {
        appName: "Raid Rush",
        playableName: "Cross Camera",
        icon: raidRushLogo,
        url: "/playableAds/CrossCamera_DefenseLand_PLY_05.html",
        isHighlighted: false,
    },
    {
        appName: "Fashion Famous",
        playableName: "Get Ready For Podium",
        icon: fashionFamousLogo,
        url: "/playableAds/GetReadyForPodium_FashionFamous_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Raid Rush",
        playableName: "Rushing Enemies",
        icon: raidRushLogo,
        url: "/playableAds/RushingEnemies_DefenseLand_PLY_04.html",
        isHighlighted: false,
    },
    {
        appName: "Raid Rush",
        playableName: "Shoot Bombs",
        icon: raidRushLogo,
        url: "/playableAds/ShootBombs_DefenseLand_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Be My Guest",
        playableName: "Place House Items",
        icon: beMyGuestLogo,
        url: "/playableAds/PlaceHouseItems_BeMyGuest_PLY_05.html",
        isHighlighted: false,
    },
    {
        appName: "Model Agency",
        playableName: "Hire Model",
        icon: modelAgencyLogo,
        url: "/playableAds/HireModel_ModelAgent_PLY_03.html",
        isHighlighted: true,
    },
    {
        appName: "Raid Rush",
        playableName: "Call Enemy Waves",
        icon: raidRushLogo,
        url: "/playableAds/CallEnemyWaves_DefenseLand_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "Be My Guest",
        playableName: "Clean The House",
        icon: beMyGuestLogo,
        url: "/playableAds/CleanTheHouse_BeMyGuest_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Fashion Famous",
        playableName: "Pick Costumes On Podium",
        icon: fashionFamousLogo,
        url: "/playableAds/PickCostumesOnPodium_FashionFamous_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Be My Guest",
        playableName: "Order From Amazon",
        icon: beMyGuestLogo,
        url: "/playableAds/OrderFromAmazon_BeMyGuest_PLY_02.html",
        isHighlighted: true,
    },
    {
        appName: "Sling Plane",
        playableName: "Flight In City",
        icon: slingPlaneLogo,
        url: "/playableAds/FlightInCity_SlingPlane_PLY_07.html",
        isHighlighted: false,
    },
    {
        appName: "Model Agency",
        playableName: "Create Your Top Model",
        icon: modelAgencyLogo,
        url: "/playableAds/CreateYourTopModel_ModelAgent_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Passport Check In Island",
        icon: airportMasterLogo,
        url: "/playableAds/PassportCheckInIslandAirport_AirportMaster_PLY_13.html",
        isHighlighted: false,
    },
    {
        appName: "My Chocolate Shop",
        playableName: "Cacao Factory",
        icon: myChocolateShopLogo,
        url: "/playableAds/CacaoFactory_CacaoMaster_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Scan Billie",
        icon: airportMasterLogo,
        url: "/playableAds/ScanBillie_AirportMaster_PLY_07.html",
        isHighlighted: true,
    },
    {
        appName: "Airport Master",
        playableName: "Manage And Clean",
        icon: airportMasterLogo,
        url: "/playableAds/ManageAndClean_AirportMaster_PLY_06.html",
        isHighlighted: true,
    },
    {
        appName: "Valet Master",
        playableName: "Manage Park Steps",
        icon: valetMasterLogo,
        url: "/playableAds/ManageParkSteps_ValetMaster_PLY_06.html",
        isHighlighted: false,
    },
    {
        appName: "Model Agency",
        playableName: "Concept Gala",
        icon: modelAgencyLogo,
        url: "/playableAds/ConceptGALA_ModelAgent_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Select Destination",
        icon: airportMasterLogo,
        url: "/playableAds/SelectDestination_AirportMaster_PLY_10.html",
        isHighlighted: false,
    },
    {
        appName: "100 Mystery Buttons",
        playableName: "Water Prank",
        icon: hundredMysteryButtonsLogo,
        url: "/playableAds/WaterPrank_HundredMysteryButtons_PLY_02.html",
        isHighlighted: true,
    },
    {
        appName: "Airport Master",
        playableName: "Airport Island",
        icon: airportMasterLogo,
        url: "/playableAds/AirportIsland_AirportMaster_PLY_05.html",
        isHighlighted: true,
    },
    {
        appName: "Airport Master",
        playableName: "Place Passengers",
        icon: airportMasterLogo,
        url: "/playableAds/PlacePassengers_AirportMaster_PLY_04.html",
        isHighlighted: false,
    },
    {
        appName: "Destroy Master",
        playableName: "Destroy The Avocado",
        icon: destroyMasterLogo,
        url: "/playableAds/KillTheAvacado_DestroyMaster_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Guess And Hit",
        playableName: "Guess The Country",
        icon: guessAndHitLogo,
        url: "/playableAds/GuessTheCountry_GuessAndHit_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Carry Baggages",
        icon: airportMasterLogo,
        url: "/playableAds/CarryBaggage_AirportMaster_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Bounce And Pop",
        playableName: "Hardest Level Ever",
        icon: bounceAndPopLogo,
        url: "/playableAds/PopBalloons_BounceAndPop_PLY_06.html",
        isHighlighted: false,
    },
    {
        appName: "Airport Master",
        playableName: "Passport Please",
        icon: airportMasterLogo,
        url: "/playableAds/PassportPlease_AirportMaster_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Valet Master",
        playableName: "Cross Park",
        icon: valetMasterLogo,
        url: "/playableAds/CrossPark_ValetMaster_PLY_05.html",
        isHighlighted: true,
    },
    {
        appName: "Airport Master",
        playableName: "Airport Manager",
        icon: airportMasterLogo,
        url: "/playableAds/AirportManager_AirportMaster_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Clay Shop",
        playableName: "Customize Your Monster",
        icon: clayShopLogo,
        url: "/playableAds/CustimizeYourMonster_ClayShop_3D_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Valet Master",
        playableName: "Repair The Car",
        icon: valetMasterLogo,
        url: "/playableAds/RepairTheCar_ValetMaster_PLY_04.html",
        isHighlighted: false,
    },
    {
        appName: "Bounce And Pop",
        playableName: "Easy to Pop",
        icon: bounceAndPopLogo,
        url: "/playableAds/PopBalloons_BounceAndPop_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "W Challenge",
        playableName: "Guess The Word",
        icon: wChallengeLogo,
        url: "/playableAds/Drink_Worle_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Roll Merge 3D",
        playableName: "Throw And Merge",
        icon: rollMerge3DLogo,
        url: "/playableAds/ThrowAndMerge_RollMerge_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "Valet Master",
        playableName: "Drive The Van",
        icon: valetMasterLogo,
        url: "/playableAds/DriveTheVan_ValetMaster_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Sling Plane",
        playableName: "Crush Control",
        icon: slingPlaneLogo,
        url: "/playableAds/CrushControl_SlingPlane_PLY_05.html",
        isHighlighted: true,
    },
    {
        appName: "Muscle Land",
        playableName: "Calories And Energies",
        icon: muscleLandLogo,
        url: "/playableAds/CaloriesAndEnergies_MuscleLand_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Ball Brawl 3D",
        playableName: "World Cup Final",
        icon: ballBrawl3DLogo,
        url: "/playableAds/3vs3WorldCup_BallBrawl3D_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Home Restoration",
        playableName: "Clear and Paint",
        icon: homeRestorationLogo,
        url: "/playableAds/ClearAndPaintFloor_HomeRestoration_PLY_03.html",
        isHighlighted: true,
    },
    {
        appName: "Trading Master 3D",
        playableName: "IPhone Scam",
        icon: tradingMaster3DLogo,
        url: "/playableAds/iPhoneScam_TradingMaster_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "Mobu 2",
        playableName: "Pirate Mobu",
        icon: mobu2Logo,
        url: "/playableAds/Pirate_Mobu2_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Goal Party",
        playableName: "FranceVSArgentina",
        icon: goalPartyLogo,
        url: "/playableAds/FranceVSArgentinaPenaly_GoalParty_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Valet Master",
        playableName: "Park Manager",
        icon: valetMasterLogo,
        url: "/playableAds/ParkManager_ValetMaster_PLY_02.html",
        isHighlighted: false,
    },
    {
        appName: "Goal Party",
        playableName: "Penalties",
        icon: goalPartyLogo,
        url: "/playableAds/Penalty_GoalParty_PLY_01.html",
        isHighlighted: true,
    },
    {
        appName: "Sling Plane",
        playableName: "Land On Airport",
        icon: slingPlaneLogo,
        url: "/playableAds/LandOnAirport_SlingPlane_PLY_04.html",
        isHighlighted: false,
    },
    {
        appName: "100 Mystery Buttons",
        playableName: "Box Prank - Roblox",
        icon: hundredMysteryButtonsLogo,
        url: "/playableAds/RobloxLikePrank_HundredMysteryButtons_PLY_03.html",
        isHighlighted: false,
    },
    {
        appName: "Muscle Land",
        playableName: "Tap To Grow",
        icon: muscleLandLogo,
        url: "/playableAds/TapToGrow_MuscleLand_PLY_01.html",
        isHighlighted: false,
    },
    {
        appName: "Sling Plane",
        playableName: "Throw And Tunnel Ride",
        icon: slingPlaneLogo,
        url: "/playableAds/ThrowAndTunnelRideUpgraded_SlingPlane_PLY_03.html",
        isHighlighted: false,
    },
] as const;