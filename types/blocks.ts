/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinkProps, ImageProps } from "./base";

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

type ComponentType =
  | "layout.top-nav" | "layout.seccion-espacios"

 

interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block =
  | NavBarProps | SpaceSectionProps
  

export interface NavBarProps extends Base<"layout.top-nav"> {
  src?: string;
  links?: { href: string; label: string }[];
}
export interface SpaceSectionProps extends Base<"layout.seccion-espacios"> {
  title?: string;
  imageSrc?: string;
  imageWidth?: "30%" | "40%" |"50%" | "20%";
  galleryImages?: string[];
  reverse?: boolean;
  value?: string;
  subtitle?: string;
  description?: string;
  buttonLink?: string,
  textButton?: string
}


export interface CardCarouselItem {
  id: number;
  heading: string;
  subHeading: string;
  text?: string;
  icon: string;
}




