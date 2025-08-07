// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const AboutPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-5xl mx-auto px-4 py-12"
//     >
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//         About Sri Sakthi Uniforms
//       </h1>
//       <p className="text-lg text-gray-600 leading-relaxed text-center">
//         Sri Sakthi Uniforms is a trusted name in the field of uniform
//         manufacturing, serving schools, hospitals, hotels, corporate sectors,
//         and more. With a strong commitment to quality, timely delivery, and
//         customer satisfaction, we aim to deliver exceptional uniform solutions
//         tailored to your needs.
//       </p>
//     </motion.div>
//   );
// };

// export default AboutPage;

/////////-------------------------------------------------------------------------//////////

// app/about/page.tsx

"use client";

import HeroSlider from "@/components/HeroSlider";
import BrandPartners from "@/components/BrandPartners";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* About Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 hover:text-indigo-700 transition-colors duration-300"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-rose-600">Sri Sakthi Uniforms</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sri Sakthi Uniforms is a trusted name in the field of uniform
            manufacturing, serving schools, hospitals, hotels, corporate
            sectors, and more. With a strong commitment to quality, timely
            delivery, and customer satisfaction, we aim to deliver exceptional
            uniform solutions tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Top Carousel */}
      <HeroSlider />

      {/* Animated Brand Logos */}
      <section className="py-10 bg-gray-50 border-t">
        <BrandPartners />
      </section>
    </main>
  );
};

export default AboutPage;
