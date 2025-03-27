"use client"

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  title?: string;
  description?: string;
  mainImageSrc?: string;
  sideImageSrc?: string;
  socialLinks?: { icon: string; url: string }[];
}

const defaultSocialLinks = [
  { icon: "/icons/facebook.svg", url: "https://facebook.com" },
  { icon: "/icons/twitter.svg", url: "https://twitter.com" },
  { icon: "/icons/instagram.svg", url: "https://instagram.com" },
];

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "¿Quienes Somos?",
  description = `No somos un hotel, ni una vivienda tradicional...Somos un lugar para vivir y habitar de manera diferente.

  Podrás disfrutar de un espacio completamente dotado con todo lo que necesitarás, increíbles espacios comunes para compartir y disfrutar como sala de coworking, wellness gym y nuestro rooftop con jacuzzi. Además, podrás asistir a nuestras actividades como clases de yoga, clases de baile y noches de cine.

  Tu habitación estará impecable a tu llegada. Además, hacemos limpieza semanal, que incluye barrido, trapeado, lavado del baño y cambio de lencería.

`,
  mainImageSrc = "/images/hero.svg",
  sideImageSrc = "/images/rooms/soul.jpg",
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <section className="flex flex-col md:flex-row h-screen justify-between no-scrollbar overflow-x-hidden bg-black text-white p-6">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src={mainImageSrc} width={600} height={800} alt="Building" className="w-full h-auto object-cover" />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex-1 mt-[60px] flex justify-center px-8 overflow-y-scroll no-scrollbar">
      <div className="flex flex-col w-full ">
      <h2 className="text-green-500 text-3xl font-bold mb-4">{title}</h2>
      <p className="text-sm text-gray-300 leading-6 whitespace-pre-line">{description}</p>
      </div>
       

        {/* Side Image */}
        <div className="mt-6 flex justify-end">
          <Image src={sideImageSrc} width={300} height={300} alt="Person" className="w-auto h-auto object-cover" />
        </div>

        {/* Social Media Links
        <div className="mt-4 flex space-x-4">
          {socialLinks.map(({ icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <Image src={icon} width={24} height={24} alt="Social Icon" className="cursor-pointer" />
            </a>
          ))}
        </div> */}
      </div>4
       {/* Hide scrollbar while keeping scrolling */}
       <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
