import type { Metadata } from "next";
import "./globals.css";
import { mono, serif, modernNegra } from "@/fonts/fonts";

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
      <body className={`${mono.variable} ${serif.variable} ${modernNegra.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
