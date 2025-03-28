'use client';

import Image from 'next/image';
import { Btn } from '../ui/btn';
import { BackgroundSectionProps } from '@/types/blocks';

export default function BackgroundSection({
    title,
    subtitle,
    body,
    backgroundImage,
    backgroundVideo,
    textAlign = 'center',
    buttons,
}: BackgroundSectionProps) {
    const textAlignment = {
        left: 'items-start text-left',
        center: 'items-center text-center',
        right: 'items-end text-right',
    };

    return (
        <section className="relative w-full mt-16 md:mt-0 h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image or Video */}
            {backgroundImage && (
                <Image
                    src={`http://localhost:1337${backgroundImage.url}`}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full z-0"
                />
            )}

            {backgroundVideo && (
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={`http://localhost:1337${backgroundVideo.url}`} type="video/mp4" />
                </video>
            )}

            {/* Content */}
            <div className={`relative z-10 max-w-3xl px-6 py-12 flex flex-col ${textAlignment[textAlign]}`}>
                <h1 className="text-4xl font-bold text-white">{title}</h1>
                {subtitle && <h2 className="text-2xl mt-2 text-white">{subtitle}</h2>}
                {body && <p className="mt-4 text-sm md:text-lg text-white">{body}</p>}

                {/* Buttons */}
                {buttons && (
                    <div className="mt-6 flex gap-4">
                        {buttons.map(({ text, href }, index) => (
                            <Btn text={text} href={href} key={index} />
                        ))}
                    </div>
                )}
            </div>

            {/* Overlay for better contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
        </section>
    );
}
