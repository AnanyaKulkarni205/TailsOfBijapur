import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaInstagram,FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
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
          <NavLink to="/awareness" className={linkClass}>Awareness</NavLink>
          {/*<NavLink to="/surrender" className={linkClass}>Rescue</NavLink> */}
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
          {["About","Adopt","Volunteer","Awareness","Contact","Veterinary Support"].map((item) => (
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
    <footer className="relative bg-[#FAF7F2] border-t border-[#E7E1D8] mt-24">

      {/* Soft top curve accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F3EDE3] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Brand Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#E7E1D8] bg-white flex items-center justify-center shadow-sm">
              <img
                src="/icons/logo.jpg"
                alt="Tails of Bijapur"
                className="w-7 h-7 object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#1F2933]">
              Tails of Bijapur
            </h2>
          </div>

          <p className="text-sm text-[#4B5563] leading-relaxed max-w-xs">
            A community-driven initiative dedicated to rescue, treatment,
            rehabilitation, and responsible rehoming of animals in need.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/tailsofbijapur"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E7E1D8] text-[#C2410C] hover:bg-[#C2410C] hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-5 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><NavLink to="/" className="text-[#4B5563] hover:text-[#C2410C] transition">Home</NavLink></li>
            <li><NavLink to="/about" className="text-[#4B5563] hover:text-[#C2410C] transition">About</NavLink></li>
            <li><NavLink to="/why-adopt" className="text-[#4B5563] hover:text-[#C2410C] transition">Why Adopt</NavLink></li>
            <li><NavLink to="/contact" className="text-[#4B5563] hover:text-[#C2410C] transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-5 uppercase tracking-wider">
            Get Involved
          </h3>
          <ul className="space-y-3 text-sm">
            <li><NavLink to="/adopt" className="text-[#4B5563] hover:text-[#C2410C] transition">Adopt</NavLink></li>
            <li><NavLink to="/volunteer" className="text-[#4B5563] hover:text-[#C2410C] transition">Volunteer</NavLink></li>
            <li><NavLink to="/surrender" className="text-[#4B5563] hover:text-[#C2410C] transition">Surrender</NavLink></li>
            <li><NavLink to="/doctors" className="text-[#4B5563] hover:text-[#C2410C] transition">Veterinary Support</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-[#1F2933] mb-5 uppercase tracking-wider">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-[#4B5563]">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#C2410C]" />
              <span>Bijapur, Karnataka</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C2410C]" />
              <span>+91 81230 38270</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#C2410C]" />
              <span>tailsofbijapur@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E7E1D8] text-center py-5 text-xs sm:text-sm text-[#6B7280] bg-[#F8F4EE]">
        © {new Date().getFullYear()} Tails of Bijapur. All rights reserved.
        <br />
        Designed & developed by{" "}
        <a
          href="https://www.linkedin.com/in/ananya-kulkarni-234459370"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[#C2410C] transition"
        >
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
