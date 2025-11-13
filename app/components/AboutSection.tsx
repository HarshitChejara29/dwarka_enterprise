"use client";

import { FC } from "react";
import Link from "next/link";

const AboutSection: FC = () => {
  return (
    <section className="w-full">
      {/* Vision Section */}
      <div className="relative bg-[url('/about/our-vision.png')] bg-cover bg-center py-20 px-6 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            To be India’s top HVAC partner, driving innovation, sustainability, 
            and comfort for a brighter, greener future.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Our Products →
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative bg-[#0b1722] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Delivering excellence in HVAC solutions, we create healthier, efficient 
            indoor spaces, exceeding client expectations across India.
          </p>
          <Link
            href="/projects"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            See Our Projects →
          </Link>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="relative bg-[url('/about/core-values.png')] bg-cover bg-center py-20 px-6 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Excellence, Innovation, Customer Focus, Integrity, Sustainability, 
            Safety, Teamwork, Adaptability, Community Engagement.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;