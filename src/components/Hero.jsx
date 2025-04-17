import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import guitar from "/image/guitar.png";
import colors from "../assets/colors";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 sm:px-10 md:px-16 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start justify-center space-y-5 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Keep Fit & Strum
          <br />
          <span className="text-primary">The beat of your Heart</span>
          <br />
          Strings
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">
          Shop the best instruments and gear at{" "}
          <span className="text-primary font-bold">HARMONICS</span> today.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap mt-6">
          <button className="px-6 py-3 rounded-full border-2 border-primary text-white hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out hover:shadow-xl">
            Learn More
          </button>
          <button className="px-6 py-3 rounded-full border border-primary bg-primary text-white font-semibold hover:bg-transparent hover:text-white  transition-all duration-300 ease-in-out hover:shadow-xl">
            Buy Now
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center mt-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877F2] hover:scale-110 transition duration-300 shadow-md"
          >
            <FaFacebookF size={20} color={colors.white} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition duration-300 shadow-md"
          >
            <FaInstagram size={20} color={colors.white} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1DA1F2] hover:scale-110 transition duration-300 shadow-md"
          >
            <FaTwitter size={20} color={colors.white} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center relative mb-12 lg:mb-0">
        {/* Flame Aura */}
        <div className="absolute w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem] bg-orange-500 blur-3xl opacity-50 rounded-full animate-pulse z-0" />
        {/* Guitar Image */}
        <img
          src={guitar}
          alt="Burning Guitar"
          className="relative z-10 w-[16rem] sm:w-[20rem] lg:w-[26rem] hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
