"use client";

import dynamic from "next/dynamic";

const VideoScroll = dynamic(() => import("@/components/ui/media/VideoScroll"), {
  ssr: false,
});

export default function VideoScrollClient() {
  return (
    <div
      id="video"
      className="absolute top-0 -z-10 w-[250px] mx-auto aspect-square bg-amber-500/20">
      <VideoScroll />
    </div>
  );
}
