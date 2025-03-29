import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/types/blocks";


const Footer: React.FC<FooterProps> = ({
  logo,
  links,
  socialLinks,
}) => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        {/* Logo */}
        <div >
          <Link href={logo.link}>
          <Image src={`http://localhost:1337${logo.LogoImg.url}`} width={120} height={50} alt="Logo" />

          </Link>
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center md:items-start flex-wrap gap-4 mt-4 md:mt-0">
          {links && links.map(({ href, Text }) => (
            <Link
              key={href}
              href={href}
              className="transition  before:absolute before:w-full before:h-0.5 before:bg-green-10 before:bottom-0 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:-translate-y-1"
            >
              {Text}
            </Link>
          ))}
           {/* Social Media */}
      <div className="flex justify-center gap-4 mt-6 items-start">
        {socialLinks && socialLinks.link.map(({ href, icon }) => (
          <Link key={href} href={href} className="text-xlhover:opacity-80">
            <Image src={`http://localhost:1337${icon.url}`} width={30} height={30} alt="icon"/>
          </Link>
        ))}
      </div>
        </nav>
      </div>

     
    </footer>
  );
};

export default Footer;
