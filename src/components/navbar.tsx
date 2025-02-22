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
        isScrolled ? "-top-10" : "top-10"
      }`}
    >
      <div
        className={`flex w-full items-center justify-between rounded-lg bg-slate-700 px-6 text-white shadow-xl transition-all duration-300 ease-in-out ${
          isScrolled ? "h-10 bg-slate-800" : "h-16"
        } ${lastScrollY ? "bg-slate-800" : ""}`}
      >
        {/* Left section - Social icons */}
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com"
            className="transition-all hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faGithub} size={"lg"} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="transition-all hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size={"lg"} />
          </Link>
        </div>

        {/* Center section - Navigation */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} size={"lg"} />
          <span className="text-md">+45 41 81 94 50</span>
        </div>

        {/* Right section - Settings */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span className="text-md">madskristensen@hotmail.dk</span>
        </div>
      </div>
    </div>
  );
}
