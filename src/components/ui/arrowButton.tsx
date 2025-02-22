"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ArrowButtonProps {
  orientation: "left" | "right" | "up" | "down";
  url: string;
  className?: string;
  showOnScroll?: boolean;
}

export default function ArrowButton({
  orientation,
  url,
  className,
  showOnScroll = false,
}: ArrowButtonProps) {
  const [isVisible, setIsVisible] = useState(!showOnScroll);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (url === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const handleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (url === "#top") {
      document
        .querySelector('a[href="#top"]')
        ?.addEventListener("click", handleScroll);
    }

    if (showOnScroll) {
      window.addEventListener("scroll", handleVisibility);
    }

    return () => {
      if (url === "#top") {
        document
          .querySelector('a[href="#top"]')
          ?.removeEventListener("click", handleScroll);
      }

      if (showOnScroll) {
        window.removeEventListener("scroll", handleVisibility);
      }
    };
  }, [url, showOnScroll]);

  return (
    <div
      className={`flex h-10 w-10 justify-center rounded-full bg-slate-700 shadow-lg ${className} ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-200`}
    >
      <Link
        href={url}
        className="flex h-full w-full items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`transform text-white transition-transform duration-200 ${
            orientation === "right"
              ? "rotate-0"
              : orientation === "left"
                ? "rotate-180"
                : orientation === "up"
                  ? "-rotate-90"
                  : "rotate-90"
          }`}
        />
      </Link>
    </div>
  );
}
