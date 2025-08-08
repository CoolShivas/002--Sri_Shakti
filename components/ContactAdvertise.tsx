"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactAdvertise = () => {
  return (
    <>
      <section className="p-5 mt-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.02, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Need Custom School Uniforms?
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-600 mt-4 font-medium max-w-2xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 1] }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <span className="font-bold">
              Contact us for bulk orders, custom designs, and special pricing
              for educational institutions.
            </span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <span
                className="relative inline-flex items-center justify-center px-6 py-3
                   rounded-full bg-[#a88ecf] text-white text-base sm:text-lg font-semibold
                   shadow-lg hover:bg-[#1f2937] transition duration-300 ease-in-out group"
              >
                <span className="relative z-10 hover:text-xl">
                  📞 Call: 97861 97831
                </span>
                <span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500
                     opacity-0 group-hover:opacity-100 blur-sm transition duration-500"
                />
              </span>
              <span
                className="relative inline-flex items-center justify-center px-6 py-3
                   rounded-full bg-[#a1b9ee] text-white text-base sm:text-lg font-semibold
                   shadow-lg hover:bg-[#1f2937] transition duration-300 ease-in-out group"
              >
                <span className="relative z-10 hover:text-xl">
                  📱 Call: 97865 97835
                </span>
                <span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500
                     opacity-0 group-hover:opacity-100 blur-sm transition duration-500"
                />
              </span>
            </div>
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default ContactAdvertise;
