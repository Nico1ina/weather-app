const Navbar = () => {
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About", href: "http://www.google.se" },
  ];

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
              item.text === "About" ? "hidden sm:block" : ""
            }`}
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
