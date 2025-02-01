"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Settings } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-10 left-0 right-0 flex justify-center z-50">
      <div
        className={`
          bg-slate-700 text-white
          flex items-center justify-between
          px-6 rounded-lg
          transition-all duration-300 ease-in-out
          ${isScrolled ? "w-[80%] h-14" : "w-[60%] h-16"}
        `}
      >
        {/* Left section - Social icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            className="hover:text-slate-300 transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="hover:text-slate-300 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        {/* Center section - Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/tech-stack"
            className="text-lg font-medium hover:text-slate-300 transition-colors"
          >
            TechStack
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium hover:text-slate-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-slate-300 transition-colors"
          >
            About me
          </Link>
        </nav>

        {/* Right section - Settings */}
        <button className="hover:text-slate-300 transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
