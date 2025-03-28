"use client"

import React from "react";
import Image from "next/image";

import { AboutSectionProps } from "@/types/blocks";


const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  mainImageSrc,
  sideImageSrc,
}) => {
  return (
    <section className="flex flex-col md:flex-row md:h-screen justify-between no-scrollbar overflow-x-hidden bg-black text-white p-6">
      {/* Left Image */}
      {
        mainImageSrc && <div className="w-full md:w-1/2 flex justify-center items-center p-5">
          <Image src={`http://localhost:1337${mainImageSrc.url}`} width={600} height={800} alt="Building" className="w-full h-auto object-cover" />
        </div>
      }


      {/* Right Content */}
      <div className="w-full md:w-1/2 flex-1 flex flex-col md:flex-row justify-center px-8">
        <div className="flex flex-col w-full ">
          <h2 className="text-green-10 text-lg md:text-2xl font-bold mb-4 text-center">{title}</h2>
          <p className="text-center md:text-left text-xs md:text-sm text-gray-300 leading-6 whitespace-pre-line">{description}</p>
        </div>


        {/* Side Image */}
        {sideImageSrc &&
          <div className="my-2 md:mt-6 flex justify-end md:p-5">
            <Image src={`http://localhost:1337${sideImageSrc.url}`} width={600} height={600} alt="Person" className=" w-full h-full object-cover" />
          </div>
        }


      </div>
    </section>
  );
};

export default AboutSection;
