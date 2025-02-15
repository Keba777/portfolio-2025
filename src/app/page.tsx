import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
