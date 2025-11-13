import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative w-full h-[200px] md:h-[250px] flex items-center">
      {/* Background Image */}
      <Image
        src="/products/product-hero.png"
        alt="Contact Hero Background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay Text */}
      <div className="relative z-10 w-full h-full flex items-center px-6 lg:px-20">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">Our Products</h1>
      </div>
    </section>
  );
}