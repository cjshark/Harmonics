import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import colors from "../assets/colors";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-12 px-4 sm:px-12 border-t border-primary"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-3xl font-extrabold">
            HAR<span className="text-[#FF3C38]">MONICS</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Unleash your inner rockstar. Explore gear, stories, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#FF3C38] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FF3C38]"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="shop"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FF3C38]"
              >
                Shop
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FF3C38]"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FF3C38]"
              >
                Blog
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-[#FF3C38] mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-2">Subscribe to our newsletter</p>
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded w-full text-black bg-white"
          />
          <button className="bg-[#FF3C38] text-white px-4 py-2 mt-2 rounded hover:opacity-90 w-full">
            Subscribe
          </button>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-[#FF3C38] mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
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
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-gray-500 border-t border-gray-700 pt-4 text-sm">
        © 2025 Harmonics. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
