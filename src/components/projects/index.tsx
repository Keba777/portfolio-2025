import ProjectCard from "./ProjectCard";
import cartify from "../../../public/images/projects/cartify.png";
import byteblog from "../../../public/images/projects/byteblog.png";
import gamehub from "../../../public/images/projects/gamehub.png";

const Projects = () => {
  return (
    <section className="p-20">
      <h2 className="text-primary text-center text-5xl font-bold mb-10">
        Projects
      </h2>
      <div className="flex flex-col items-center mb-14">
        <div className="w-[3px] h-10 bg-accent mb-2"></div>
        <div className="w-[6px] h-[6px] rounded bg-accent"></div>
      </div>

      <ProjectCard
        title="Cartify"
        description="A modern and user-friendly e-commerce platform designed to provide seamless online shopping experiences. Features include product browsing, cart management, secure checkout, and real-time order tracking."
        src={cartify}
        stacks={["Next.js", "Tailwind CSS", "Golang", "PostgreSQL"]}
        links={{
          github: "https://github.com/Keba777/Cartify",
          live: "https://cartify-livid.vercel.app/",
        }}
      />

      <ProjectCard
        title="ByteBlog"
        description="A lightweight and intuitive blogging platform built for developers and writers. Features include markdown support, user authentication, and SEO-friendly content management."
        src={byteblog}
        stacks={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
        links={{
          github: "https://github.com/Keba777/byte-blog",
          live: "https://byte-blog-delta.vercel.app/",
        }}
        reverse={true}
      />

      <ProjectCard
        title="GameHub"
        description="A gaming discovery platform that helps users explore, review, and track their favorite games. Features include curated game lists, real-time updates, and personalized recommendations."
        src={gamehub}
        stacks={["React", "TypeScript", "Chakira Ui", "RAWG API"]}
        links={{
          github: "https://github.com/Keba777/game-hub",
          live: "https://game-hub-self-phi.vercel.app/",
        }}
      />
    </section>
  );
};

export default Projects;
