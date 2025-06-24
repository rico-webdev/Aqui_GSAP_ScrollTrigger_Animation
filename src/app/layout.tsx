import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import fonts from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Modern, GSAP Animated, Cocktail Menu",
  description: "A modern menu with GSAP animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
