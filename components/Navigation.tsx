"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  // Helper function to check active link styling
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-zinc-950 text-white sticky top-0 z-50 border-b border-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-pink-500 flex items-center gap-2"
        >
          <i className="fa-solid fa-spa"></i>
          <span>Indigo Blossom Beauty</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link
            href="/"
            className={`transition ${isActive("/") ? "text-pink-500 font-semibold" : "hover:text-pink-400"}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition ${isActive("/about") ? "text-pink-500 font-semibold" : "hover:text-pink-400"}`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/services"
              className={`transition flex items-center gap-1 py-2 ${
                pathname.startsWith("/services") ||
                pathname === "/services/facials" ||
                pathname === "/services/nails" ||
                pathname === "/services/massages" ||
                pathname === "/services/lashes-brows"
                  ? "text-pink-500 font-semibold"
                  : "hover:text-pink-400"
              }`}
            >
              Services <i className="fa-solid fa-chevron-down text-xs"></i>
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-52 bg-zinc-900 border border-zinc-800 shadow-xl rounded py-2 flex flex-col gap-1 z-50">
                <Link href="/services" className="px-4 py-2 hover:bg-zinc-800 hover:text-pink-400">
                  All Services & Pricing
                </Link>
                <Link
                  href="/services/facials"
                  className="px-4 py-2 hover:bg-zinc-800 hover:text-pink-400"
                >
                  Facials & Advanced Skin
                </Link>
                <Link
                  href="/services/massages"
                  className="px-4 py-2 hover:bg-zinc-800 hover:text-pink-400"
                >
                  Soothing Massages
                </Link>
                <Link
                  href="/services/nails"
                  className="px-4 py-2 hover:bg-zinc-800 hover:text-pink-400"
                >
                  Nail Care & Pedicures
                </Link>
                <Link
                  href="/services/lashes-brows"
                  className="px-4 py-2 hover:bg-zinc-800 hover:text-pink-400"
                >
                  Lashes & Brows
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`transition ${isActive("/contact") ? "text-pink-500 font-semibold" : "hover:text-pink-400"}`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white transition shadow"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-6 flex flex-col gap-4 text-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-pink-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-pink-400 transition"
          >
            About
          </Link>

          <div className="flex flex-col gap-2 pl-4 border-l border-zinc-700 my-1">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-pink-400"
            >
              Services Overview
            </Link>
            <Link
              href="/services/facials"
              onClick={() => setIsOpen(false)}
              className="text-sm hover:text-pink-400"
            >
              Facials & Advanced Skin
            </Link>
            <Link
              href="/services/massages"
              onClick={() => setIsOpen(false)}
              className="text-sm hover:text-pink-400"
            >
              Soothing Massages
            </Link>
            <Link
              href="/services/nails"
              onClick={() => setIsOpen(false)}
              className="text-sm hover:text-pink-400"
            >
              Nail Care & Pedicures
            </Link>
            <Link
              href="/services/lashes-brows"
              onClick={() => setIsOpen(false)}
              className="text-sm hover:text-pink-400"
            >
              Lashes & Brows
            </Link>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-pink-400 transition"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-pink-600 hover:bg-pink-700 py-2 rounded text-center text-white transition mt-2"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
