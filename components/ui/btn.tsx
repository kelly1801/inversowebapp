import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  text: string;
}

export const Btn: React.FC<ButtonProps> = ({ href, text,  ...props }) => {
  const buttonElement = (
    <button
      className="cursor-pointer px-6 text-sm py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      {...props} // Spread all button props
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};
