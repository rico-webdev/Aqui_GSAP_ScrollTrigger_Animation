import { useRef } from "react";
import { gsap, useGSAP } from "@/plugins/index";

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
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const conditions = context.conditions;
          if (!conditions) return;

          const start = conditions.isMobile ? "top 50%" : "center 65%";
          const end = conditions.isMobile ? "120% top" : "bottom top";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: video,
              start,
              end,
              scrub: 1.1,
              pin: true,
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
    };
  }, []);

  return (
    <video
      id="video"
      ref={videoRef}
      className="w-full md:h-[70%] h-1/2 absolute bottom-0 md:object-contain object-bottom object-cover"
      aria-label="An ice cube falling into a glass of cocktail"
      aria-hidden="true"
      preload="auto"
      playsInline
      muted>
      <source src="/videos/output.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoScrollAnim;
