import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Company Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Company Profile
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Dwarka Enterprise is a nationally recognized HVAC turnkey
              contracting and supply company, providing comprehensive climate
              control solutions across residential, healthcare, corporate,
              educational, and industrial sectors throughout India. With decades
              of experience and partnerships with multiple leading global HVAC
              brands, we deliver integrated, energy-efficient, and future-ready
              systems designed to meet the highest standards of performance and
              reliability.
            </p>
            <p>
              Our strength lies in our end-to-end capability — from design and
              engineering to execution and maintenance. Supported by a team of
              seasoned professionals and certified engineers, Dwarka Enterprise
              ensures precision, quality, and operational excellence in every
              project we undertake, regardless of scale or complexity.
            </p>
            <p>
              We are committed to advancing sustainable and intelligent HVAC
              solutions that enhance comfort while reducing energy consumption
              and environmental impact. Our projects are designed to align with
              modern green-building standards and smart infrastructure
              requirements, ensuring long-term efficiency and value.
            </p>
            <p>
              At Dwarka Enterprise, we don’t just install HVAC systems — we
              engineer comfort, reliability, and trust. Our professional ethos
              and customer-first approach have made us one of India’s most
              dependable partners for turnkey HVAC solutions, setting benchmarks
              in quality, innovation, and performance.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Image Grid + Text */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/hvac1.jpg"
                alt="HVAC Unit"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
              <Image
                src="/images/hvac3.jpg"
                alt="HVAC Ducts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/hvac2.jpg"
                alt="HVAC Vent"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-64 mt-4 rounded-lg overflow-hidden">
              <Image
                src="/images/hvac4.jpg"
                alt="HVAC Pipes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* HVAC Solutions Title Overlay */}
          <div className="absolute bottom-0 right-0 translate-y-20">
            <h3 className="text-5xl md:text-6xl font-extrabold text-red-700 tracking-tight">
              HVAC
            </h3>
            <h3 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight -mt-2">
              SOLUTIONS
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}