import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
      <About />
    </main>
  )
}
