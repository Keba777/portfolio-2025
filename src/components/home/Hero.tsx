import Image from "next/image";
import Profile from "../../../public/images/profile.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[calc(100vh-5rem)] mt-20 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="text-[34px] md:text-[40px] font-bold text-primary">
          Hello<span className="text-accent">.</span>
        </h1>
        <div className="relative flex items-center my-4 md:my-7">
          <div className="relative flex items-end">
            <h2 className="text-[34px] md:text-[40px] font-medium text-primary md:pl-10">
              I&apos;m <span className="text-accent">Kibreab</span>
            </h2>
            {/* Dashed Line*/}
            <div className="absolute bottom-1 md:bottom-2 left-8 md:left-[-6rem] w-[120px] h-[2px] bg-accent" />
          </div>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-10 md:mb-24">
          Software Engineer
        </h3>
        <div className="flex space-x-4 mb-12 md:mb-20">
          <button className="bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2">
            Got a project?
          </button>
          <button className="font-medium text-primary  px-4 py-2 border-2 border-accent hover:border-accentDark hover:text-lightGray">
            My Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-start">
        <Image
          src={Profile}
          alt="profile"
          className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[430px] h-auto max-h-[70vh] object-contain 
          rounded-[200px] sm:rounded-[200px] md:rounded-[250px] lg:rounded-[300px] 
          shadow-accent shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
