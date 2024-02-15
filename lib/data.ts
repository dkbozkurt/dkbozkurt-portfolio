
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { VscOrganization } from "react-icons/vsc";

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
    title: "Playable Ads Developer",
    company: "JustDice",
    location: "Hamburg, Germany",
    description: "Developing playable ads for apps and mobile games using Unity, LunaLabs, and C#. Developing automation tools/ extensions for Unity using C#. Developing plugins for Adobe Apps. using ExtendScript, JavaScript, HTML, CSS and UXP. Designing 3D& 2D assets for marketing campaigns by using Blender, Spline and Figma.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr. 2023 - Present",
  },
  {
    title: "Playable Ads & Marketing Game Developer",
    company: "Panteon Games",
    location: "Ankara, Turkey",
    description:
      "Developing and designing playable ads using Unity, LunaLabs, and C#. Enhancing game play, integrating new mechanics/features, and applying creative elements to maximize game attractiveness for advertising. Developing extensions/ packages for playable ads development in Unity using C#.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov. 2021 - Apr. 2023",
  },
  {
    title: "Technical Customer Support Specialist",
    company: "Ekmob SFA",
    location: "Istanbul, Turkey",
    description:
      "Addressing customer-reported problems and resolving software bugs. Communicating technical aspects of our software apps and to customers.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep. 2021 - Oct. 2021",
  },
  {
    title: "Project Engineer - Intern",
    company: "TUPRAS",
    location: "Kocaeli, Turkey",
    description:
      "Led 'susTRAINable' project at TUPRAS, targeting net-zero railway emissions by 2050, aligning with 6 UN Sustainable Development Goals. Moreover, 'TogetHER' project focused on improving women's lives in the refinery and energy sectors, including mentorship programs for STEM-inclined women.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2021 - Sep. 2021",
  },
  {
    title: "Game Developer",
    company: "GEFEASOFT",
    location: "Mugla, Turkey",
    description:
      "Developed WebGL & Mobile based serious games and VR-based Anatomy Atlas in the healthcare industry by using Unity and C#.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar. 2021 - Jun. 2021",
  },
  {
    title: "Software Engineer - Intern",
    company: "Avocuda",
    location: "Istanbul, Turkey",
    description:
      "Contributed to mobile application development in the development team, utilizing React-Native and Adobe XD.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2020 - Jun. 2020",
  },
  {
    title: "Electrical Design Engineer - Intern",
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
    title: "Playable Ads.& Game Projects",
    date: "",
    description:
      "A collection of Playable Ads. and games that I have designed and developed throughout my career.",
    tags: [ "C#", "Unity", "LunaLabs", "JavaScript", "ThreeJS", "CannonJS" ],
  },
  {
    title: "Chrome Extension- Waffle Flash Cards",
    date: "Jan. 2024 - Present",
    description:
      "Developed a Google Chrome extension focused on English-German flashcards, aimed at enhancing vocabulary skills.",
    tags: [ "React", "TypeScript", "Tailwind", "HTML", "CSS" ],
  },
  {
    title:"Adobe PhotoShop Design Tool",
    date: "Jul. 2023 - Dec. 2023",
    description:"Developed a Adobe PhotoShop extension focused on generating static store screens, network end cards and marketing purposed resources.",
    tags:["ExtendScript","JavaScript","CSS","HTML","UXP"]
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
    tags: ["Python", "NumPy", "PyTorch","pandas","SciPy","OpenGL"],
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
    "C#",
    "JavaScript",
    "TypeScript",
    "Unity",
    "LunaLabs",
    "Python",
    "C++",
    "HTML",
    "CSS",
    "React",
    "Tailwind",
    "ThreeJS",
    "Node.js",
    "Express",
    "Next.js",
    "Git",
    "npm",
    "Linux",
    "Jest",
    "CannonJS",
    "ExtendScript",
    "Framer Motion",
    "UXP",
    "Blender",
    "Spline",
    "Figma",
    "Adobe PhotoShop",
    "Adobe Illustrator",
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
        title: "Software Engineer",
        company: "Pink Waffle",
        location: "Hamburg, Germany",
        description: "",
        icon: React.createElement(VscOrganization),
        date: "Jan. 2024 - Present",
    },
    {
        title: "Co-Founder & Administrative Assistant",
        company: "Eskisehir Korean Culture Academy",
        location: "Eskisehir, Turkey",
        description: "Engaged in founding, overseeing, and managing academy operations, including event coordination, planning, and teaching introductory A1-level Korean to beginners.",
        icon: React.createElement(VscOrganization),
        date: "Jun. 2019 - Nov. 2021",
    },
    {
        title: "IGET-IT Member",
        company: "AIESEC Turkey",
        location: "Eskisehir, Turkey",
        description: "Provided mentorship and translation services to foreign talents and entrepreneurs in Turkey, aiding in navigating permit procedures and resolving associated challenges.",
        icon: React.createElement(VscOrganization),
        date: "Oct. 2017 - Jun. 2018",
    },
] as const;

