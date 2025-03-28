'use client';
import { Btn } from '../ui/btn';
import { TextSectionProps } from '@/types/blocks';

export default function TextSection({
    title,
    subtitle,
    body,
    background,
    buttons,
}: TextSectionProps) {
    const textColor = background === 'black' ? 'text-white' : 'text-black';

    return (
        <section
            className={`flex items-center justify-between w-full md:p-4 `}
            style={{ backgroundColor: background }}
        >
            {/* Text Content */}
            <div className={`flex-1 ${textColor} px-10 py-8`}>
                <h3 className="text-lg md:text-xl font-bold text-center text-green-10 ">{title}</h3>
                <h4 className="text-sm md:text-lg mt-2 text-center text-white">{subtitle}</h4>
                <p className="mt-4 md:text-sm text-xs text-center text-white"> {body}</p>

                {/* Buttons */}
                {buttons &&
                    <div className="mt-6 flex sm:ml-1 gap-2 md:gap-4 items-center justify-center md:p-2 md:w-full">
                    {buttons.map(({ text, href }, index) =>
                            <Btn text={text} href={href} key={index}/>
                    )}
                </div>
                }
                
            </div>
           
          
        </section>
    );
}
