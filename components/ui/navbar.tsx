"use client";

import { NavBarProps } from "@/types/blocks";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu

const language = "en";

export default function Navbar({ links, Logo }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    // Language change logic here
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-black"
      }`}
    >
      {/* Left Side: Logo & Language Buttons */}
      <div className="flex items-center gap-4">
        <Link href={Logo.link} className="text-2xl font-bold">
          <Image
            src={`http://localhost:1337${Logo.LogoImg.url}`}
            width={100}
            height={100}
            alt="Inverso logo"
          />
        </Link>

        {/* Language Switcher */}
        <div className="hidden md:flex gap-4">
          {["en", "es"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`relative px-2 py-1 transition-all ${
                language === lang ? "font-bold text-green-10" : "text-white"
              } before:absolute before:w-full before:h-0.5 before:bg-green-10 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:-translate-y-1`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Navigation (Hidden on small screens) */}
      <div className="hidden md:flex gap-4">
        {links &&
          links.map(({ href, Text }) => (
            <Link
              key={href}
              href={href}
              className="relative px-2 py-1 transition-all text-white before:absolute before:w-full before:h-0.5 before:bg-green-10 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:-translate-y-1"
            >
              {Text}
            </Link>
          ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Full-Width Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-6 p-6`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-3xl text-white"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        {/* Navigation Links */}
        {links &&
          links.map(({ href, Text }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)} // Close menu on link click
              className="text-white text-2xl"
            >
              {Text}
            </Link>
          ))}
      </div>
    </nav>
  );
}


