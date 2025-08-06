"use client";

import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/SriSakthi.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide uppercase text-center sm:text-left">
            SRI <span className="text-red-600">SAKTHI</span> UNIFORMS
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 font-bold">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-600" />
            <span className="hover:text-red-600">+91 97861 97831</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-600" />
            <span className="hover:text-red-600">+91 97865 97835</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
