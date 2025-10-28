"use client";

import { secondsToHHMMSS } from "@/utils/time";
import Image from "next/image";
import { Progress } from "../progress";
import { Button } from "../ui/button";
import { Loading } from "../ui/loading";
import useVideo from "./useVideo";
import { VideoPlayerProps } from "./video-player.types";

const VideoPlayer = ({ src, poster = "" }: VideoPlayerProps) => {
  // console.log(src);

  //Hook useVideo
  const {
    currentTime,
    duration,
    progress,
    isPlaying,
    isVideoLoaded,
    isVideoWaited = true,
    videoRef,
    play,
    pause,
    fullScreen,
  } = useVideo(src);

  //Render VideoPlayer
  return (
    <div className="relative">
      {isVideoWaited && (
        <Loading
          className="absolute inset-0 m-auto"
          variant="neutral"
          size="lg"
        />
      )}
      <video
        className="w-full"
        ref={videoRef}
        src={src}
        poster={poster}
        width={550}
        height={327}
      />
      <div
        className={`${
          !isVideoLoaded || isVideoWaited
            ? "animate-pulse opacity-40 pointer-events-none"
            : ""
        } h-12 dark:bg-base-50 rounded-lg  p-2 flex items-center mt-2 gap-5`}
        lang="en"
        dir="ltr"
      >
        <Image
          className="hidden lg:block relative top-[-0.15rem]"
          src="/images/logo-d.png"
          width={80}
          height={20}
          alt=""
        />

        <Button
          size="xs"
          variant={isPlaying ? undefined : "primary"}
          className="font-semibold tracking-widest w-32"
          onClick={!isPlaying ? play : pause}
        >
          {isVideoWaited ? "loading..." : !isPlaying ? "play" : "pause"}
        </Button>

        <Progress value={progress} variant="primary" />
        <div className="flex gap-1 font-semibold text-sm *:w-16">
          <span>{secondsToHHMMSS(currentTime)}</span> /
          <span>{secondsToHHMMSS(duration)}</span>
        </div>
        <Button
          size="xs"
          className="hidden lg:inline-flex font-semibold tracking-widest"
          onClick={fullScreen}
        >
          full screen
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
