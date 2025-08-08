"use client";

import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/SriSakthi.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            priority
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide uppercase text-center sm:text-left">
            SRI <span className="text-red-600">SAKTHI</span> UNIFORMS
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 font-bold">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-600" />
            <span className="hover:text-red-600 hover:text-xl">
              +91 97861 97831
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-600" />
            <span className="hover:text-red-600 hover:text-xl">
              +91 97865 97835
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
