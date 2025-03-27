import AboutSection from "@/components/sections/aboutSection";
import HeroSection from "@/components/sections/section";
import SpaceSection from "@/components/sections/spaceSection";
import Navbar from "@/components/ui/navbar";

import type { Block } from "@/types";

export function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "layout.top-nav":
      return <Navbar {...block} key={index} />;
      case "layout.seccion-espacios":
        return <SpaceSection {...block} key={index} />;
    
    default:
      return null;
  }
}
