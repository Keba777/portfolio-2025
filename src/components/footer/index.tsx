import React from "react";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import ThreeDName from "../common/ThreeDName";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-secondaryBlack text-center py-12">
      <ThreeDName />
      <div className="flex justify-center space-x-4">
        <a
          href="mailto:kibreabaklilu@example.com"
          className="p-2 rounded-full bg-softGray hover:bg-lightGray"
        >
          <MdEmail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Keba777"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-softGray hover:bg-lightGray"
        >
          <TbBrandGithubFilled className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kibreab-aklilu-40011a256/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-softGray hover:bg-lightGray"
        >
          <LiaLinkedinIn className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