export const certificatesData =[
    {
        title:"Back-End Apps with Node.js and Express",
        company:"IBM",
        date:"Dec. 2023",
        tags:["JavaScript", "Node.js", "Express"],
        imageUrl:ibmCertificate,
    },
    {
        title:"Professional Meta Front-End Developer Certificate",
        company:"META",
        date:"Nov. 2023",
        tags:["React","JavaScript","Bootstrap","HTML","CSS","npm","Jest","Figma","Sass"],
        imageUrl:metaCertificate,
    },
    {
        title:"3D Web Game Development With Three.JS",
        company:"Udemy",
        date:"Sep. 2023",
        tags:["JavaScript","ThreeJs","CannonJS"],
        imageUrl:udemyCertificate,
    },
    {
        title:"JavaScript Algorithms and Data Structures",
        company:"freeCodeCamp",
        date:"Jul. 2023",
        tags:["Javascript"],
        imageUrl:freeCodeCampCertificate,
    },
    {
        title:"Intermediate Object-Oriented Programming for Unity",
        company:"University of Colorado",
        date:"May 2021",
        tags:["C#","Unity"],
        imageUrl:coloradoCertificate,
    },
    {
        title:"Game Design and Development",
        company:"Michigan State University",
        date:"Mar. 2021",
        tags:["C#","Unity"],
        imageUrl:michiganCertificate,
    },
]

