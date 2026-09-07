import type { StaticImageData } from "next/image";

import hundredMysteryButtonsLogo from "@/public/AppIcons/100 Mystery Buttons.png";
import airportMasterLogo from "@/public/AppIcons/Airport Master.png";
import ballBrawl3DLogo from "@/public/AppIcons/Ball Brawl 3D - Soccer Cup.png";
import beMyGuestLogo from "@/public/AppIcons/Be My Guest.png";
import bounceAndPopLogo from "@/public/AppIcons/Bounce And Pop.png";
import carnivalClashLogo from "@/public/AppIcons/Carnival Clash.png";
import cashAlarmLogo from "@/public/AppIcons/Cash Alarm.png";
import cashCowLogo from "@/public/AppIcons/Cash Cow.png";
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
import theLuckyMinerLogo from "@/public/AppIcons/The Lucky Miner.png";
import tradingMaster3DLogo from "@/public/AppIcons/Trading Master 3D.png";
import valetMasterLogo from "@/public/AppIcons/Valet Master.png";
import wChallengeLogo from "@/public/AppIcons/W Challenge.png";
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
import ballBlastLogo from '@/public/AppIcons/BallBlast.png';
import googleColorTilesLogo from '@/public/AppIcons/colorTilesLogo.png';
import findTheCatLogo from "@/public/AppIcons/FindTheCat.png";
import artBlockPuzzleLogo from "@/public/AppIcons/ArtBlockPuzzleLogo.png";
import findTheCat2Logo from "@/public/AppIcons/FindTheCat2Logo.png";
import findEmAllLogo from "@/public/AppIcons/FindEmAllLogo.png";
import catLogicPuzzleIcon from "@/public/AppIcons/CLP_Icon.png";
import wordTilesIcon from "@/public/AppIcons/WT_Icon.png";
import mathLogicPuzzleIcon from "@/public/AppIcons/mathLogicPuzzleIcon.png";
import hiddenMatchIcon from "@/public/AppIcons/hiddenMatchIcon.png";

export type PlayableAdItem = {
    appName: string;
    playableName: string;
    icon: StaticImageData;
    url: string;
    isHighlighted: boolean;
};

