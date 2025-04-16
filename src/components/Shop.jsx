import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const brand = [
  { name: "Yamaha", logo: "/logos/yamahacorporation.svg" },
  { name: "Nike", logo: "/logos/nike.svg" },
  { name: "Adidas", logo: "/logos/adidas.svg" },
  { name: "Under Armour", logo: "/logos/underarmour.svg" },
  { name: "Fila", logo: "/logos/fila.svg" },
  { name: "Puma", logo: "/logos/puma.svg" },
  { name: "Reebok", logo: "/logos/reebok.svg" },
  { name: "New Balance", logo: "/logos/newbalance.svg" },
  { name: "Sony", logo: "/logos/sony.svg" },
  { name: "Sennheiser", logo: "/logos/sennheiser.svg" },
  { name: "Bose", logo: "/logos/bose.svg" },
  { name: "Audio-Technica", logo: "/logos/audiotechnica.svg" },
  { name: "Logitech", logo: "/logos/logitech.svg" },
];

const products = [
  {
    name: "Yamaha",
    price: "₱15,000",
    description: "APX600 BL Thin Body Acoustic-Electric Guitar, Black",
    image: "/public/image/fender-guitar.jpeg",
  },
  {
    name: "Pearl",
    price: "₱35,000",
    description:
      "Pearl Roadshow 5-Piece Complete Drum Set with Cymbals - 22 Inches Kick - Charcoal Metallic",
    image: "/public/image/pearl-drum.jpeg",
  },
  {
    name: "Fender",
    price: "₱17,999",
    description: "Peavey T-60 with Maple Fretboard 1978 - 1988 - Sunburst",
    image: "/public/image/fender-guitar.jpeg",
  },
  {
    name: "Yamaha",
    price: "₱15,000",
    description: "APX600 BL Thin Body Acoustic-Electric Guitar, Black",
    image: "/public/image/fender-guitar.jpeg",
  },
  {
    name: "Pearl",
    price: "₱35,000",
    description:
      "Pearl Roadshow 5-Piece Complete Drum Set with Cymbals - 22 Inches Kick - Charcoal Metallic",
    image: "/public/image/pearl-drum.jpeg",
  },
  {
    name: "Fender",
    price: "₱17,999",
    description: "Peavey T-60 with Maple Fretboard 1978 - 1988 - Sunburst",
    image: "/public/image/fender-guitar.jpeg",
  },
];

const Shop = () => {
  return (
    <div className="bg-background text-white py-8">
      {/* Marquee */}
      <div className="marquee-wrapper w-full border-t-2 border-b-2 border-p py-5 mb-30">
        <div className="marquee-track flex gap-24 px-8 whitespace-nowrap scrollbar-hide">
          {[...brand, ...brand, ...brand, ...brand].map((item, idx) => (
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
        <p className="text-p mb-6 mt-2 text-xl">
          Get yours Now! <span className="in  line-block ml-2">⬇️</span>
        </p>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ el: ".swiper-pagination-custom", clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
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

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom mt-7 gap-3 flex justify-center" />
      </div>
    </div>
  );
};

export default Shop;
