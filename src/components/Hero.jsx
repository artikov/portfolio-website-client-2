import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-primary">
      {/* Contianer */}
      <div className="max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          SAMJOT SINGH
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am an enthusiastic and highly-driven individual, with a strong work
          ethic and dedication to producing results of the utmost quality. I
          have strong capabilities in web programming and implementation, based
          upon organizational talent acquisition needs.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-400">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
