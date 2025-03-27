import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

interface FooterLink {
  href: string;
  label: string;
}

interface SocialMedia {
  href: string;
  icon: JSX.Element;
}

interface FooterProps {
  logo?: string;
  links?: FooterLink[];
  socialMedia?: SocialMedia[];
}

const defaultLinks: FooterLink[] = [
  { href: "/", label: "Homeeeeeeeeeeeeeeeeeeeeeeee" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const defaultSocialMedia: SocialMedia[] = [
  { href: "https://facebook.com", icon: <i className="fab fa-facebook" /> },
  { href: "https://twitter.com", icon: <i className="fab fa-twitter" /> },
  { href: "https://instagram.com", icon: <i className="fab fa-instagram" /> },
];

const Footer: React.FC<FooterProps> = ({
  logo = "/logos/logo-inverted.png",
  links = defaultLinks,
  socialMedia = defaultSocialMedia,
}) => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={logo} width={120} height={50} alt="Logo" />
        </div>

        {/* Links */}
        <nav className="flex flex-col items-start flex-wrap gap-4 mt-4 md:mt-0">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-4 mt-6">
        {socialMedia.map(({ href, icon }) => (
          <Link key={href} href={href} className="text-xl hover:opacity-80">
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
