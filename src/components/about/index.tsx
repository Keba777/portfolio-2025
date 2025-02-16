import AboutCard from "./AboutCard";
import webDev from "../../../public/images/about/web-development.png";
import mobileDev from "../../../public/images/about/app-development.png";
import ml from "../../../public/images/about/machine-learning.png";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section className="px-6 pt-20 md:pt-0 md:px-10 lg:px-20 md:grid md:grid-cols-2 lg:grid-cols-7 gap-8 flex flex-col-reverse">
      {/* Services Section (First on mobile, second on larger screens) */}
      <div className="md:pl-6 w-full flex flex-col justify-center items-center md:items-start lg:col-span-3 bg-secondaryBlack md:bg-transparent p-6 rounded-xl shadow-lg">
        <h2 className="md:invisible text-white text-3xl font-bold mb-6 mt-3 md:mt-0 md:mb-0 text-center relative">
          Services I Provide
          <span className="block w-16 h-1 bg-accent mx-auto mt-2 rounded-full"></span>
        </h2>
        <ServiceCard src={webDev} alt="web" name="Web Development" />
        <ServiceCard src={mobileDev} alt="mobile" name="Mobile Development" />
        <ServiceCard src={ml} alt="ml" name="AI & Machine Learning" />
      </div>

      {/* About Text (Second on mobile, first on larger screens) */}
      <div className="lg:col-span-4">
        <h2 className="text-primary text-4xl lg:text-5xl font-bold mb-6 text-center md:text-start">
          About me
        </h2>
        <p className="text-lightGray mb-8 text-center md:text-start">
          I&apos;m a Software Engineer specializing in full-stack development,
          mobile development, and AI/ML engineering. I build scalable web and
          mobile applications, optimize backend performance, and leverage AI to
          solve real-world problems.
        </p>
        <div className="flex items-center justify-center md:justify-normal space-x-12 md:space-x-16 lg:space-x-24">
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
