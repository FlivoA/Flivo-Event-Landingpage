import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react or use your own icons

const NavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "AI Software",
    "Industries",
    "Customers",
    "Resources",
    "KnowledgeBase",
    "Events",
  ];

  return (
    <nav className="bg-[#181818] text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/flivo.png" alt="Logo" height={134} width={144} />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-gray-300 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
          <button className="ml-6 px-5 py-2 bg-[#181818] border border-white cursor-pointer transition font-medium text-sm">
            Contact Us
          </button>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-2">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li
                key={link}
                className="hover:text-gray-300 cursor-pointer transition"
              >
                {link}
              </li>
            ))}
            <button className="mt-2 px-5 py-2 bg-[#181818] border border-white cursor-pointer transition font-medium text-sm w-fit">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarMain;
