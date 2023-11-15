import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <Spacer />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
