import localFont from "next/font/local";
import { Inter, Dancing_Script, Cinzel } from "next/font/google";

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

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
});

const shadow = Cinzel({
  weight: ["400"],
  variable: "--font-shadow",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const fonts = {
  modernNegra,
  inter,
  dancingScript,
  shadow,
};

export default fonts;
export type Fonts = typeof fonts;
