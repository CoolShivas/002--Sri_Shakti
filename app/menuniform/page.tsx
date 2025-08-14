"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCallback, useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

interface MenCategory {
  title: string;
  description: string;
  features: string[];
  image: string;
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

const MenUniforms: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const mensCategories: MenCategory[] = [
    {
      title: "Uniform Shirts",
      image: "/men_uniforms/Uniform_Shirts.png",
      description:
        "High-quality formal shirts designed for professional and institutional wear.",
      features: [
        "Premium cotton",
        "Professional fit",
        "Multiple colors",
        "Durable fabric",
      ],
      code_ID: "MU-001",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Uniform Pants",
      image: "/men_uniforms/Uniform_Pants.png",
      description:
        "Comfortable and professional trousers for office and institutional use.",
      features: [
        "Formal cut",
        "Wrinkle resistant",
        "Multiple sizes",
        "Professional look",
      ],
      code_ID: "MU-002",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Uniform Blazers",
      image: "/men_uniforms/Uniform_Blazers.png",
      description:
        "Elegant blazers for formal occasions and professional environments.",
      features: [
        "Formal occasions",
        "Premium fabrics",
        "Tailored fit",
        "Professional style",
      ],
      code_ID: "MU-003",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Uniform T-shirts",
      image: "/men_uniforms/Uniform_Tshirts.png",
      description:
        "Comfortable casual wear t-shirts for informal work environments.",
      features: ["Cotton blend", "Comfortable fit", "Casual wear", "Easy care"],
      code_ID: "MU-004",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Uniform Waist Coats",
      image: "/men_uniforms/Uniform_Waist_Coats.png",
      description:
        "Stylish waistcoats to complete the formal uniform ensemble.",
      features: [
        "Formal accessory",
        "Professional look",
        "Perfect fit",
        "Quality fabric",
      ],
      code_ID: "MU-005",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Men's Staff Uniforms",
      image: "/men_uniforms/Men_Staff_Uniforms.png",
      description:
        "Complete uniform sets designed specifically for male staff members.",
      features: [
        "Complete sets",
        "Staff uniforms",
        "Professional appearance",
        "Bulk orders",
      ],
      code_ID: "MU-006",
      logo: "/images/SriSakthi.jpg",
    },
  ];

  const handlerOnNext = useCallback(() => {
    if (selectedIndex === null) {
      return;
    } else {
      setSelectedIndex((prev) => (prev! + 1) % mensCategories.length);
    }
  }, [selectedIndex, mensCategories.length]);

  const handlerOnPrevious = useCallback(() => {
    if (selectedIndex === null) {
      return;
    } else {
      setSelectedIndex((prev) => {
        return prev! === 0 ? mensCategories.length - 1 : prev! - 1;
      });
    }
  }, [selectedIndex, mensCategories.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
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
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handlerOnNext, handlerOnPrevious]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Men's Uniforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 opacity-90 font-medium"
          >
            Shirts, Pants, Blazers and Professional Wear
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Image
              src="/images/hero-mens-uniforms.jpg"
              alt="School Uniforms"
              width={1200}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-4 border-white/20"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
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
              Men's Uniform Categories
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
                Professional and comfortable uniforms designed for modern
                working men
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mensCategories.map((category, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
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
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority
                        />
                        {/* Logo in top-right */}
                        <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow-md">
                          <Image
                            src={category.logo}
                            alt="Logo"
                            width={32}
                            height={32}
                          />
                        </div>

                        {/* Unique Code in bottom-right */}
                        <div className="absolute bottom-2 right-2 z-10 bg-sky-200 text-xs  px-2 py-1 rounded font-semibold">
                          {category.code_ID}
                        </div>
                      </div>
                      {/* <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                                  {category.title}
                                                </h3> */}
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue mb-2 text-center">
                        {category.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-center">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <CheckCircle className="w-4 h-4 text-brand-blue mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <ContactAdvertise></ContactAdvertise>

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
            className="relative top-2 right-2 bg-white/50 rounded-full"
          >
            <Image
              src={mensCategories[selectedIndex].image}
              alt={mensCategories[selectedIndex].title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Logo Watermark */}
            <div className="absolute top-1 right-0 bg-white/70 rounded-full p-2 shadow-md">
              <Image
                // src="/images/SriSakthi.jpg"
                src={mensCategories[selectedIndex].logo}
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>

            {/* Code_ID Watermark */}
            <div className="absolute bottom-4 right-4 bg-sky-200/80 text-sm px-3 py-1 rounded font-semibold shadow-md">
              {mensCategories[selectedIndex].code_ID}
            </div>
          </div>
        </div>
      )}

      {/* Ending of Image Modal with Navigation */}
    </div>
  );
};

export default MenUniforms;
