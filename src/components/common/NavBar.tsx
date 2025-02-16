"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThreeDName from "./ThreeDName";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/blogs", label: "Blogs" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        const section = document.querySelector(href);
        if (section) {
          const yOffset = href === "#home" ? -80 : 0;
          const y =
            section.getBoundingClientRect().top + window.scrollY + yOffset;
          
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 100); // Small delay for smoothness

          window.history.pushState(null, "", `/${href}`);
        }
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 h-20 fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center">
        <Link href="/">
          <ThreeDName />
        </Link>
      </div>
      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden text-primary cursor-pointer" // Ensuring it's clearly clickable
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </div>
      <ul className={`md:flex space-x-12 items-center hidden`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            {href.startsWith("#") ? (
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(href);
                }}
                className="text-primary hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className="text-primary hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/* Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-opacity-90 backdrop-blur-lg bg-gray-900 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(href);
                      setMenuOpen(false);
                    }}
                    className="text-primary hover:text-accent transition-colors duration-300 font-medium text-lg"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
