import AboutCard from "./AboutCard";
import webDev from "../../../public/images/about/web-development.png";
import mobileDev from "../../../public/images/about/app-development.png";
import ml from "../../../public/images/about/machine-learning.png";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
      <div className="pl-6 flex flex-col justify-center items-start lg:col-span-3">
        <ServiceCard src={webDev} alt="web" name="Web Development" />
        <ServiceCard src={mobileDev} alt="mobile" name="Mobile Development" />
        <ServiceCard src={ml} alt="ml" name="AI & Machine Learning" />
      </div>

      <div className="lg:col-span-4">
        <h2 className="text-primary text-5xl font-bold mb-6">About me</h2>
        <p className="text-lightGray mb-8">
          I&apos;m a Software Engineer specializing in full-stack development, mobile
          development, and AI/ML engineering. I build scalable web and mobile
          applications, optimize backend performance, and leverage AI to solve
          real-world problems.
        </p>
        <div className="flex items-center space-x-12 md:space-x-24">
          <AboutCard
            stat="20"
            description1="Completed"
            description2="Projects"
          />
          <AboutCard stat="5" description1="Happy" description2="Clients" />
          <AboutCard
            stat="3"
            description1="Years of"
            description2="Experience"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
