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
          smallSize: "(max-width: 1279px)",
          bigSize: "(min-width: 1280px)",
        },
        (context) => {
          const conditions = context.conditions;
          if (!conditions) return;

          const start = conditions.smallSize ? "top 55%" : "center 70%";

          const tl = gsap.timeline({
            scrollTrigger: {
              id: "video_scroll",
              trigger: video,
              endTrigger: "#menu",
              start,
              end: "bottom bottom",
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
      className="w-full h-[45%] xl:h-[60%] absolute bottom-0 md:object-contain object-bottom object-cover"
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
