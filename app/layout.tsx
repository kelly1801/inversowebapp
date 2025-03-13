import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { cn

 } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const headingPro = localFont({
  src: "../public/fonts/heading/Heading-Pro-Bold-trial.ttf",
  display: "swap"
});

const dDinExp = localFont({
  src: "../public/fonts/D-DIN-Exp/D-DINExp.woff",
  display: "swap"
});

const monument = localFont({
  src: "../public/fonts/monument/monument.otf",
  display: "swap"
});


export const metadata: Metadata = {
  title: "Inverso Coliving",
  description: "Inverso Cl 47 Coliving in Medellín offers a flexible lifestyle with private rooms, coworking spaces, a gym, and social events. Perfect for digital nomads and those seeking flexible housing in a modern, vibrant community. Book your coliving experience in Medellín today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen antialiased", `${headingPro.className} ${dDinExp.className} ${monument.className} antialiased`)}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
