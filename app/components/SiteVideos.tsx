'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const videos = [
  { thumbnail: '/videos/thumb1.jpg', url: '/videos/video1.mp4' },
  { thumbnail: '/videos/thumb2.jpg', url: '/videos/video2.mp4' },
  { thumbnail: '/videos/thumb3.jpg', url: '/videos/video3.mp4' },
  { thumbnail: '/videos/thumb4.jpg', url: '/videos/video4.mp4' },
];

export default function SiteVideos() {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
        <h2 className="lg:text-6xl text-3xl font-semibold text-gray-800 mb-8">
          Site Videos
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group cursor-pointer"
            >
              <Image
                src={video.thumbnail}
                alt={`Site video ${i + 1}`}
                width={400}
                height={600}
                className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <PlayCircle size={64} className="text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="py-10 flex justify-center">
          <div className="h-0.5 bg-gray-300 w-2/3 rounded-full" />
        </div>
    </section>
  );
}