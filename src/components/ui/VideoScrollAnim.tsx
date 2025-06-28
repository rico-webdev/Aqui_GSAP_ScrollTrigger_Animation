import { useRef } from "react";
import { gsap, useGSAP } from "@/plugins/index";
import { useIsMobile } from "@/hooks/useIsMobile";

const VideoScrollAnim = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useIsMobile();

  const startValue = isMobile ? "top 50%" : "center 65%";
  const endValue = isMobile ? "120% top" : "bottom top";

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMetadata = () => {
      const scrollTriggerVideoTl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: startValue,
          end: endValue,
          scrub: 1.5,
          pin: true,
        },
      });

      scrollTriggerVideoTl.to(video, {
        currentTime: video.duration,
      });
    };

    video.addEventListener("loadedmetadata", onMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", onMetadata);
    };
  }, [isMobile]);

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
