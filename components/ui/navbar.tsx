"use client"
import { NavBarProps } from '@/types/blocks';

import Link from 'next/link';
import {  useEffect,useState } from 'react';
import Image from 'next/image';



//const scrolled = true
const language = "en"

export default function Navbar({links, Logo  }: NavBarProps) {
  //const [language, setLanguage] = useState('en');

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLanguageChange = (lang: string) => {
   // setLanguage(lang);
    // Add language change logic here (e.g., router push or i18n implementation)
  };
   
  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-black"
    }`}>
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold">
          <Link href={Logo.link}>
           <Image src={`http://localhost:1337${Logo.LogoImg.url}`} width={100} height={100} alt="Inverso logo" /> 
          </Link>

        </div>
         <div className="flex gap-4">
          {['en', 'es'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`relative px-2 py-1 text-white transition-all ${
                language === lang ? 'font-bold text-green-10' : ''
              } before:absolute before:w-full before:h-0.5 before:bg-green-10 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:-translate-y-1`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div> 
      </div>
      <div className="flex gap-4">
        {links && links.map(({ href,  Text}) => (
          <Link
            key={href}
            href={href}
            className="relative px-2 py-1 text-white transition-all before:absolute before:w-full before:h-0.5 before:bg-green-10 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:-translate-y-1"
          >
            {Text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
