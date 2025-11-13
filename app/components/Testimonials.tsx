'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Excellent HVAC service that keeps the air quality good and the system working reliably in our healthcare facility.',
    name: 'AMC hospital',
    location: 'Surat',
    image: '/testimonials/amc.jpg',
  },
  {
    quote:
      'Great HVAC service that keeps our environment comfortable and safe, with quick support whenever needed.',
    name: 'Galaxy hospital',
    location: 'Bardoli',
    image: '/testimonials/galaxy.jpg',
  },
  {
    quote:
      'Reliable HVAC service that keeps our hospital comfortable and running smoothly at all times.',
    name: 'Shah hospital',
    location: 'Karnal',
    image: '/testimonials/shah.jpg',
  },
  {
    quote:
      'Professional HVAC maintenance team ensuring consistent performance and reliability.',
    name: 'Metro hospital',
    location: 'Vadodara',
    image: '/testimonials/metro.jpg',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < testimonials.length - 3) setCurrent(current + 1);
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <h2 className="text-4xl font-semibold text-gray-900">Testimonials</h2>
          <p className="text-black mt-2 sm:mt-0 text-base">
            What Our Customer Say About Us
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className={`absolute -left-8 z-10 p-2 rounded-full hover:bg-gray-100 transition ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft size={30} strokeWidth={1.5} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#F7F6F2] flex-shrink-0 rounded-2xl p-6 w-full md:w-1/3 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    “{t.quote}”
                  </p>

                  <div className="pt-4 border-t border-transparent flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.location}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={current >= testimonials.length - 3}
            className={`absolute -right-8 z-10 p-2 rounded-full hover:bg-gray-100 transition ${
              current >= testimonials.length - 3
                ? 'opacity-30 cursor-not-allowed'
                : ''
            }`}
          >
            <ChevronRight size={30} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}