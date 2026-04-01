"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          ZiyadBooks
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
          Explore thousands of books, find your next favorite read, 
          and enjoy a seamless reading experience anytime, anywhere.
        </p>
      </div>
    </section>
  );
}