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
    <nav className="flex justify-between items-center py-4 px-32">
      <div>
      <Link href="/">
          <ThreeDName />
        </Link>
      </div>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="inline-block mx-4">
            <Link
              href={href}
              className="text-primary hover:text-accent transition-colors duration-300 ease-in-out font-semibold text-sm"
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
