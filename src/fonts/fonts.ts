import { Inter, Dancing_Script, Cinzel } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const fonts = {
  inter,
  dancingScript,
  cinzel,
};

export default fonts;
export type Fonts = typeof fonts;
