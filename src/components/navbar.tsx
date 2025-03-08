"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up
        setIsScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 right-0 z-50 mx-auto flex w-full max-w-3xl justify-center transition-all duration-300 ${
        isScrolled ? "-top-10" : "top-0 xs:top-10"
      }`}
    >
      <div
        className={`flex w-full items-center justify-between bg-slate-700 px-2 text-white shadow-xl transition-all duration-300 ease-in-out xs:mx-5 xs:rounded-lg xs:px-6 md:mx-0 ${
          isScrolled ? "h-10 bg-slate-800" : "h-12 sm:h-16"
        } ${lastScrollY ? "bg-slate-800" : ""}`}
      >
        {/* Left section - Social icons */}
        <div className="flex items-center gap-1 xs:gap-2">
          <Link
            href="https://github.com/madsnbkristensen"
            className="transition-all hover:text-slate-300"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm sm:text-lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mads-nederby-bj%C3%B8dstrup-kristensen-30364324a/"
            className="transition-all hover:text-slate-300"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-sm sm:text-lg"
            />
          </Link>
        </div>

        {/* Center section - Navigation */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <FontAwesomeIcon className="text-yellow-400" icon={faPhone} size="lg" />
          </div>
          <span className="text-sm sm:text-base">+45 41 81 94 50</span>
        </div>

        {/* Right section - Settings */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <FontAwesomeIcon className="text-yellow-400" icon={faEnvelope} size="lg" />
          </div>
          <span className="text-sm md:text-base">
            madskristensen@hotmail.dk
          </span>
        </div>
      </div>
    </div>
  );
}
