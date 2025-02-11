import React from "react";
import {Button} from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full px-4 py-4 h-[calc(100vh-80px)] min-h-[375px] flex items-start justify-start bg-cover bg-center bg-hero-image h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 py-40 px-5 text-white flex flex-col items-start w-[600] ">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold font-sarabun uppercase leading-tight items-start text-left text-[#A28854]">
          Our Speciality
          Finest Diamond, Gold & Silver Jewellery
        </h1>

        <Button className="mt-6 px-6 py-2 mx-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition bg-[#1C1C10] text-[#8C7C5C] ">
          Explore Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
