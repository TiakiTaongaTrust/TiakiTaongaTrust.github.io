"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OpeningHome from "./opening-home/OpeningHome";

type VideoState = "unplayed" | "playing" | "played";

export default function SplashHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videoState, setVideoState] = useState<VideoState>("unplayed");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const splashPlayed = localStorage.getItem("splashPlayed") === "true";
    setVideoState(splashPlayed ? "played" : "unplayed");
  }, []);

  const handlePlay = () => {
    setVideoState("playing");
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const handleVideoEnded = () => {
    localStorage.setItem("splashPlayed", "true");
    setVideoState("played");
  };

  if (videoState === "unplayed") {
    return <OpeningHome onPlay={handlePlay} />;
  }

  if (videoState === "playing") {
    return (
      <video
        ref={videoRef}
        onEnded={handleVideoEnded}
        autoPlay
        controls
        playsInline
        className="w-full h-screen object-cover"
      >
        <source
          src="./videos/Final-Tiaki-Taonga-Trust-Transition-Video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
