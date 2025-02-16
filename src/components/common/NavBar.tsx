"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThreeDName from "./ThreeDName";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/blogs", label: "Blogs" },
];

const NavBar = () => {
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`; // Redirect to home first
      } else {
        const section = document.querySelector(href);
        if (section) {
          let yOffset = 0; // Default: no offset
          if (href === "#home") {
            yOffset = -80; // Apply offset only for Home
          }

          const y =
            section.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          window.history.pushState(null, "", `/${href}`);
        }
      }
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 pr-32 pl-[68px] h-20 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        <Link href="/">
          <ThreeDName />
        </Link>
      </div>
      <ul className="flex space-x-12 items-center">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            {href.startsWith("#") ? (
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(href);
                }}
                className="text-primary hover:text-accent transition-colors duration-300 ease-in-out font-medium text-sm cursor-pointer"
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className="text-primary hover:text-accent transition-colors duration-300 ease-in-out font-medium text-sm"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
