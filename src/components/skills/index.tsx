import { FaReact, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFastapi,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiTensorflow,
  SiTypescript,
  SiPytorch
} from "react-icons/si";
import { FaNodeJs, FaGolang, FaFlutter } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  // Frontend
  { icon: <FaReact className="w-12 h-12" />, label: "React" },
  { icon: <SiNextdotjs className="w-12 h-12" />, label: "Next.js" },
  { icon: <SiTypescript className="w-12 h-12" />, label: "TypeScript" },

   // Mobile Development
   { icon: <FaFlutter className="w-12 h-12" />, label: "Flutter" },

  // Backend
  { icon: <FaNodeJs className="w-12 h-12" />, label: "Node.js" },
  { icon: <SiExpress className="w-12 h-12" />, label: "Express.js" },
  { icon: <SiNestjs className="w-12 h-12" />, label: "Nest.js" },
  { icon: <FaGolang className="w-12 h-12" />, label: "Golang" },
  { icon: <FaPython className="w-12 h-12" />, label: "Python" },
  { icon: <SiFastapi className="w-12 h-12" />, label: "FastAPI" },

  // Databases
  { icon: <SiPostgresql className="w-12 h-12" />, label: "PostgreSQL" },
  { icon: <SiMysql className="w-12 h-12" />, label: "MySQL" },
  { icon: <SiMongodb className="w-12 h-12" />, label: "MongoDB" },

  // DevOps
  { icon: <SiDocker className="w-12 h-12" />, label: "Docker" },

  // Machine Learning / AI
  { icon: <GiArtificialIntelligence className="w-12 h-12" />, label: "AI/ML" },
  { icon: <SiTensorflow className="w-12 h-12" />, label: "TensorFlow" },
  { icon: <SiPytorch className="w-12 h-12" />, label: "Pytorch " },
];


const Skills = () => {
  return (
    <section className="px-20 pb-10 min-h-screen overflow-hidden relative flex flex-col justify-center">
      <h2 className="text-primary text-center text-5xl font-bold mb-10">
        Technical Expertise
      </h2>
      <div className="flex flex-col items-center mb-16">
        <div className="w-[3px] h-10 bg-accent mb-2"></div>
        <div className="w-[6px] h-[6px] rounded bg-accent"></div>
      </div>

      <div className="w-full overflow-hidden border border-lightGray py-10">
        <div className="flex whitespace-nowrap gap-x-8 animate-scroll">
          {skills.map(({ icon, label }, index) => (
            <span
              key={index}
              className="flex flex-col items-center mx-2 min-w-[80px] text-lightGray"
            >
              {icon}
              <p className="text-center text-sm mt-2">{label}</p>
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(50%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
