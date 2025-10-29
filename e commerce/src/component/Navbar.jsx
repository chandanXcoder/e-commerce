import React, { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition"
        >
          ShopEase
        </Link>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-80">
          <Search className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent focus:outline-none w-full text-gray-700"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-6 mt-2">
              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
