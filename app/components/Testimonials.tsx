"use client";
import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: "Excellent HVAC service that keeps the air quality good and the system working reliably in our healthcare facility.",
    name: "AMC hospital",
    location: "Surat",
    image: "/testimonials/amc-hospital.jpg",
  },
  {
    text: "Great HVAC service that keeps our environment comfortable and safe, with quick support whenever needed.",
    name: "Galaxy hospital",
    location: "Bardoli",
    image: "/testimonials/galaxy-hospital.jpg",
  },
  {
    text: "Reliable HVAC service that keeps our hospital comfortable and running smoothly at all times.",
    name: "Shah hospital",
    location: "Karnal",
    image: "/testimonials/shah-hospital.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0C1622]">
          Testimonials
        </h2>
        <p className="text-[#0C1622]/70 mt-4 sm:mt-0">
          What Our Customers Say About Us
        </p>
      </div>

      {/* Scrollable Container */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-gray-300"
        >
          <FiChevronLeft className="text-2xl text-[#0C1622]" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-6"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#F9F8F4] rounded-2xl p-8 min-w-[320px] md:min-w-[400px] flex-shrink-0"
            >
              <p className="text-[#0C1622]/90 text-lg leading-relaxed mb-6">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-gray-300 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0C1622] text-lg">
                    {t.name}
                  </h3>
                  <p className="text-[#0C1622]/60 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-gray-300"
        >
          <FiChevronRight className="text-2xl text-[#0C1622]" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;