export const playableAdsData: PlayableAdItem[] = [
    {
        appName: "Find Em All",
        playableName: "Search It Multiple Collections",
        icon: findEmAllLogo,
        url: "/playableAds/SearchItMultipleCollection_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find Em All",
        playableName: "Find Multiple Same Objects",
        icon: findEmAllLogo,
        url: "/playableAds/FindMultipleSameObjects_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Hidden Match",
        playableName: "Base Gameplay- Level 44",
        icon: hiddenMatchIcon,
        url: "/playableAds/BaseGameplay-Level44_HiddenMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Math Logic Puzzle",
        playableName: "Base Gameplay",
        icon: mathLogicPuzzleIcon,
        url: "/playableAds/BaseGameplay_MathLogicPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find Em All",
        playableName: "ZoomPanCollectOnUI-Level95",
        icon: findEmAllLogo,
        url: "/playableAds/ZoomPanCollectOnUI-Level95_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find Em All",
        playableName: "BreakableOpenCenterTiles Level35",
        icon: findEmAllLogo,
        url: "/playableAds/BreakableOpenCenter52TilesLevel35_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Word Tiles",
        playableName: "Descending Square Words",
        icon: wordTilesIcon,
        url: "/playableAds/DescendingSquareWords_WordTiles_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true
    },
    {
        appName: "Word Tiles",
        playableName: "Base Gameplay 3x3 - 3 Levels",
        icon: wordTilesIcon,
        url: "/playableAds/BaseGameplay3x3-3Levels_WordTiles_Responsive_Playable_01_Unity_ALL.html", // DescendingSquareWords
        isHighlighted: true
    },
    {
        appName: "Cat Logic Puzzle",
        playableName: "Base Gameplay",
        icon: catLogicPuzzleIcon,
        url: "/playableAds/BaseGameplay_CatLogicPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cat Logic Puzzle",
        playableName: "Spotlight And No Fail",
        icon: catLogicPuzzleIcon,
        url: "/playableAds/SpotlightAndNoFail_CatLogicPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find Em All",
        playableName: "Find A Like Level101",
        icon: findEmAllLogo,
        url: "/playableAds/FindALikeLevel101_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat 2",
        playableName: "Breakable Ascending Tile Clear",
        icon: findTheCat2Logo,
        url: "/playableAds/BreakableAscendingTileClear_FindTheCat2_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Art Block Puzzle",
        playableName: "Multiple Levels",
        icon: artBlockPuzzleLogo,
        url: "/playableAds/MultipleLevels_ArtBlockPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find Em All",
        playableName: "Multiple Levels Collect On Scrollable UI",
        icon: findEmAllLogo,
        url: "/playableAds/MultipleLevelsCollectOnScrollableUI_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat 2",
        playableName: "Clap For Hard Cats",
        icon: findTheCat2Logo,
        url: "/playableAds/ClapForHardCatZoom&Pan&CollectToUI_FindTheCat2_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find Em All",
        playableName: "Multiple Category Collect",
        icon: findEmAllLogo,
        url: "/playableAds/MultipleCategoryCollectLevel35_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Art Block Puzzle",
        playableName: "Step Zoom Out",
        icon: artBlockPuzzleLogo,
        url: "/playableAds/StepZoomOut_ArtBlockPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    // {
    //     appName: "Find The Cat",
    //     playableName: "MultiLevel",
    //     icon: findTheCatLogo,
    //     url: "/playableAds/MultiLevel_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
    //     isHighlighted: false,
    // },
    {
        appName: "Find Em All",
        playableName: "AscendingTileClear - Lvl 11",
        icon: findEmAllLogo,
        url: "/playableAds/AscendingTileClearLevel11_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    // {
    //     appName: "Find The Cat",
    //     playableName: "ScrollableCollectOnUI",
    //     icon: findTheCatLogo,
    //     url: "/playableAds/ScrollableCollectOnUI_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
    //     isHighlighted: true,
    // },
    {
        appName: "Find The Cat",
        playableName: "StaticCollectOnUI",
        icon: findTheCatLogo,
        url: "/playableAds/StaticCollectOnUI_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Art Block Puzzle",
        playableName: "Pyramid",
        icon: artBlockPuzzleLogo,
        url: "/playableAds/Pyramid_ArtBlockPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat",
        playableName: "Newspaper - Water Paint",
        icon: findTheCatLogo,
        url: "/playableAds/WaterPaint_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Soda Match",
        playableName: "Cocktails - Carousel Scroll",
        icon: sodaSortLogo,
        url: "/playableAds/Cocktails-CarouselScroll_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Soda Match",
        playableName: "Cocktails - Horizontal Scroll",
        icon: sodaSortLogo,
        url: "/playableAds/Cocktails-HorizontalScroll_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Soda Match",
        playableName: "Cocktails - 3 Renewable",
        icon: sodaSortLogo,
        url: "/playableAds/Cocktails-3Renewable_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Soda Match",
        playableName: "Cocktails - 1 Renewable",
        icon: sodaSortLogo,
        url: "/playableAds/Cocktails-1Renewable_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Soda Match",
        playableName: "Cocktails - 3 Static",
        icon: sodaSortLogo,
        url: "/playableAds/Cocktails-3Static_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Soda Match",
        playableName: "Branch Bottle",
        icon: sodaSortLogo,
        url: "/playableAds/BranchBottle_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Soda Match",
        playableName: "Long Strawberry Bottle",
        icon: sodaSortLogo,
        url: "/playableAds/LongStrawberryBottle_SodaMatch_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat",
        playableName: "Zoom& Pan - WhaleLevel",
        icon: findTheCat2Logo,
        url: "/playableAds/Zoom&PanWhaleLevel_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find The Cat 2",
        playableName: "Zoom& Pan& Collect To UI",
        icon: findTheCat2Logo,
        url: "/playableAds/Zoom&Pan&CollectToUI_FindTheCat2_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find Em All",
        playableName: "Collect Scroll Area - Lvl 26",
        icon: findEmAllLogo,
        url: "/playableAds/CollectOnScrollAreaLevel26_FindEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat",
        playableName: "Base Game Play-Level 622",
        icon: findTheCatLogo,
        url: "/playableAds/BaseGamePlay-Level622_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat 2",
        playableName: "Collect On Score UI",
        icon: findTheCat2Logo,
        url: "/playableAds/CollectOnScoreUI_FindTheCat2_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Art Block Puzzle",
        playableName: "Flip Card",
        icon: artBlockPuzzleLogo,
        url: "/playableAds/FlipCard_ArtBlockPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Find The Cat",
        playableName: "Find The Selected Animal",
        icon: findTheCatLogo,
        url: "/playableAds/FindTheSelectedAnimal_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat",
        playableName: "CountAndPickAnswer",
        icon: findTheCatLogo,
        url: "/playableAds/CountAndPickAnswer_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Art Block Puzzle",
        playableName: "Puzzle",
        icon: artBlockPuzzleLogo,
        url: "/playableAds/Puzzle_ArtBlockPuzzle_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Find The Cat",
        playableName: "Survey",
        icon: findTheCatLogo,
        url: "/playableAds/Survey_FindTheCat_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Google - Color Tiles",
        icon: googleColorTilesLogo,
        url: "/playableAds/ColorTiles_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Ball Blast",
        icon: ballBlastLogo,
        url: "/playableAds/BallBlast_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Clash",
        playableName: "Ninja Jump",
        icon: ninjaJumpLogo,
        url: "/playableAds/NinjaJump_CashClash_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Soda Sort",
        playableName: "Agave Games",
        icon: sodaSortLogo,
        url: "/playableAds/SodaSort_AgaveGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Money Well",
        playableName: "Bundes Bank",
        icon: bundesBankLogo,
        url: "/playableAds/BundesBank_MoneyWell_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Giraffe",
        playableName: "2 The Moon",
        icon: toTheMoonLogo,
        url: "/playableAds/ToTheMoon_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Play Zone",
        playableName: "Block Jam 3D: Color Puzzle",
        icon: blockJam3DLogo,
        url: "/playableAds/BlockJam3D_PlayZone_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Hole.IO",
        icon: holeIOLogo,
        url: "/playableAds/HoleIO_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Grand Hotel Mania",
        playableName: "Prepare Street Food",
        icon: grandHotelManiaLogo,
        url: "/playableAds/PBStreetFood_GrandHotelMania_MyGames_DogukanKaanBozkurt.html",
        isHighlighted: true,
    },
    {
        appName: "Just Games",
        playableName: "Mahjong With GameIcons",
        icon: mahjongLogo,
        url: "/playableAds/MahjongCarousel_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Just Games",
        playableName: "Mahjong Original",
        icon: mahjongLogo,
        url: "/playableAds/MahjongOriginal_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Just Games",
        playableName: "Reigns",
        icon: reignsLogo,
        url: "/playableAds/StoryTeller_JustGames_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Game Perks",
        playableName: "Coffee Pack",
        icon: coffeePackLogo,
        url: "/playableAds/CoffeePack_GamePerks_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Bonus Held",
        playableName: "Mini Metro",
        icon: miniMetroLogo,
        url: "/playableAds/MiniMetro_BonusHeld_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Em All",
        playableName: "Color Block Jam",
        icon: colorBlockJamLogo,
        url: "/playableAds/ColorBlockJam_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Valentines Goods Sort",
        icon: goodsSortLogo,
        url: "/playableAds/Valentines-GoodsSort_CashEmAll_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: false,
    },
    {
        appName: "Cash Giraffe",
        playableName: "Travel Town",
        icon: travelTownLogo,
        url: "/playableAds/TravelTown_CashGiraffe_Responsive_Playable_01_Unity_ALL.html",
        isHighlighted: true,
    },
    {
        appName: "Cash Giraffe",
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
];