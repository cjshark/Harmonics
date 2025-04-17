// Updated Shop.jsx with View More button
import React from "react";
import { FaTags, FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaBasketballBall, FaShoppingCart, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const brand = [
  { name: "Yamaha", logo: "logos/yamahacorporation.svg" },
  { name: "Nike", logo: "logos/nike.svg" },
  { name: "Adidas", logo: "logos/adidas.svg" },
  { name: "Under Armour", logo: "logos/underarmour.svg" },
  { name: "Fila", logo: "logos/fila.svg" },
  { name: "Puma", logo: "logos/puma.svg" },
  { name: "Reebok", logo: "logos/reebok.svg" },
  { name: "New Balance", logo: "logos/newbalance.svg" },
  { name: "Sony", logo: "logos/sony.svg" },
  { name: "Sennheiser", logo: "logos/sennheiser.svg" },
  { name: "Bose", logo: "logos/bose.svg" },
  { name: "Audio-Technica", logo: "logos/audiotechnica.svg" },
  { name: "Logitech", logo: "logos/logitech.svg" },
];

const products = [
  {
    name: "Yamaha",
    price: "₱15,000",
    description: "APX600 BL Thin Body Acoustic-Electric Guitar, Black",
    image: "image/fender-guitar.jpeg",
  },
  {
    name: "Pearl",
    price: "₱35,000",
    description:
      "Pearl Roadshow 5-Piece Complete Drum Set with Cymbals - 22 Inches Kick - Charcoal Metallic",
    image: "image/pearl-drum.jpeg",
  },
  {
    name: "Fender",
    price: "₱17,999",
    description: "Peavey T-60 with Maple Fretboard 1978 - 1988 - Sunburst",
    image: "image/fender-guitar.jpeg",
  },
  {
    name: "Yamaha",
    price: "₱15,000",
    description: "APX600 BL Thin Body Acoustic-Electric Guitar, Black",
    image: "image/fender-guitar.jpeg",
  },
  {
    name: "Pearl",
    price: "₱35,000",
    description:
      "Pearl Roadshow 5-Piece Complete Drum Set with Cymbals - 22 Inches Kick - Charcoal Metallic",
    image: "image/pearl-drum.jpeg",
  },
  {
    name: "Fender",
    price: "₱17,999",
    description: "Peavey T-60 with Maple Fretboard 1978 - 1988 - Sunburst",
    image: "image/fender-guitar.jpeg",
  },
];

const Shop = () => {
  return (
    <div className="bg-background text-white py-8 min-h-screen">
      <section>
        {/* Marquee */}
        <div className="marquee-wrapper w-full border-t-2 border-b-2 border-p py-5 mb-30">
          <div className="marquee-track flex gap-10 px-8 whitespace-nowrap scrollbar-hide">
            {[...brand, ...brand, ...brand].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 mr-10 min-w-fit"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 object-contain invert"
                />
                <span className="text-white font-semibold whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="py-6 px-4 lg:px-20">
          <h2 className="text-5xl font-bold text-heading mt-6">
            Featured Products
          </h2>
          <div className="flex  justify-between mb-8">
            <p className="text-p mb-6 mt-2 text-xl">
              Get yours Now! <span className="inline-block ml-2">⬇️</span>
            </p>
            <Link
              to="/shop"
              className=" flex items-center justify-end text-primary font-semibold text-lg hover:text-white  transition-all"
            >
              View More
              <div className="ml-3">
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={4}
              spaceBetween={24}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ el: ".swiper-pagination-custom", clickable: true }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              breakpoints={{
                300: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="py-4"
            >
              {products.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-[300px] h-[350px] border border-white rounded-2xl p-4 bg-black shadow-md flex flex-col relative mx-auto">
                    <div className="absolute top-4 left-4 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <div className="flex justify-center mt-8 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-left mt-2 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-primary font-semibold">
                        {product.price}
                      </p>
                      <button className="bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center hover:bg-primary hover:text-white transition-all">
                        Buy Now <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 border-2 border-red-600 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              &larr;
            </button>
            <button className="custom-next absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 border-2 border-red-600 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              &rarr;
            </button>
          </div>

          {/* Pagination & View More */}
          <div className="swiper-pagination-custom mt-7 gap-3 flex justify-center"></div>
        </div>
      </section>

      {/* Promo Section */}
      <motion.section
        className="relative min-h-screen bg-[url('/image/advertisementbg.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4 sm:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center space-y-10 text-center">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 px-6 py-3 rounded-xl bg-black/80 border border-red-500 shadow-lg backdrop-blur-sm"
          >
            <FaTags size={30} className="text-red-500" />
            <h1 className="text-lg md:text-2xl text-white font-semibold">
              Get <span className="text-red-400">15% Off</span> only for today,{" "}
              <span className="underline">Shop now</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: "90deg" }}
            whileInView={{ opacity: 1, scale: 1, rotateX: "0deg" }}
            transition={{ duration: 1.5 }}
            className="space-y-3"
          >
            <div className="flex justify-center items-center gap-3">
              <FaBasketballBall
                size={35}
                className="text-orange-400 drop-shadow"
              />
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
                SCORE BIG WITH
              </h2>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-500">
              Our
            </h2>
            <div className="flex justify-center items-center gap-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md ml-15">
                BASKETBALL PROMO
              </h2>
              <FaTrophy size={35} className="text-yellow-400 drop-shadow" />
            </div>
          </motion.div>
          <motion.button
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6 flex items-center gap-3 px-8 py-4 rounded-full text-lg md:text-xl font-bold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaShoppingCart size={22} />
            BUY NOW
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Shop;
