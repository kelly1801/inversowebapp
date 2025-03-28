/* eslint-disable @typescript-eslint/no-unused-vars */
const ALLOWED_IMAGE_WIDTHS = ["30%", "50%", "20%"] as const;
const ALLOWED_BACKGROUNDS = ["black", "white"] as const;

type ComponentType =
  | "layout.top-nav" 
  | "layout.seccion-espacios" 
  | "layout.hero-seccion" 
  | "layout.seccion-about" 
  | "layout.spacer" 
  | "layout.text-seccion"
  | "layout.background-seccion" 
  | "layout.about-seccion" 
  | "layout.map"



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
  imageWidth?: "30%" | "40%" | "50%" | "20%";
  galleryImages?: string[];
  reverse?: boolean;
  value?: string;
  subtitle?: string;
  description?: string;
  buttonLink?: string,
  textButton?: string
}

export interface HeroSectionProps extends Base<"layout.hero-seccion"> {
  title?: string;
  subtitle?: string;
  body?: string;
  background?: (typeof ALLOWED_BACKGROUNDS)[number];
  imageSrc?: string;
  imageWidth?: (typeof ALLOWED_IMAGE_WIDTHS)[number];
  reverse?: boolean;
  buttons?: { text: string; href?: string }[];
}

export interface TextSectionProps extends Base<"layout.text-seccion"> {
  title?: string;
  subtitle?: string;
  body?: string;
  buttons?: { text: string; href?: string }[];
  background?: (typeof ALLOWED_BACKGROUNDS)[number];
}

export interface SpacerProps extends Base<"layout.spacer"> {
  height?: string;
}

export interface BackgroundSectionProps extends Base<"layout.background-seccion"> {
  title: string;
  subtitle?: string;
  body?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  textAlign?: 'left' | 'center' | 'right';
  buttons?: { text: string; href: string }[];
}
export interface MapSectionProps extends Base<"layout.map"> {
  title: string;
  body?: string;

}


export interface AboutSectionProps extends Base<"layout.about-seccion"> {
  title?: string;
  description?: string;
  mainImageSrc?: string;
  sideImageSrc?: string;
}

interface FooterLink {
  href: string;
  label: string;
}

interface SocialMedia {
  href: string;
  icon: JSX.Element;
}

export interface FooterProps {
  logo?: string;
  links?: FooterLink[];
  socialLinks?: SocialMedia[];
}