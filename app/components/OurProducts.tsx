"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    src: "/products/split-ac.png",
    name: "Split Air Conditioner",
  },
  {
    src: "/products/1way-ac.png",
    name: "1 Way Air Conditioner",
  },
  {
    src: "/products/4way-ac.jpg",
    name: "4 Way Air Conditioner",
  },
  {
    src: "/products/duct-ac.jpg",
    name: "Duct Air Conditioner",
  },
  {
    src: "/products/precision-ac.jpg",
    name: "Precision Air Conditioning",
  },
];

const OurProducts = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0C1622]">
          Our products
        </h2>
        <p className="text-[#0C1622]/70 text-center md:text-right max-w-xl">
          Discover top-quality HVAC products for ultimate comfort and efficiency.
        </p>
      </div>

      {/* Scrollable Product Cards */}
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative min-w-[250px] sm:min-w-[300px] lg:min-w-[320px] bg-white rounded-3xl overflow-hidden transition-all duration-300 snap-start"
          >
            {/* Product Image */}
            <div className="relative h-[420px] w-full">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 " />
            </div>

            {/* Text and Icon */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg leading-snug max-w-[70%]">
                {product.name}
              </h3>
              <button className="bg-[#0C1622] hover:bg-[#1B2838] text-white p-3 rounded-full transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scroll Line */}
      <div className="mt-4 w-full h-[3px] bg-gray-200 rounded-full relative">
        <div className="absolute top-0 left-0 h-[3px] w-1/3 bg-[#0C1622] rounded-full"></div>
      </div>
    </section>
  );
};

export default OurProducts;