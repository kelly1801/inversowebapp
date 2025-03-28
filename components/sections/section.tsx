'use client';

import Image from 'next/image';
import { Btn } from '../ui/btn';
import { HeroSectionProps } from '@/types/blocks';

export default function HeroSection({
  title,
  subtitle,
  body,
  background,
  imageSrc,
  imageWidth,
  reverse,
  buttons,
}: HeroSectionProps) {
  const textColor = background === 'black' ? 'text-white' : 'text-black';
  const sectionHeight = '100vh';
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
    <section
      className={`flex pb-6 md:pb-0 items-center md:h-screen justify-between w-full ${reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}`}

      style={{ backgroundColor: background }}
    >
      {/* Text Content */}
      <div className={`flex-1 ${textColor} px-10 py-2`}>
        <h3 className="text-lg text-center md:text-left md:text-xl font-bold">{title}</h3>
        <h4 className="text-center md:text-left text-sm mt-2">{subtitle}</h4>
        <p className="mt-4 text-xs text-center md:text-left md:text-lg">{body}</p>

        {/* Buttons */}
        {buttons &&
          <div className="mt-6 flex gap-2 md:gap-4 items-center justify-center">
            {buttons.map(({ text, href }, index) =>

              <Btn text={text} href={href} key={index} />

            )}
          </div>
        }

      </div>

      {/* Image Section */}
      <div className={`flex items-center justify-center w-full h-full relative ${widthClass}`}>
        <Image src={`http://localhost:1337${imageSrc?.url}`} alt="Hero Image" className='w-full h-full' width={600} height={600} />
      </div>
    </section>
  );
}
