"use client";
import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const whyData = [
  {
    icon: "/icons/expertise.svg",
    title: "Expertise",
    desc: "Our seasoned engineers provide HVAC solutions for optimal performance.",
  },
  {
    icon: "/icons/quality.svg",
    title: "Quality Assurance",
    desc: "Partnering with LG ensures industry-leading products and standards.",
  },
  {
    icon: "/icons/customer.svg",
    title: "Customer-Centric",
    desc: "We prioritize your unique needs and exceed expectations.",
  },
  {
    icon: "/icons/sustainability.svg",
    title: "Sustainability",
    desc: "We reduce your carbon footprint and operational costs.",
  },
  {
    icon: "/icons/innovation.svg",
    title: "Innovation",
    desc: "Stay ahead with cutting-edge, energy-efficient technology.",
  },
];

const WhyDwarka = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0C1622] text-white rounded-3xl px-6 md:px-10 lg:px-16 py-16 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold">Why Dwarka</h2>
        <button className="border border-white text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-white hover:text-[#0C1622] transition">
          Know More →
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0C1622] p-2 rounded-full shadow-md"
        >
          <FiChevronLeft className="text-2xl text-white" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {whyData.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[280px] bg-white text-[#0C1622] rounded-2xl p-6 flex-shrink-0 shadow-md"
            >
              <div className="flex flex-col gap-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0C1622]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0C1622] p-2 rounded-full shadow-md"
        >
          <FiChevronRight className="text-2xl text-white" />
        </button>
      </div>
    </section>
  );
};

export default WhyDwarka;