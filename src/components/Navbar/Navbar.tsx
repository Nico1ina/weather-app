import React, { useState } from "react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About", href: "http://www.google.se" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1a1818] font-thin ">
      <h1 className="w-full text-3xl uppercase">
        <a href="/">Weather Forecast</a>
      </h1>

      {/* Desktop Navigation */}
      <ul className="flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 m-2 cursor-pointer duration-300 hover:underline ${
              item.text === "About" ? "hidden md:block" : ""
            }`}
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden"></div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-lg md:text-3xl font-bold text-[#1a1818] m-4">
          Weather Forecast.
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
