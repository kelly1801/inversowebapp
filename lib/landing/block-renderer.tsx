import AboutSection from "@/components/sections/aboutSection";
import BackgroundSection from "@/components/sections/backgroundSection";
import HeroSection from "@/components/sections/section";
import SpaceSection from "@/components/sections/spaceSection";
import TextSection from "@/components/sections/TextSection";
import Spacer from "@/components/ui/divider";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Map from "@/components/sections/mapSection";

import type { Block } from "@/types";

export function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "layout.top-nav":
      return <Navbar {...block} key={index} />;
    case "layout.seccion-espacios":
      return <SpaceSection {...block} key={index} />;
    case "layout.hero-seccion":
      return <HeroSection {...block} key={index} />;
    case "layout.seccion-about":
      return <AboutSection {...block} key={index} />;
    case "layout.spacer":
      return <Spacer {...block} key={index} />;
    case "layout.footer":
      return <Footer {...block} key={index} />;
    case "layout.text-seccion":
      return <TextSection {...block} key={index} />;
    case "layout.about-seccion":
      return <AboutSection {...block} key={index} />;
    case "layout.background-seccion":
      return <BackgroundSection {...block} key={index} />;
      case "layout.map":
        return <Map {...block} key={index} />;


    default:
      return null;
  }
}
