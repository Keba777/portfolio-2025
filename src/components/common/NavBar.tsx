import Link from "next/link";
import React from "react";
import ThreeDName from "./ThreeDName";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 pr-24 pl-12 h-20 fixed top-0 left-0 w-full bg-background z-50">
      <div className="flex items-center">
        <Link href="/">
          <ThreeDName />
        </Link>
      </div>
      <ul className="flex space-x-10 items-center ">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              href={href}
              className="text-primary hover:text-accent transition-colors duration-300 ease-in-out font-medium text-sm"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
