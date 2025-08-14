// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// interface Category {
//   title: string;
//   image: string;
//   items: string[];
// }

// const categories: Category[] = [
//   {
//     title: "School Uniforms",
//     image: "/uniforms/school_uniforms.png",
//     items: ["Boys", "Girls", "Accessories"],
//   },
//   {
//     title: "Mens Uniforms",
//     image: "/uniforms/men_uniforms.png",
//     items: ["Corporate", "Security", "Industrial"],
//   },
//   {
//     title: "Womens Uniforms",
//     image: "/uniforms/women_uniforms.png",
//     items: ["Formal", "Nursing", "Housekeeping"],
//   },
//   {
//     title: "Company Uniforms",
//     image: "/uniforms/company_uniforms.png",
//     items: ["Logistics", "Technical", "Office Staff"],
//   },
//   {
//     title: "Hotel Uniforms",
//     image: "/uniforms/hotel_uniforms.png",
//     items: ["Chef", "Housekeeping", "Reception"],
//   },
//   {
//     title: "Hospital Uniforms",
//     image: "/uniforms/hospital_uniforms.png",
//     items: ["Doctors", "Nurses", "Support Staff"],
//   },
// ];

// const ProductCategories = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
//       {/* <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
//           Explore Our Categories
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//           Browse our wide range of uniform categories tailored to various
//           industries.
//         </p>
//       </motion.div> */}

//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <motion.h2
//           className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg p-2"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: [0.9, 1.05, 1] }}
//           transition={{
//             duration: 1.8,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//         >
//           Explore Our Categories
//         </motion.h2>

//         <motion.p
//           className="mt-4 text-md sm:text-lg text-gray-900 font-medium max-w-2xl mx-auto tracking-wide leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0, 0.6, 1] }}
//           transition={{
//             duration: 1.4,
//             delay: 0.4,
//             ease: "easeOut",
//           }}
//         >
//           Discover top-tier uniform categories crafted for diverse industries —
//           designed to inspire confidence, comfort, and style.
//         </motion.p>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {categories.map((category, index) => (
//           <motion.div
//             key={index}
//             className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative h-48 sm:h-56 md:h-64">
//               <Image
//                 src={category.image}
//                 alt={category.title}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2 text-gray-800">
//                 {category.title}
//               </h3>
//               {/* <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
//                 {category.items.map((item, i) => (
//                   <li className="text-red-400" key={i}>
//                     {item}
//                   </li>
//                 ))}
//               </ul> */}

//               <ul className="mt-4 space-y-2 text-sm font-medium text-gray-700">
//                 {["Boys", "Girls", "Accessories"].map((item, index) => (
//                   <motion.li
//                     key={index}
//                     className="flex items-center space-x-2 hover:text-pink-600 transition duration-300"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <span className="text-pink-500">➤</span>
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductCategories;

////////////////***************************************************************************************************************//////////////////////////

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Category {
  title: string;
  image: string;
  items: string[];
  code_ID: string;
  logo: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const ProductCategories: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories: Category[] = [
    {
      title: "School Uniforms",
      image: "/product_cat/school_uniforms.jfif",
      items: ["Boys", "Girls", "Accessories"],
      code_ID: "PU-001",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Mens Uniforms",
      image: "/product_cat/mens_uniforms.jpeg",
      items: ["Corporate", "Security", "Industrial"],
      code_ID: "PU-002",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Womens Uniforms",
      image: "/product_cat/womens_uniforms.jpg",
      items: ["Formal", "Nursing", "Housekeeping"],
      code_ID: "PU-003",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Company Uniforms",
      image: "/product_cat/company_uniforms.webp",
      items: ["Logistics", "Technical", "Office Staff"],
      code_ID: "PU-004",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hotel Uniforms",
      image: "/product_cat/hotel_uniforms.webp",
      items: ["Chef", "Housekeeping", "Reception"],
      code_ID: "PU-005",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hospital Uniforms",
      image: "/product_cat/hospital-uniforms.webp",
      items: ["Doctors", "Nurses", "Support Staff"],
      code_ID: "PU-006",
      logo: "/images/SriSakthi.jpg",
    },
  ];

  const handlerOnNext = useCallback(() => {
    if (selectedIndex === null) {
      return;
    } else {
      setSelectedIndex((prev) => (prev! + 1) % categories.length);
    }
  }, [selectedIndex, categories.length]);

  const handlerOnPrevious = useCallback(() => {
    if (selectedIndex === null) {
      return;
    } else {
      setSelectedIndex((prev) => {
        return prev! === 0 ? categories.length - 1 : prev! - 1;
      });
    }
  }, [selectedIndex, categories.length]);

  useEffect(() => {
    const handlerOnKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) {
        return;
      } else if (e.key === "ArrowRight") {
        handlerOnNext();
      } else if (e.key === "ArrowLeft") {
        handlerOnPrevious();
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handlerOnKey);
    return () => window.removeEventListener("keydown", handlerOnKey);
  }, [selectedIndex, handlerOnNext, handlerOnPrevious]);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
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
            Discover top-tier uniform categories crafted for diverse industries
            — designed to inspire confidence, comfort, and style.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            return (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
                  <CardHeader>
                    <div
                      className="h-48 relative mb-4 rounded-lg overflow-hidden"
                      onClick={() => setSelectedIndex(index)}
                    >
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-contain rounded-lg shadow-2xl"
                        sizes="(max-width: 768px) 10vw, 33vw"
                        priority
                      />
                      {/* Logo in top-right */}
                      <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow-md">
                        <Image
                          src={category.logo}
                          alt="Logo"
                          width={32}
                          height={32}
                          priority
                        />
                      </div>

                      {/* Unique Code in bottom-right */}
                      <div className="absolute bottom-2 right-2 z-10 bg-sky-200 text-xs  px-2 py-1 rounded font-semibold">
                        {category.code_ID}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue mb-2 text-center">
                      {category.title}
                    </h3>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Starting of Image Modal with Navigation */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          {/* Navigation + Close Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlerOnPrevious();
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-50"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlerOnNext();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-50"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg z-50"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Image Container with Watermark */}
          <div
            // className="relative max-w-4xl w-full px-4"
            // className="relative top-2 right-2 bg-white/50 rounded-full"
            className="relative w-64 h-74 overflow-hidden"
          >
            <Image
              src={categories[selectedIndex].image}
              alt={categories[selectedIndex].title}
              width={1000}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />

            {/* Logo Watermark */}
            <div className="absolute top-1 right-0 bg-white/70 rounded-full p-2 shadow-md">
              <Image
                // src="/images/SriSakthi.jpg"
                src={categories[selectedIndex].logo}
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </div>

            {/* Code_ID Watermark */}
            <div className="absolute bottom-4 right-4 bg-sky-200/80 text-sm px-3 py-1 rounded font-semibold shadow-md">
              {categories[selectedIndex].code_ID}
            </div>
          </div>
        </div>
      )}

      {/* Ending of Image Modal with Navigation */}
    </div>
  );
};

export default ProductCategories;
