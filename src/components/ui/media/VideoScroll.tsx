"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/plugins/index";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VideoScrollAnim = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;
    const mm = gsap.matchMedia();

    const onReady = () => {
      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      mm.add(
        {
          mobile: "(max-width: 640px)",
          tablet: "(min-width: 641px)",
        },
        (context) => {
          const conditions = context.conditions;
          if (!conditions) return;

          const start = conditions.mobile ? "top 72.5%" : "top 72.5%";
          // const start = conditions.mobile ? "bottom bottom" : "bottom bottom";

          const tl = gsap.timeline({
            scrollTrigger: {
              id: "video_scroll",
              trigger: "#video",
              endTrigger: "#beer-0",
              start,
              end: "bottom bottom",
              scrub: 1.1,
              pin: true,
              markers: true,
              // onLeave: () => {
              //   // Fade in beer image
              //   gsap.to("#beer-0", {
              //     opacity: 1,
              //   });
              //   // Fade out video
              //   gsap.to(video, {
              //     opacity: 0,
              //   });
              // },
              // onEnterBack: () => {
              //   // Fade in video
              //   gsap.to(video, {
              //     opacity: 1,
              //   });
              //   // Fade out beer image
              //   gsap.to("#beer-0", {
              //     opacity: 0,
              //   });
              // },
            },
          });
          tl.to(video, { currentTime: video.duration });
        }
      );
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener("loadedmetadata", onReady);
    }

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      mm.revert();
      // Kill any remaining ScrollTriggers with this ID
      ScrollTrigger.getById("video_scroll")?.kill();
    };
  }, []);

  return (
    <video
      width={250}
      height={250}
      ref={videoRef}
      id="video"
      className="w-full h-full object-contain object-bottom"
      preload="auto"
      playsInline
      muted
      aria-hidden="true">
      <source src="https://res.cloudinary.com/webdevrico/video/upload/v1752155352/beer-output_yyoaei.mp4" />
    </video>
  );
};

export default VideoScrollAnim;
