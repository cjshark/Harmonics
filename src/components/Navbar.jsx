import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navitems = ["home", "shop", "contact", "about"];

  return (
    <>
      <nav className="max-w-full flex justify-between items-center py-3 px-10 sticky top-0 h-20 bg-background z-50">
        {/* Logo */}
        <div className="flex font-bold">
          <span className="cursor-default text-white text-xl">HARM</span>
          <span className="cursor-default text-xl text-primary">ONICS</span>
        </div>

        {/* lg Nav Items */}
        <ul className="hidden lg:flex gap-10">
          {navitems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActive(item)}
                className={`inline-block cursor-pointer capitalize text-md font-semibold hover:underline hover:underline-offset-8 decorations-red-[#FF3C38] transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  active === item
                    ? "text-[#FF3C38] scale-105 font-bold underline underline-offset-8 decoration-red-[#FF3C38]"
                    : "text-white"
                } hover:text-[#FF3C38]`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <button className="border border-[#FF3C38] py-2 px-3 font-bold w-30 text-sm text-white rounded-3xl hover:bg-[#FF3C38] transition-all duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </div>

        {/* mobile Menu Icon */}
        <div className="flex lg:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <Menu color="white" size={28} />
          </button>
        </div>
      </nav>

      {/* mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-600">
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
                className={`cursor-pointer capitalize text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  active === item ? "text-[#FF3C38]" : "text-white"
                } hover:text-[#FF3C38]`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full border border-[#FF3C38] py-2 px-3 font-semibold text-md text-white rounded-3xl hover:bg-[#FF3C38] transition">
              Login
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
