import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/index";
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
      <body
        className={`${fonts.modernNegra.variable} ${fonts.inter.className} ${fonts.dancingScript.variable} ${fonts.shadow.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
