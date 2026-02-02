import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";


const Nav = () => { 
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 font-bold text-white"
      : "block px-3 py-2 text-gray-50";

  return (
    <nav className="bg-orange-500 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <a href="/">
            <img
              src="/icons/logo.jpg"
              alt="Logo"
              className="h-10 w-10 object-contain cursor-pointer"
            />
          </a>
          <a href="/" className="text-2xl font-bold text-white">
            Tails of Bijapur
          </a>
        </div>

        {/* Hamburger menu button */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-2 text-white">
          <NavLink to="/adopt" className={linkClass}>Adopt</NavLink>
          <NavLink to="/about" className={linkClass}>About us</NavLink>
          <NavLink to="/volunteer" className={linkClass}>Volunteer</NavLink>
          {/* <NavLink to="/donate" className={linkClass}>Donate</NavLink> */}
          <NavLink to="/surrender" className={linkClass}>Rescue or Rehome</NavLink>
          <NavLink to="/contact" className={linkClass}>Report an incident</NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="sm:hidden bg-orange-400 px-4 py-3 space-y-3 text-white">
          <NavLink onClick={() => setOpen(false)} to="/adopt" className={linkClass}>Adopt</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About us</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/volunteer" className={linkClass}>Volunteer</NavLink>
          {/* <NavLink onClick={() => setOpen(false)} to="/donate" className={linkClass}>Donate</NavLink> */}
          <NavLink onClick={() => setOpen(false)} to="/surrender" className={linkClass}>Rescue or Rehome</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Report an incident</NavLink>
        </div>
      )}
    </nav>
  );
};

/* ---------------------------------------------------------------------------------------- */

import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-black-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div className="space-y-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/icons/logo.jpg"   
              className="w-10 h-10"
            />
            <h2 className="text-xl font-semibold text-black">
              Tails of Bijapur
            </h2>
          </div>

          {/* Description */}
          <p className="text-black text-sm leading-relaxed">
            We don't have any NGO, we just provide on-spot treatment by
            coordinating with doctors.
          </p>

          {/* Social Icons */}
          Stay connected on &nbsp;<a
            href="https://www.instagram.com/tailsofbijapur?igsh=MWRka3hpMzA1d2UxNw=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-bg-orange-500 hover:bg-[#132f40] transition"
          >
            <FaInstagram className="text-white" />
          </a>
        </div>

        {/* LINKS COLUMN 1 */}
        <div>
          <h3 className="text-black font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-black hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className=" text-black hover:text-orange-400">About</Link></li>
            <li><Link to="/why-adopt" className="text-black hover:text-orange-400">Why Adopt</Link></li>
          </ul>
        </div>

        {/* LINKS COLUMN 2 */}
        <div>
          <h3 className="text-black font-semibold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/adopt" className="text-black hover:text-orange-400">Adopt</Link></li>
            <li><Link to="/volunteer" className="text-black hover:text-orange-400">Volunteer</Link></li>
            <li><Link to="/surrender" className="text-black hover:text-orange-400">Surrender</Link></li>
          </ul>
        </div>

        {/* LINKS COLUMN 3 */}
        <div>
          <h3 className="text-black font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-black hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm text-black">
        © {new Date().getFullYear()} Tails of Bijapur. All rights reserved. <br />
        Designed and developed by{" "}
        <a
          href="https://www.linkedin.com/in/ananya-kulkarni-234459370"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-orange-400"
        >
          Ananya Kulkarni
        </a>
      </div>
    </footer>
  );
};






/* ---------------------------------------------------------------------------------------- */

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
