import React from "react";

interface Props {
  stat: string;
  description1: string;
  description2: string;
}

const AboutCard = ({ stat, description1, description2 }: Props) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-[28px] md:text-4xl text-primary font-semibold">
        {stat} <span className="text-accent">+</span>
      </h3>
      <p className="text-lightGray mt-2 inline-block text-sm md:text-[16px]">
        {description1}
      </p>
      <p className="text-lightGray text-sm md:text-[16px]">{description2}</p>
    </div>
  );
};

export default AboutCard;
