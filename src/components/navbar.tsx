"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 flex justify-center z-50 max-w-3xl mx-auto w-full transition-all ${
        isScrolled ? "top-0" : "top-10"
      }`}
    >
      <div
        className={`bg-slate-700 text-white flex items-center justify-between px-6 rounded-lg transition-all duration-300 ease-in-out ${
          isScrolled ? "w-[100%] h-14" : "w-[80%] h-16"
        }`}
      >
        {/* Left section - Social icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            className="hover:text-slate-300 transition-all"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size={`${isScrolled ? "1x" : "lg"}`}
            />
          </Link>
          <Link
            href="https://linkedin.com"
            className="hover:text-slate-300 transition-all"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size={`${isScrolled ? "1x" : "lg"}`}
            />
          </Link>
        </div>

        {/* Center section - Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/tech-stack"
            className={`font-medium hover:text-slate-300 transition-all ${
              isScrolled ? "text-sm" : "text-lg"
            }`}
          >
            TechStack
          </Link>
          <Link
            href="/projects"
            className={`font-medium hover:text-slate-300 transition-all ${
              isScrolled ? "text-sm" : "text-lg"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`font-medium hover:text-slate-300 transition-all ${
              isScrolled ? "text-sm" : "text-lg"
            }`}
          >
            About me
          </Link>
        </nav>

        {/* Right section - Settings */}
        <button className="text-yellow-200 hover:text-slate-300 transition-colors">
          <FontAwesomeIcon icon={faSun} className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
