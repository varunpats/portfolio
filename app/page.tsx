import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  )
}
