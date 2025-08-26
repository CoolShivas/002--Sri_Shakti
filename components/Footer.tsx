"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  MessageCircleMore,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { fetchContactDetailsApiServer } from "@/app/redux/detailSlice";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  const contactDetails = useSelector(
    (state: any) => state.contactDetails.detailArr
  );

  useEffect(() => {
    dispatch(fetchContactDetailsApiServer());
  }, [dispatch]);

  // console.log(contactDetails);

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
            {contactDetails?.websiteName || "Shikha"}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed hover:text-white hover:text-xl">
            {contactDetails?.mainOffice ||
              `D.No. 391, Easwaran Koil Street,
            <br /> Erode, Tamil Nadu, India - 638001`}
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
              {/* <Link href="/contact" className="flex-row">
                <Phone className="w-4 h-4 text-rose-400" />
                {contactDetails?.contactNo1}
              </Link> */}
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>{contactDetails?.contactNo1}</span>
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-white hover:text-xl cursor-pointer transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>{contactDetails?.contactNo2}</span>
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-white hover:text-xl cursor-pointer transition-all">
              <Mail className="w-4 h-4 text-rose-400" /> {contactDetails?.email}
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
            {/* <li className="hover:text-white hover:text-xl cursor-pointer transition-all">
              Home
            </li> */}
            <li>
              <Link
                href="/"
                className="hover:text-white hover:text-xl cursor-pointer transition-all"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-white hover:text-xl cursor-pointer transition-all"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-white hover:text-xl cursor-pointer transition-all"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="hover:text-white hover:text-xl cursor-pointer transition-all"
              >
                Products
              </Link>
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
            {/* <a
              href="#"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Instagram className="w-6 h-6 text-pink-500 hover:text-white" />
            </a> */}

            <a
              href={contactDetails?.instagramUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Instagram className="w-6 h-6 text-pink-500 hover:text-white" />
            </a>

            <a
              href={contactDetails?.facebookUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Facebook className="w-6 h-6 text-blue-500 hover:text-white" />
            </a>
            <a
              href={contactDetails?.twitterUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Twitter className="w-6 h-6 text-sky-400 hover:text-white" />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <MessageCircleMore className="w-6 h-6 text-green-400 hover:text-white" />
            </a> */}

            <a
              href={contactDetails?.youtubeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <Youtube className="w-6 h-6 text-red-600 hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          Copyright &copy; {new Date().getFullYear()}{" "}
          {contactDetails?.websiteName || "Shikha Clothings, Chennai"}. All
          rights reserved.
        </span>
        <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          Website design by Xenturalt Codes IT Solutions
        </span>
      </div> */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-around gap-4 text-center md:text-left">
        <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          Copyright &copy; {new Date().getFullYear()}{" "}
          {contactDetails?.websiteName || "SHIKHA CLOTHING & UNIFORMS"}. All
          rights reserved.
        </span>
        {/* <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          Website design by{" "}
          <Link
            href="https://www.softwaresuggest.com/services/xenturalt-codes"
            target="_blank"
          >
            Xenturalt Codes IT Solutions Pvt. Ltd.
          </Link>
        </span> */}

        <span className="hover:text-white hover:text-xl cursor-pointer transition-all">
          Website design by{" "}
          <Link
            href="https://xenturaltcodes.in/"
            target="_blank"
            className="hover:underline underline-offset-4"
          >
            Xenturalt Codes IT Solutions Pvt. Ltd.
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
