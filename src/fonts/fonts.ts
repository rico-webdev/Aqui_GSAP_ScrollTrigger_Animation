import localFont from "next/font/local";
import { Inter, Dancing_Script, Cinzel } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
});

const cinzel = Cinzel({
  weight: ["400"],
  variable: "--font-cinzel",
});

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

const fonts = {
  inter,
  dancingScript,
  cinzel,
  modernNegra,
};

export default fonts;
export type Fonts = typeof fonts;
