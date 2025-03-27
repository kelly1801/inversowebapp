import React from "react";
import Image from "next/image";
import { SpaceSectionProps } from "@/types/blocks";
import { Btn } from "../ui/btn";

const SpaceSection: React.FC<SpaceSectionProps> = ({
  title,
  imageSrc,
  imageWidth,
  galleryImages,
  reverse,
  value,
  subtitle,
  description,
  buttonLink,
  textButton

}) => {



  const formattedWidth = imageWidth?.replace(/^a/, '');

  // Function to get the correct Tailwind class
  const getWidthClass = (width: string) => {
    switch (width) {
      case "20%":
        return "lg:w-1/5"; // Tailwind's 20% equivalent
      case "30%":
        return "lg:w-3/10"; // ≈30% (or use custom CSS)
      case "40%":
        return "lg:w-2/5";  // Tailwind's 40% equivalent
      case "50%":
        return "lg:w-1/2";  // Tailwind's 50% equivalent
      default:
        return "lg:w-1/2";  // Fallback to 50%
    }
  };

  const widthClass = getWidthClass(formattedWidth!);


  return (
    <section className="max-h-[calc(100vh - 60px)] h-screen flex flex-col md:flex-row">
      {/* Image Section */}
      <div className={`lex items-center justify-center w-full  ${widthClass}`}>
        <Image
          src={`http://localhost:1337${imageSrc.url}`} width={400} height={600} alt="Section Image" className="object-cover w-full h-full"
        />
      </div>
      {/* Content Section */}
      <div className={`flex-1 flex flex-col p-4 ${reverse ? "md:order-first" : ""}`}>
        {/* Rooms */}
        <div className="flex flex-col justify-between mt-[60px] items-center">

          <div className="p-4 items-start w-full">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <h3 className="text-xl font-bold mb-6">{subtitle}</h3>

          </div>


          <div className="flex flex-col gap-4 p-4 items-start">
            <div className="flex justify-between w-full">
              <div className="f w-4 h-4 bg-green-10 my-1">
                <p className="text-lg font-semibold">{value}</p>
              </div>
              <div className="mr-10">
                <Btn href={buttonLink} text={textButton!} />

              </div>
            </div>


            <p className="text-white">{description}</p>
          </div>
        </div>

        {/* Masonry Gallery (Hidden Scroll) */}
        <div className="mt-6 flex-grow overflow-y-scroll  overflow-x-hidden no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="columns-2 md:columns-3 gap-8">
            {galleryImages && galleryImages.map((src, index) => {
              const randomHeight = Math.floor(Math.random() * 250) + 200; // Random height between 200px and 350px

              return (
                <div
                  key={index}
                  className="w-full overflow-hidden break-inside-avoid m-2 p-0.5 "
                  style={{ height: `${randomHeight}px` }} // Apply random height to the div
                >
                  <Image
                    src={`http://localhost:1337${src.url}`}
                    height={400}
                    width={400}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover rounded "
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};

export default SpaceSection;
