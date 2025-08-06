"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "School Uniforms", href: "/school" },
  { name: "Womens Uniforms", href: "/women" },
  { name: "Mens Uniforms", href: "/men" },
  { name: "Company Uniforms", href: "/company" },
  { name: "Hospital Uniforms", href: "/hospital" },
  { name: "Hotel Uniforms", href: "/hotel" },
  { name: "Other Uniforms", href: "/others" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full bg-gray-900 text-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="text-xl font-bold">Sri Shakti</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 rounded-lg p-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm rounded hover:bg-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
