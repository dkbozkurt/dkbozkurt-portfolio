import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Languages from "@/components/languages";
import Activities from "@/components/activities";
import Certificates from "@/components/certificates";
import PlayableAds from "@/components/playableads";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <PlayableAds />
        <Projects />
        <Activities />
        <Certificates />
        <Contact />
    </main>
  )
}
