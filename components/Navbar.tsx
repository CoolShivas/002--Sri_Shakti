// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "School Uniforms", href: "/school" },
//   { name: "Womens Uniforms", href: "/women" },
//   { name: "Mens Uniforms", href: "/men" },
//   { name: "Company Uniforms", href: "/company" },
//   { name: "Hospital Uniforms", href: "/hospital" },
//   { name: "Hotel Uniforms", href: "/hotel" },
//   { name: "Other Uniforms", href: "/others" },
//   { name: "Products", href: "/products" },
//   { name: "Contact", href: "/contact" },
//   { name: "About", href: "/about" }, // ✅ NEW
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <div className="w-full bg-gray-900 text-white shadow z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-14">
//           <div className="text-xl font-bold">
//             <Link href="/">Home</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-700"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle Button */}
//           <button
//             className="md:hidden"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 bg-gray-800 rounded-lg p-4 space-y-2 shadow-lg">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-4 py-2 text-sm rounded hover:bg-gray-700"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

///////////////////-------------------------------------------------------------------------------------------------------------------------/////////////

///////////////////-------------------------------------------------------------------------------------------------------------------------/////////////

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const navItems = [
//   { name: "School Uniforms", href: "/school" },
//   { name: "Womens Uniforms", href: "/women" },
//   { name: "Mens Uniforms", href: "/men" },
//   { name: "Company Uniforms", href: "/company" },
//   { name: "Hospital Uniforms", href: "/hospital" },
//   { name: "Hotel Uniforms", href: "/hotel" },
//   { name: "Other Uniforms", href: "/others" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <div className="w-full bg-gray-900 text-white z-50 shadow-md">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo or brand */}
//           <div className="text-xl font-bold tracking-wide text-white">
//             <Link href="/" className="hover:text-red-400 transition mr-20">
//               Home
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm px-3 py-2 rounded-md hover:bg-gray-700 hover:text-red-400 hover:text-xl transition font-bold whitespace-nowrap"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 bg-gray-800 rounded-md shadow-lg p-4 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-red-400 hover:text-xl transition font-bold"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// ///////////////////-------------------------------------------------------------------------------------------------------------------------/////////////

// ///////////////////-------------------------------------------------------------------------------------------------------------------------/////////////

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "School Uniforms", href: "/schooluniform" },
  { name: "Womens Uniforms", href: "/womenuniform" },
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
    <div className="w-full bg-gray-900 text-white z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or brand */}
          <div className="text-xl font-bold tracking-wide text-white">
            <Link href="/" className="hover:text-red-400 transition mr-20">
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm px-3 py-2 rounded-md hover:bg-gray-700 hover:text-red-400 hover:text-xl transition font-bold whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 rounded-md shadow-lg p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-red-400 hover:text-xl transition font-bold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
