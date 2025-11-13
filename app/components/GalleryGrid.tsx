'use client';

import Image from 'next/image';

const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg',
  '/images/gallery10.jpg',
  '/images/gallery11.jpg',
  '/images/gallery12.jpg',
];

export default function GalleryGrid() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50">

        {/* 👇 Grid with 4 images per row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            Show more
          </button>
        </div>

    </section>
  );
}