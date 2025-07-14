import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

export {
  gsap,
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  GSDevTools,
  ScrollToPlugin,
  ScrambleTextPlugin,
};
gsap.registerPlugin(
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  GSDevTools,
  ScrollToPlugin,
  ScrambleTextPlugin
);
