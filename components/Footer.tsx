// "use client";

// import React from "react";
// import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//         {/* Company Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h4 className="text-xl font-semibold mb-4 text-pink-500">
//             Sri Sakthi Uniforms
//           </h4>
//           <p className="text-sm text-gray-300 leading-relaxed hover:text-xl">
//             D.No. 391, Easwaran Koil Street,
//             <br /> Erode, Tamil Nadu, India - 638001
//           </p>
//         </motion.div>

//         {/* Contact */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h4 className="text-xl font-semibold mb-4 text-yellow-400">
//             Contact
//           </h4>
//           <ul className="text-sm text-gray-300 space-y-2">
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               <Phone className="w-4 h-4 text-brand-red" /> +91 97861 97831
//             </li>
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               <Phone className="w-4 h-4 text-brand-red" /> +91 97865 97835
//             </li>
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               <Mail className="w-4 h-4 text-brand-red" />{" "}
//               contact@sakthiuniforms.com
//             </li>
//           </ul>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h4 className="text-xl font-semibold mb-4 text-yellow-400">
//             Quick Links
//           </h4>
//           <ul className="text-sm text-gray-300 space-y-2">
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               Home
//             </li>
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               Products
//             </li>
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               Categories
//             </li>
//             <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
//               Contact
//             </li>
//           </ul>
//         </motion.div>

//         {/* Socials */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h4 className="text-xl font-semibold mb-4 text-yellow-400">
//             Follow Us
//           </h4>
//           <div className="flex items-center gap-4">
//             <a href="#" className="hover:scale-110 transition-transform">
//               <Instagram className="w-5 h-5 text-pink-500" />
//             </a>
//             <a href="#" className="hover:scale-110 transition-transform">
//               <Facebook className="w-5 h-5 text-blue-500" />
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
//         <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
//           &copy; {new Date().getFullYear()} Sri Sakthi Uniforms. All rights
//           reserved.
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//////////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] text-white pt-16 px-6 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xl font-bold mb-4 text-rose-400 hover:text-white transition duration-300">
            Sri Sakthi Uniforms
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed hover:text-white hover:text-xl">
            D.No. 391, Easwaran Koil Street,
            <br /> Erode, Tamil Nadu, India - 638001
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold mb-4 text-blue-400 hover:text-white transition duration-300">
            Contact
          </h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2 hover:text-white hover:text-xl cursor-pointer transition-all">
              <Phone className="w-4 h-4 text-rose-400" /> +91 97861 97831
            </li>
            <li className="flex items-center gap-2 hover:text-white hover:text-xl cursor-pointer transition-all">
              <Phone className="w-4 h-4 text-rose-400" /> +91 97865 97835
            </li>
            <li className="flex items-center gap-2 hover:text-white hover:text-xl cursor-pointer transition-all">
              <Mail className="w-4 h-4 text-rose-400" />{" "}
              contact@sakthiuniforms.com
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xl font-bold mb-4 text-green-400 hover:text-white transition duration-300">
            Quick Links
          </h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
              Home
            </li>
            <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
              Products
            </li>
            <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
              Categories
            </li>
            <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
              Contact
            </li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl font-bold mb-4 text-indigo-400 hover:text-white transition duration-300">
            Follow Us
          </h4>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Instagram className="w-6 h-6 text-pink-500 hover:text-white" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Facebook className="w-6 h-6 text-blue-500 hover:text-white" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Twitter className="w-6 h-6 text-sky-400 hover:text-white" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <MessageCircleMore className="w-6 h-6 text-green-400 hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          &copy; {new Date().getFullYear()} Sri Sakthi Uniforms. All rights
        </span>
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
