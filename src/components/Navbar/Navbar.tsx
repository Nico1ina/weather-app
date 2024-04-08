import { useState } from "react";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About" },
  ];

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#1a1818] font-thin ">
      <h1 className="w-full text-xl sm:text-3xl uppercase">
        <a href="/">Weather Forecast</a>
      </h1>
      <ul className="flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 m-2 cursor-pointer duration-300 hover:underline ${
              item.text === "About" ? "relative" : ""
            }`}
            onMouseEnter={item.text === "About" ? handleMouseEnter : undefined}
            onMouseLeave={item.text === "About" ? handleMouseLeave : undefined}
          >
            <a href={item.href}>{item.text}</a>
            {item.text === "About" && showPopup && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white text-black p-2 shadow-sm">
                <p>
                  This is a project built with React TypeScript to showcase in
                  my portfolio.
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
