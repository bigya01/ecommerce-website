import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full px-4 py-4 h-[calc(100vh-80px)] min-h-[375px] flex items-start justify-start bg-cover bg-center bg-hero-image h-screen">
      <div className="relative z-10 py-40 px-5 text-white flex flex-col items-start w-[600] ">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-sarabun uppercase leading-tight items-start text-left text-[#8C7C5C]">
          Our Speciality
          Finest Diamond, Gold & Silver Jewellery
        </h1>

        <button className="mt-6 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
