import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navitems = ["home", "shop", "about", "blog"];

  return (
    <>
      <nav className="max-w-full flex justify-between items-center py-4 px-8 lg:px-16 sticky top-0 h-20 bg-black/90 backdrop-blur-md border-b border-[#FF3C38] z-50">
        {/* Logo */}
        <div className="flex font-extrabold text-xl">
          <span className="text-white">HARM</span>
          <span className="text-primary">ONICS</span>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navitems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActive(item)}
                className={`relative inline-block cursor-pointer capitalize text-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  active === item ? "text-primary font-bold" : "text-white"
                } group`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    active === item ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <button className="border border-primary py-2 px-5 w-30 rounded-full text-white font-semibold text-sm hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-lg ease-in-out transform hover:scale-110">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <Menu color="white" size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-primary">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <button onClick={() => setDrawerOpen(false)}>
            <X color="white" size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6">
          {navitems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setActive(item);
                  setDrawerOpen(false);
                }}
                className={`cursor-pointer capitalize text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  active === item ? "text-primary" : "text-white"
                } hover:text-primary`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full border border-primary py-2 px-4 rounded-full text-white font-semibold hover:bg-primary hover:text-black transition-all duration-300">
              Login
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
