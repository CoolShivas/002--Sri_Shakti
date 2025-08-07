"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Raymond", image: "/images/Raymond Limited Logo 2.jpg" },
  { name: "Siyarams", image: "/images/siyarams.png" },
  { name: "Sparsh Fab", image: "/images/SparshFab.jpg" },
  { name: "Darshan Valji", image: "/images/DarshanValji.png" },
  { name: "Subhtex", image: "/images/Subhtex.jpg" },
  { name: "Swaraj", image: "/images/Swaraj.png" },
  { name: "Nakoda", image: "/images/Nakoda.png" },
  { name: "Qmax", image: "/images/Qmax.webp" },
  { name: "Mafatlal", image: "/images/Mafatlal.jpg" },
  { name: "Kanchan", image: "/images/Kanchan.png" },
  { name: "House of Uniforms", image: "/images/HouseUniforms.webp" },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const BrandPartners = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
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
            Trusted by Top Brands
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
            We proudly partner with the leading uniform fabric brands across
            India. Experience premium quality, unmatched service, and trusted
            sourcing.
          </motion.p>
        </motion.div>

        <div className="relative w-full overflow-hidden py-8 bg-gradient-to-r from-white via-gray-500 to-white shadow-inner">
          <motion.div
            className="flex w-max space-x-16"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 1 }}
                className="flex-shrink-0 w-36 h-24 flex items-center justify-center hover:drop-shadow-xl transition-all"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="object-contain" // optional styling
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-600 rounded-2xl text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-300/40">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold mb-2 tracking-wide drop-shadow-sm">
                🌟 Authorized Dealer
              </h3>
              <p className="text-base sm:text-lg opacity-90 font-bold tracking-tight text-yellow-100 hover:text-rose-950">
                Premium Quality Fabrics & Uniforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