export const playableAdsData = [
    {
        appName: "Test Em All",
        playableName: "IEC-Water Sort",
        icon: testEmAllLogo,
        url:"/playableAds/IEC-WaterSort_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Test Em All",
        playableName: "Hexa Sort",
        icon: testEmAllLogo,
        url:"/playableAds/HexaSort_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Cow",
        playableName: "Feed The Cow",
        icon: cashCowLogo,
        url:"/playableAds/FeedTheCow_CashCow_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Test Em All",
        playableName: "Match Factory",
        icon: testEmAllLogo,
        url:"/playableAds/MatchFactory_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Giraffe",
        playableName: "Water Sort",
        icon: cashGiraffeLogo,
        url:"/playableAds/WaterSort-EASY_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Test Em All",
        playableName: "Knot Words",
        icon: testEmAllLogo,
        url:"/playableAds/KnotWords_TestEmAll_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Scratch 4 Life",
        playableName: "Memorize And Scratch",
        icon: scratch4LifeLogo,
        url:"/playableAds/MemorizeAndScratch_Scratch4Life_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "The Lucky Miner",
        playableName: "Gold Miner",
        icon: theLuckyMinerLogo,
        url:"/playableAds/GoldMiner_TheLuckyMiner_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Money Bunny",
        playableName: "Boss Fight",
        icon: moneyBunnyLogo,
        url:"/playableAds/BearBossFight_MoneyBunny_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Money Bunny",
        playableName: "Upgrade Your Bunny",
        icon: moneyBunnyLogo,
        url:"/playableAds/BaseGameplay_MoneyBunny_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Em All",
        playableName: "Parking Lot",
        icon: cashEmAllLogo,
        url:"/playableAds/ParkingLot_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Game Perks",
        playableName: "Cafe Clicker",
        icon: gamePerksLogo,
        url:"/playableAds/CafeClicker_GamePerks_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "App Station",
        playableName: "Toon Blast",
        icon: appStationLogo,
        url:"/playableAds/ToonBlast_Appstation_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Money Well",
        playableName: "Carousel Gifs",
        icon: moneyWellLogo,
        url:"/playableAds/CarouselGifs_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Empire",
        playableName: "Shell Game",
        icon: cashEmpireLogo,
        url:"/playableAds/ShellGame_CashEmpire_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "GameXpert",
        playableName: "Chicks Revenge",
        icon: gameXpertLogo,
        url:"/playableAds/ChicksRevenge_GameXpert_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Money Slots",
        playableName: "Slot Machine",
        icon: moneySlotsLogo,
        url:"/playableAds/SlotMachine_MoneySlots_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cashyy",
        playableName: "Planet Drive",
        icon: cashyyLogo,
        url:"/playableAds/PlanetDrive_Cashyy_Responsive_Playable_09_Unity_ALL.html",
    },
    {
        appName: "Money Well",
        playableName: "Free Fall",
        icon: moneyWellLogo,
        url:"/playableAds/FreeFall_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cashyy",
        playableName: "Three Click Chest",
        icon: cashyyLogo,
        url:"/playableAds/ThreeClickChest_Cashyy_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Alarm",
        playableName: "3D Pillow Throw",
        icon: cashAlarmLogo,
        url:"/playableAds/3DPillowThrow_CashAlarm_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Carnival Clash",
        playableName: "Whack A Mole",
        icon: carnivalClashLogo,
        url:"/playableAds/BaseWhackAMole_CarnivalClash_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Cash Giraffe",
        playableName: "Match3",
        icon: cashGiraffeLogo,
        url:"/playableAds/Match3_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Rabbits VS Monsters",
        playableName: "Kill The Monsters",
        icon: rabbitsVSMonsterLogo,
        url:"/playableAds/BaseGameplay_RvM_Responsive_Playable_01_Unity_ALL.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Re-Claim America",
        icon: raidRushLogo,
        url:"/playableAds/ReClaimAmerica_DefenseLand_PLY_11.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Drag And Place Towers",
        icon: raidRushLogo,
        url:"/playableAds/DragAndPlaceTowers_DefenseLand_PLY_09.html",
    },
    
    {
        appName: "Gin Rummy",
        playableName: "Draw And Sort",
        icon: ginRummyLogo,
        url:"/playableAds/DrawAndSort_GinnRummy_PLY_01.html",
    },
    {
        appName: "Raid Rush",
        playableName: "FPS Tower Shooter",
        icon: raidRushLogo,
        url:"/playableAds/FPSTowerShooter_DefenseLand_PLY_08.html",
    },
    {
        appName: "Be My Guest",
        playableName: "AirBnb Idle",
        icon: beMyGuestLogo,
        url:"/playableAds/AirbnbIdle_BeMyGuest_PLY_07.html",
    },
    {
        appName: "Airport Master",
        playableName: "Seat Jam",
        icon: airportMasterLogo,
        url:"/playableAds/SeatJam_AirportMaster_PLY_14.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Cross Camera",
        icon: raidRushLogo,
        url:"/playableAds/CrossCamera_DefenseLand_PLY_05.html",
    },
    {
        appName: "Fashion Famous",
        playableName: "Get Ready For Podium",
        icon: fashionFamousLogo,
        url:"/playableAds/GetReadyForPodium_FashionFamous_PLY_01.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Rushing Enemies",
        icon: raidRushLogo,
        url:"/playableAds/RushingEnemies_DefenseLand_PLY_04.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Shoot Bombs",
        icon: raidRushLogo,
        url:"/playableAds/ShootBombs_DefenseLand_PLY_02.html",
    },
    {
        appName: "Be My Guest",
        playableName: "Place House Items",
        icon: beMyGuestLogo,
        url:"/playableAds/PlaceHouseItems_BeMyGuest_PLY_05.html",
    },
    {
        appName: "Model Agency",
        playableName: "Hire Model",
        icon: modelAgencyLogo,
        url:"/playableAds/HireModel_ModelAgent_PLY_03.html",
    },
    {
        appName: "Raid Rush",
        playableName: "Call Enemy Waves",
        icon: raidRushLogo,
        url:"/playableAds/CallEnemyWaves_DefenseLand_PLY_01.html",
    },
    {
        appName: "Be My Guest",
        playableName: "Clean The House",
        icon: beMyGuestLogo,
        url:"/playableAds/CleanTheHouse_BeMyGuest_PLY_03.html",
    },
    {
        appName: "Fashion Famous",
        playableName: "Pick Costumes On Podium",
        icon: fashionFamousLogo,
        url:"/playableAds/PickCostumesOnPodium_FashionFamous_PLY_03.html",
    },
    {
        appName: "Be My Guest",
        playableName: "Order From Amazon",
        icon: beMyGuestLogo,
        url:"/playableAds/OrderFromAmazon_BeMyGuest_PLY_02.html",
    },
    {
        appName: "Sling Plane",
        playableName: "Flight In City",
        icon: slingPlaneLogo,
        url:"/playableAds/FlightInCity_SlingPlane_PLY_07.html",
    },
    {
        appName: "Model Agency",
        playableName: "Create Your Top Model",
        icon: modelAgencyLogo,
        url:"/playableAds/CreateYourTopModel_ModelAgent_PLY_02.html",
    },
    {
        appName: "Airport Master",
        playableName: "Passport Check In Island",
        icon: airportMasterLogo,
        url:"/playableAds/PassportCheckInIslandAirport_AirportMaster_PLY_13.html",
    },
    {
        appName: "My Chocolate Shop",
        playableName: "Cacao Factory",
        icon: myChocolateShopLogo,
        url:"/playableAds/CacaoFactory_CacaoMaster_PLY_01.html",
    },
    {
        appName: "Airport Master",
        playableName: "Scan Billie",
        icon: airportMasterLogo,
        url:"/playableAds/ScanBillie_AirportMaster_PLY_07.html",
    },
    {
        appName: "Airport Master",
        playableName: "Manage And Clean",
        icon: airportMasterLogo,
        url:"/playableAds/ManageAndClean_AirportMaster_PLY_06.html",
    },
    {
        appName: "Valet Master",
        playableName: "Manage Park Steps",
        icon: valetMasterLogo,
        url:"/playableAds/ManageParkSteps_ValetMaster_PLY_06.html",
    },
    {
        appName: "Model Agency",
        playableName: "Concept Gala",
        icon: modelAgencyLogo,
        url:"/playableAds/ConceptGALA_ModelAgent_PLY_01.html",
    },
    {
        appName: "Airport Master",
        playableName: "Select Destination",
        icon: airportMasterLogo,
        url:"/playableAds/SelectDestination_AirportMaster_PLY_10.html",
    },
    {
        appName: "100 Mystery Buttons",
        playableName: "Water Prank",
        icon: hundredMysteryButtonsLogo,
        url:"/playableAds/WaterPrank_HundredMysteryButtons_PLY_02.html",
    },
    {
        appName: "Airport Master",
        playableName: "Airport Island",
        icon: airportMasterLogo,
        url:"/playableAds/AirportIsland_AirportMaster_PLY_05.html",
    },
    {
        appName: "Airport Master",
        playableName: "Place Passengers",
        icon: airportMasterLogo,
        url:"/playableAds/PlacePassengers_AirportMaster_PLY_04.html",
    },
    {
        appName: "Destroy Master",
        playableName: "Destroy The Avocado",
        icon: destroyMasterLogo,
        url:"/playableAds/KillTheAvacado_DestroyMaster_PLY_01.html",
    },
    {
        appName: "Guess And Hit",
        playableName: "Guess The Country",
        icon: guessAndHitLogo,
        url:"/playableAds/GuessTheCountry_GuessAndHit_PLY_01.html",
    },
    {
        appName: "Airport Master",
        playableName: "Carry Baggages",
        icon: airportMasterLogo,
        url:"/playableAds/CarryBaggage_AirportMaster_PLY_03.html",
    },
    {
        appName: "Bounce And Pop",
        playableName: "Hardest Level Ever",
        icon: bounceAndPopLogo,
        url:"/playableAds/PopBalloons_BounceAndPop_PLY_06.html",
    },
    {
        appName: "Airport Master",
        playableName: "Passport Please",
        icon: airportMasterLogo,
        url:"/playableAds/PassportPlease_AirportMaster_PLY_02.html",
    },
    {
        appName: "Valet Master",
        playableName: "Cross Park",
        icon: valetMasterLogo,
        url:"/playableAds/CrossPark_ValetMaster_PLY_05.html",
    },
    {
        appName: "Airport Master",
        playableName: "Airport Manager",
        icon: airportMasterLogo,
        url:"/playableAds/AirportManager_AirportMaster_PLY_01.html",
    },
    {
        appName: "Clay Shop",
        playableName: "Customize Your Monster",
        icon: clayShopLogo,
        url:"/playableAds/CustimizeYourMonster_ClayShop_3D_PLY_01.html",
    },
    {
        appName: "Valet Master",
        playableName: "Repair The Car",
        icon: valetMasterLogo,
        url:"/playableAds/RepairTheCar_ValetMaster_PLY_04.html",
    },
    {
        appName: "Bounce And Pop",
        playableName: "Easy to Pop",
        icon: bounceAndPopLogo,
        url:"/playableAds/PopBalloons_BounceAndPop_PLY_01.html",
    },
    {
        appName: "W Challenge",
        playableName: "Guess The Word",
        icon: wChallengeLogo,
        url:"/playableAds/Drink_Worle_PLY_02.html",
    },
    {
        appName: "Roll Merge 3D",
        playableName: "Throw And Merge",
        icon: rollMerge3DLogo,
        url:"/playableAds/ThrowAndMerge_RollMerge_PLY_01.html",
    },
    {
        appName: "Valet Master",
        playableName: "Drive The Van",
        icon: valetMasterLogo,
        url:"/playableAds/DriveTheVan_ValetMaster_PLY_03.html",
    },
    {
        appName: "Sling Plane",
        playableName: "Crush Control",
        icon: slingPlaneLogo,
        url:"/playableAds/CrushControl_SlingPlane_PLY_05.html",
    },
    {
        appName: "Muscle Land",
        playableName: "Calories And Energies",
        icon: muscleLandLogo,
        url:"/playableAds/CaloriesAndEnergies_MuscleLand_PLY_02.html",
    },
    {
        appName: "Ball Brawl 3D",
        playableName: "World Cup Final",
        icon: ballBrawl3DLogo,
        url:"/playableAds/3vs3WorldCup_BallBrawl3D_PLY_03.html",
    },
    {
        appName: "Home Restoration",
        playableName: "Clear and Paint",
        icon: homeRestorationLogo,
        url:"/playableAds/ClearAndPaintFloor_HomeRestoration_PLY_03.html",
    },
    {
        appName: "Trading Master 3D",
        playableName: "IPhone Scam",
        icon: tradingMaster3DLogo,
        url:"/playableAds/iPhoneScam_TradingMaster_PLY_01.html",
    },
    {
        appName: "Mobu 2",
        playableName: "Pirate Mobu",
        icon: mobu2Logo,
        url:"/playableAds/Pirate_Mobu2_PLY_02.html",
    },
    {
        appName: "Goal Party",
        playableName: "FranceVSArgentina",
        icon: goalPartyLogo,
        url:"/playableAds/FranceVSArgentinaPenaly_GoalParty_PLY_03.html",
    },
    {
        appName: "Valet Master",
        playableName: "Park Manager",
        icon: valetMasterLogo,
        url:"/playableAds/ParkManager_ValetMaster_PLY_02.html",
    },
    {
        appName: "Goal Party",
        playableName: "Penalties",
        icon: goalPartyLogo,
        url:"/playableAds/Penalty_GoalParty_PLY_01.html",
    },
    {
        appName: "Sling Plane",
        playableName: "Land On Airport",
        icon: slingPlaneLogo,
        url:"/playableAds/LandOnAirport_SlingPlane_PLY_04.html",
    },
    {
        appName: "100 Mystery Buttons",
        playableName: "Box Prank - Roblox",
        icon: hundredMysteryButtonsLogo,
        url:"/playableAds/RobloxLikePrank_HundredMysteryButtons_PLY_03.html",
    },
    {
        appName: "Muscle Land",
        playableName: "Tap To Grow",
        icon: muscleLandLogo,
        url:"/playableAds/TapToGrow_MuscleLand_PLY_01.html",
    },
    {
        appName: "Sling Plane",
        playableName: "Throw And Tunnel Ride",
        icon: slingPlaneLogo,
        url:"/playableAds/ThrowAndTunnelRideUpgraded_SlingPlane_PLY_03.html",
    },
] as const;