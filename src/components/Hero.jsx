import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import colors from "../assets/colors";
import guitar from "../../public/image/guitar.png";

const Hero = () => {
  return (
    <div className="w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start justify-center p-4 space-y-3">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          <h6>Keep Fit & Strum</h6>
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          <h6>The beat of your Heart</h6>
        </div>
        <h6 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Strings
        </h6>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-5 text-left text-p">
          Shop the best instruments and gear at{" "}
          <span className="text-primary font-bold">HARMONICS</span> Today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-6">
          <button className="px-6 py-3 w-full sm:w-40 border-2 border-primary text-heading font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
          <button className="px-6 py-3 w-full sm:w-40 bg-primary text-white font-semibold rounded-2xl hover:bg-transparent hover:text-white border border-primary transition-all duration-300 ease-in-out transform hover:scale-105">
            Buy Now
          </button>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 items-center mt-6">
          <a
            href="#"
            className="bg-gradient-to-br from-[#1877F2] to-[#4267B2] p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaFacebook size={24} color={colors.white} />
          </a>
          <a
            href="#"
            className="bg-[linear-gradient(45deg,#f58529,#dd2a7b,#515bd4)] p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaInstagram size={24} color={colors.white} />
          </a>
          <a
            href="#"
            className="bg-gradient-to-br from-[#1DA1F2] to-[#0d8ddb] p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <FaTwitter size={24} color={colors.white} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center relative mb-10 lg:mb-0 group ">
        <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full blur-2xl bg-orange-500 opacity-0 group-hover:opacity-60 transition duration-500 z-0 animate-flame" />
        <img
          src={guitar}
          alt="guitar"
          className="w-md sm:mt-9  sm:w-md md:w-lg lg:w-[28rem] xl:w-[32rem] relative z-10 transition-all duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
