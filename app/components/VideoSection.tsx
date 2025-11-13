"use client";
import Image from "next/image";
import React, { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full h-[400px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      {!isPlaying && (
        <Image
          src="/about/hvac-video-bg.png" // Replace with your uploaded image path
          alt="HVAC Work Video Thumbnail"
          fill
          className="object-cover opacity-90"
          priority
        />
      )}

      {/* Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-white bg-white/20 hover:bg-white/40 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="none"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 5.75L19 12l-10.75 6.25V5.75z"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Video Player */}
      {isPlaying && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          controls
          autoPlay
        >
          <source src="/videos/hvac-work.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
};

export default VideoSection;
