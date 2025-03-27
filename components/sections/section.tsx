'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Btn } from '../ui/btn';

const ALLOWED_IMAGE_WIDTHS = ["30%", "50%", "20%"] as const;
const ALLOWED_BACKGROUNDS = ["black", "white"] as const;

export interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    body?: string;
    background?: (typeof ALLOWED_BACKGROUNDS)[number];
    imageSrc?: string;
    imageWidth?: (typeof ALLOWED_IMAGE_WIDTHS)[number];
    reverse?: boolean;
    buttons?: { text: string; href?: string }[];

}

// Placeholder buttons
const placeholderButtons = [
    { text: "Learn More", href: "/about" },
    { text: "Get Started", href: "/signup" },
];

const defaultHeroContent: HeroSectionProps = {
    title: 'Welcome to Our Platform',
    subtitle: 'Empowering Your Experience',
    body: 'We provide top-notch solutions tailored to your needs. Explore and enjoy the best we have to offer.',
    background: 'black',
    imageSrc: './images/hero.svg',
    imageWidth: '50%',
    reverse: false,
    buttons: placeholderButtons

};

export default function HeroSection({
    title = defaultHeroContent.title,
    subtitle = defaultHeroContent.subtitle,
    body = defaultHeroContent.body,
    background = defaultHeroContent.background,
    imageSrc = defaultHeroContent.imageSrc,
    imageWidth = defaultHeroContent.imageWidth,
    reverse = defaultHeroContent.reverse,
    buttons = defaultHeroContent.buttons
}: HeroSectionProps) {
    const textColor = background === 'black' ? 'text-white' : 'text-black';
    const sectionHeight = '100vh'; // Adjust 64px if your navbar has a different height

    return (
        <section
            className={`flex items-center justify-between w-full`}
            style={{ backgroundColor: background, height: sectionHeight, flexDirection: reverse ? 'row-reverse' : 'row', }}
        >
            {/* Text Content */}
            <div className={`flex-1 ${textColor} px-10`}>
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-2xl mt-2">{subtitle}</h2>
                <p className="mt-4 text-lg">{body}</p>

                {/* Buttons */}
                {buttons &&
                    <div className="mt-6 flex gap-4">
                    {buttons.map(({ text, href }, index) =>
                       
                            <Btn text={text} href={href} key={index}/>
                        
                    )}
                </div>
                }
                
            </div>
            {/* Image Section */}
            <div
                className="relative"
                style={{ width: imageWidth, minWidth: '200px', height: '100%' }}
            >
                <Image src={imageSrc!} alt="Hero Image" layout="fill" objectFit="cover" />
            </div>
        </section>
    );
}
