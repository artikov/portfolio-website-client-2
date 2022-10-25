import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div className="w-[70px]">
        <img src={Logo} alt="Logo" />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* HAMBURGER */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* SOCIALS */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
