'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Hospitals', 'Industries', 'Education', 'Corporate & Government'];

const projects = [
  { src: '/projects/hospitals/hospital1.jpg', category: 'Hospitals' },
  { src: '/projects/hospitals/hospital2.jpg', category: 'Hospitals' },
  { src: '/projects/industries/industry1.jpg', category: 'Industries' },
  { src: '/projects/education/education6.jpg', category: 'Education' },
  { src: '/projects/hospitals/hospital10.png', category: 'Hospitals' },
  { src: '/projects/industries/industry5.jpg', category: 'Industries' },
  { src: '/projects/industries/industry2.png', category: 'Industries' },
  { src: '/projects/hospitals/hospital5.png', category: 'Hospitals' },
  { src: '/projects/education/education1.png', category: 'Education' },
  { src: '/projects/industries/industry4.png', category: 'Industries' },
  { src: '/projects/corporate/corporate10.png', category: 'Corporate & Government' },
  { src: '/projects/hospitals/hospital9.png', category: 'Hospitals' },
  { src: '/projects/education/education2.png', category: 'Education' },
  { src: '/projects/hospitals/hospital6.jpg', category: 'Hospitals' },
  { src: '/projects/corporate/corporate1.jpg', category: 'Corporate & Government' },
  { src: '/projects/corporate/corporate2.jpg', category: 'Corporate & Government' },
  { src: '/projects/corporate/corporate3.jpg', category: 'Corporate & Government' },
  { src: '/projects/education/education5.jpg', category: 'Education' },
  { src: '/projects/hospitals/hospital7.png', category: 'Hospitals' },
  { src: '/projects/corporate/corporate9.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry3.jpg', category: 'Industries' },
  { src: '/projects/hospitals/hospital3.png', category: 'Hospitals' },
  { src: '/projects/education/education3.jpg', category: 'Education' },
  { src: '/projects/corporate/corporate4.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry6.jpg', category: 'Industries' },
  { src: '/projects/hospitals/hospital4.png', category: 'Hospitals' },
  { src: '/projects/corporate/corporate5.png', category: 'Corporate & Government' },
  { src: '/projects/hospitals/hospital8.png', category: 'Hospitals' },
  { src: '/projects/education/education4.png', category: 'Education' },
  { src: '/projects/industries/industry7.png', category: 'Industries' },
  { src: '/projects/corporate/corporate6.png', category: 'Corporate & Government' },
  { src: '/projects/corporate/corporate7.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry8.png', category: 'Industries' },
  { src: '/projects/corporate/corporate8.png', category: 'Corporate & Government' },
  { src: '/projects/education/education7.jpg', category: 'Education' },
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-18 px-6 lg:px-20">
      <div className="">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-3 mb-18">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 rounded-lg text-sm font-medium border transition ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
                src={project.src}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="flex justify-center mt-18">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}