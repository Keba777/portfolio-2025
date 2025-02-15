import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/home/Hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
