import Image from "next/image";

const services = [
  { icon: "/contact/icons/maintenance.png", label: "Maintenance" },
  { icon: "/contact/icons/installation.png", label: "Installation" },
  { icon: "/contact/icons/renovation.png", label: "Renovation" },
  { icon: "/contact/icons/cooling.png", label: "Cooling" },
  { icon: "/contact/icons/safety.png", label: "Safety" },
//   { icon: "/contact/icons/safety.png", label: "Safety" },
];

export default function ServiceIconsBar() {
  return (
    <section className="w-full px-6 lg:px-20">
      <div className="border-t border-b border-[#16222E] py-4 flex items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center w-full"
          >
            <div className="flex items-center gap-3 justify-center mx-auto">
              <Image
                src={service.icon}
                alt={service.label}
                width={38}
                height={38}
              />
              <span className="text-lg font-semibold text-gray-900">
                {service.label}
              </span>
            </div>

            {/* Vertical divider (hidden on small screens) */}
            {index < services.length - 1 && (
              <div className="hidden md:block h-12 border-l border-[#16222E]"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}