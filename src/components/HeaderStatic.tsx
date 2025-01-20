import React, { useState } from "react";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative top-0 left-0 w-full z-50 bg-white shadow-md fixedtio">
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Hamburger Menu */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Logo */}
        <div className="text-center">
          <img
            src={`https://reeldekho.com/assets/vert.jpeg`}
            alt="Logo"
            className="h-8 object-contain mx-auto"
          />
        </div>

        {/* Notification Icon */}
        <div>
          <button className="text-gray-800 focus:outline-none">
            <FaBell className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col mt-4">
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Home
          </li>
          <Link to='/saved'>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Saved
          </li>
          </Link>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Settings
          </li>
          <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
