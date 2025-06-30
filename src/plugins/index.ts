import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { GSDevTools } from "gsap/GSDevTools";

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText, GSDevTools, ScrollToPlugin };
gsap.registerPlugin( ScrollSmoother, ScrollTrigger, SplitText, GSDevTools, ScrollToPlugin );