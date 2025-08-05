"use client";
import Link from "next/link";

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
  return (
    <div className="w-full">
      <nav className="bg-gray-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-4 h-14">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-700 ${
                item.name === "Home" ? "bg-blue-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
