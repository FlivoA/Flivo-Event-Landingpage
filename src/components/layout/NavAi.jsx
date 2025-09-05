import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const NavAi = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // or bg-transparent
    <nav className="fixed top-0 left-0 w-full z-50 text-white p-2 px-6  bg-[#00000072] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/pngs/flivo.png" alt="Logo" className="h-10 w-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-20 font-semibold text-lg">
          <Link to="/">Home</Link>
          <Link to="/ai/speaker">Speakers</Link>
          <Link to="/ai/agenda">Agenda</Link>
          <Link to="/ai/faq">FAQ</Link>
        </div>

        <div className=" hidden md:block border bg-gradient-to-r from-[#60A5FA] to-[#396294] border-white px-6 py-2 rounded shadow-xl/30 shadow-[#396294]">
          <button className="font-bold">Book Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border border-white rounded-full bg-black/40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-semibold text-lg bg-black/70 p-4 rounded-lg backdrop-blur-md">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/ai/speakers" onClick={() => setIsOpen(false)}>
            Speakers
          </Link>
          <Link to="/ai/agenda" onClick={() => setIsOpen(false)}>
            Agenda
          </Link>
          <Link to="/ai/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <div className=" border w-1/3 bg-gradient-to-r from-[#60A5FA] to-[#396294] border-white px-2 py-1 rounded shadow-xl/30 shadow-[#396294] text-center">
            <button className="font-bold">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavAi;
