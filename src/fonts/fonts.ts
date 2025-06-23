import localFont from "next/font/local";
import { DM_Serif_Text, Mona_Sans } from "next/font/google";

export const modernNegra = localFont({
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

export const mono = Mona_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const serif = DM_Serif_Text({
  weight: ["400"],
  variable: "--font-serif",
  subsets: ["latin"],
});
