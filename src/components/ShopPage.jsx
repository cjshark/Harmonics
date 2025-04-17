// ShopPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = Array(8).fill({
  name: "Fender Stratocaster",
  price: "$799.99",
  image: "image/Fender Stratocaster.jpeg",
  rating: 4.5,
  category: "Electric Guitar",
});

const categories = [
  "All",
  "Electric Guitars",
  "Acoustic Guitars",
  "Bass Guitars",
  "Amps",
  "Pedals",
  "Accessories",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-black text-white min-h-screen py-10 px-6 md:px-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-red-400 hover:text-white transition-all"
      >
        <FaArrowLeft /> Back
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
          Shop Premium Instruments
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our handpicked selection of guitars and gear that hit all the
          right notes.
        </p>
      </motion.div>

      {/* Search & Categories */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-red-500 text-white border-red-500"
                  : "text-red-400 border-red-500 hover:bg-red-500 hover:text-white"
              } transition-all text-sm`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative mt-4 md:mt-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-zinc-900 text-white px-4 py-2 pl-10 rounded-lg border border-zinc-700 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
            className="bg-zinc-900 border border-red-500 rounded-xl p-4 shadow-md hover:shadow-red-500/30 transition-shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <p className="text-red-400 text-lg mt-1">{product.price}</p>
            <div className="flex items-center text-yellow-400 text-sm mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? "" : "opacity-30"}
                />
              ))}
              <span className="ml-2 text-gray-400 text-xs">
                ({product.rating})
              </span>
            </div>
            <button className="mt-auto px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
