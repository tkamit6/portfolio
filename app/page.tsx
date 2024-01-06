import Experience from "@/components/experience";
import About from "../components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import MyPerformance from "@/components/MyPerformance";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
      <SectionDevider />
      <Skills />
      <SectionDevider />
      <Experience />
      <Contact />
      <SectionDevider />
      <MyPerformance />
    </main>
  )
}
