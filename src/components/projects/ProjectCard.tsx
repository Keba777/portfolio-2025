import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Badge from "./Badge";

interface Props {
  title: string;
  description: string;
  stacks: string[];
  src: StaticImageData;
  links: {
    github: string;
    live: string;
  };
  reverse?: boolean; 
}

const ProjectCard = ({ title, description, stacks, src, links, reverse = false }: Props) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-14`}>
      {reverse ? (
        <>
          {/* Image First */}
          <div className="flex justify-center items-center">
            <Image src={src} alt={`${title} project image`} />
          </div>
          {/* Description Second */}
          <div className="p-6 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-softGray mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {stacks.map((stack) => (
                <Badge key={stack} name={stack} />
              ))}
            </div>
            <p className="text-lightGray mb-10">{description}</p>
            <div className="flex space-x-8 mb-20">
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2"
              >
                View Github
              </Link>
              <Link
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[14px] text-primary border-b-2 border-accent hover:border-accentDark hover:text-lightGray flex items-center"
              >
                View Project <GoArrowUpRight className="w-5 h-5 pl-1" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Description First */}
          <div className="p-6 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-softGray mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {stacks.map((stack) => (
                <Badge key={stack} name={stack} />
              ))}
            </div>
            <p className="text-lightGray mb-10">{description}</p>
            <div className="flex space-x-8 mb-20">
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] bg-accent hover:bg-accentDark font-medium text-primary px-4 py-2"
              >
                View Github
              </Link>
              <Link
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[14px] text-primary border-b-2 border-accent hover:border-accentDark hover:text-lightGray flex items-center"
              >
                View Project <GoArrowUpRight className="w-5 h-5 pl-1" />
              </Link>
            </div>
          </div>
          {/* Image Second */}
          <div className="flex justify-center items-center">
            <Image src={src} alt={`${title} project image`} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
