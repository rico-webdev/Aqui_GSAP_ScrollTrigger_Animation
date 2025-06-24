import localFont from "next/font/local";
import { Inter } from "next/font/google";

const modernNegra = localFont({
  src: [
    {
      path: "./ModernNegra.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-modern-negra",
  preload: true,
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const fonts = {
  modernNegra,
  inter,
};

export default fonts;
export type Fonts = typeof fonts;
