"use client";

import Image from "next/image";
import { FC } from "react";

const StatsSection: FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "1,482+", label: "Satisfied Clients" },
            { value: "350+", label: "Finished Projects" },
            { value: "85,000+", label: "Tonnage Ac’s" },
            { value: "35,000+", label: "HP" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/hvac-worker.jpg" // 🖼️ Replace with your image path
              alt="HVAC worker"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;