"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
        isScrolled ? "top-2" : "top-10"
      }`}
    >
      <div
        className={`bg-slate-700 text-white flex items-center justify-between px-6 rounded-lg transition-all duration-300 ease-in-out ${
          isScrolled ? "w-[50%] h-10 shadow-xl bg-slate-800" : "w-[100%] h-16"
        }`}
      >
        {/* Left section - Social icons */}
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          {!isScrolled && <FontAwesomeIcon icon={faPhone} size="lg" />}
          <span
            className={`${
              isScrolled ? "text-sm" : "text-md"
            } overflow-hidden max-h-[24px]`}
          >
            +45 41 81 94 50
          </span>
        </div>

        {/* Right section - Settings */}
        <div className="flex items-center gap-2">
          {!isScrolled && <FontAwesomeIcon icon={faEnvelope} size="lg" />}
          <span className={`${isScrolled ? "text-sm" : "text-md"}`}>
            madskristensen@hotmail.dk
          </span>
        </div>
      </div>
    </header>
  );
}
