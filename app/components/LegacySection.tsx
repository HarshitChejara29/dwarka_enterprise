"use client";

import Image from "next/image";
import { FC } from "react";

const LegacySection: FC = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white rounded-2xl overflow-hidden my-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/legacy-bg.jpg" // 🖼️ Replace with your actual image path
          alt="Our Legacy - HVAC work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Legacy</h2>
        <p className="text-lg leading-relaxed text-gray-100">
          At Dwarka Enterprise, our legacy is built on{" "}
          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full">
            trust
          </span>
          , quality, and a{" "}
          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full">
            commitment to excellence
          </span>
          . For over 20 years, we’ve had the privilege of serving our community,
          providing reliable heating and cooling solutions that improve lives.
          As we continue to grow and innovate, we remain dedicated to our core
          values:{" "}
          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full">
            Integrity
          </span>
          , customer satisfaction, and a passion for delivering exceptional
          service. Our legacy is a testament to the hard work and dedication of
          our team, and we’re honored to have shared it with our customers.
        </p>
      </div>
    </section>
  );
};

export default LegacySection;