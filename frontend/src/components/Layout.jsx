import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#C2410C] font-medium"
      : "text-[#1F2933] hover:text-[#C2410C] transition";

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border border-[#E7E1D8] bg-white flex items-center justify-center">
            <img
              src="/icons/logo.jpg"
              alt="Tails of Bijapur"
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#1F2933]">
            Tails of Bijapur
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/adopt" className={linkClass}>Adopt</NavLink>
          <NavLink to="/volunteer" className={linkClass}>Volunteer</NavLink>
          <NavLink to="/surrender" className={linkClass}>Rescue</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/doctors" className={linkClass}>Veterinary Support</NavLink>

          <NavLink
            to="/contact"
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#C2410C] rounded-md hover:bg-[#9A3412] transition"
          >
            Report an Animal
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1F2933]"
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E7E1D8] px-6 py-4 space-y-4 text-sm">
          {["About","Adopt","Volunteer","Rescue","Contact","Veterinary Support"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E7E1D8] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#E7E1D8] bg-white flex items-center justify-center">
              <img src="/icons/logo.jpg" alt="Tails of Bijapur" className="w-6 h-6 object-contain"/>
            </div>
            <h2 className="text-lg font-semibold text-[#1F2933]">Tails of Bijapur</h2>
          </div>
          <p className="text-sm text-[#4B5563] leading-relaxed max-w-xs">
            Community-driven initiative focused on rescue, on-spot treatment, rehabilitation, and responsible rehoming of animals in need.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.instagram.com/tailsofbijapur?igsh=MWRka3hpMzA1d2UxNw=="
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E7E1D8] text-[#C2410C] hover:bg-[#C2410C] hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-4 uppercase tracking-wide">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="text-[#4B5563] hover:text-[#C2410C]">Home</NavLink></li>
            <li><NavLink to="/about" className="text-[#4B5563] hover:text-[#C2410C]">About</NavLink></li>
            <li><NavLink to="/why-adopt" className="text-[#4B5563] hover:text-[#C2410C]">Why Adopt</NavLink></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-4 uppercase tracking-wide">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/adopt" className="text-[#4B5563] hover:text-[#C2410C]">Adopt</NavLink></li>
            <li><NavLink to="/volunteer" className="text-[#4B5563] hover:text-[#C2410C]">Volunteer</NavLink></li>
            <li><NavLink to="/surrender" className="text-[#4B5563] hover:text-[#C2410C]">Surrender</NavLink></li>
            <li><NavLink to="/doctors" className="text-[#4B5563] hover:text-[#C2410C]">Veterinary Support</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-4 uppercase tracking-wide">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/contact" className="text-[#4B5563] hover:text-[#C2410C]">Contact</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E7E1D8] text-center py-4 text-xs sm:text-sm text-[#6B7280]">
        © {new Date().getFullYear()} Tails of Bijapur. All rights reserved. <br />
        Designed & developed by{" "}
        <a href="https://www.linkedin.com/in/ananya-kulkarni-234459370" target="_blank" rel="noreferrer" className="underline hover:text-[#C2410C]">
          Ananya Kulkarni
        </a>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
