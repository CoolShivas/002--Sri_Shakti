"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Category {
  title: string;
  image: string;
  items: string[];
}

const categories: Category[] = [
  {
    title: "School Uniforms",
    image: "/uniforms/school_uniforms.png",
    items: ["Boys", "Girls", "Accessories"],
  },
  {
    title: "Mens Uniforms",
    image: "/uniforms/men_uniforms.png",
    items: ["Corporate", "Security", "Industrial"],
  },
  {
    title: "Womens Uniforms",
    image: "/uniforms/women_uniforms.png",
    items: ["Formal", "Nursing", "Housekeeping"],
  },
  {
    title: "Company Uniforms",
    image: "/uniforms/company_uniforms.png",
    items: ["Logistics", "Technical", "Office Staff"],
  },
  {
    title: "Hotel Uniforms",
    image: "/uniforms/hotel_uniforms.png",
    items: ["Chef", "Housekeeping", "Reception"],
  },
  {
    title: "Hospital Uniforms",
    image: "/uniforms/hospital_uniforms.png",
    items: ["Doctors", "Nurses", "Support Staff"],
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
      {/* <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Browse our wide range of uniform categories tailored to various
          industries.
        </p>
      </motion.div> */}

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg p-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          Explore Our Categories
        </motion.h2>

        <motion.p
          className="mt-4 text-md sm:text-lg text-gray-900 font-medium max-w-2xl mx-auto tracking-wide leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 1] }}
          transition={{
            duration: 1.4,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          Discover top-tier uniform categories crafted for diverse industries —
          designed to inspire confidence, comfort, and style.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="contain"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {category.title}
              </h3>
              {/* <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                {category.items.map((item, i) => (
                  <li className="text-red-400" key={i}>
                    {item}
                  </li>
                ))}
              </ul> */}

              <ul className="mt-4 space-y-2 text-sm font-medium text-gray-700">
                {["Boys", "Girls", "Accessories"].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2 hover:text-pink-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-pink-500">➤</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
