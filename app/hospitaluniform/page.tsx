"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCallback, useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

interface HospitalCategory {
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

const HospitalUniforms: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const hospitalCategories: HospitalCategory[] = [
    {
      title: "Doctor Coats",
      image: "/hospital_uniforms/Doctor_Coats.png",
      description:
        "High-quality doctor coats designed for a sharp, professional look while ensuring all-day comfort and durability in demanding healthcare environments.",
      features: [
        "Made from breathable, lightweight fabric",
        "Resistant to stains and easy to clean",
        "Multiple pockets for medical tools and essentials",
        "Comfortable fit for long shifts",
        "Maintains crisp appearance after multiple washes",
      ],
      code_ID: "HosU-001",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Nurse Uniforms",
      image: "/hospital_uniforms/Nurse_Uniforms.png",
      description:
        "Professional nurse uniforms designed for long-duty shifts, ensuring comfort, hygiene, and a presentable appearance while caring for patients.",
      features: [
        "Antimicrobial fabric to maintain hygiene",
        "Moisture-wicking and breathable material",
        "Multiple pockets for carrying essential tools",
        "Durable stitching for frequent washing",
      ],
      code_ID: "HosU-002",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Operation Theatre Uniforms",
      image: "/hospital_uniforms/Operation_Theatre_Uniforms.png",
      description:
        "High-quality surgical uniforms designed to maintain a sterile environment and ensure the safety of both medical staff and patients during procedures.",

      features: [
        "Sterile, fluid-resistant fabric for infection control",
        "Lightweight and breathable for extended wear",
        "Ergonomic fit to allow free movement during surgery",
        "Easy to disinfect and withstands high-temperature sterilization",
      ],
      code_ID: "HosU-003",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hospital Uniform Sarees",
      image: "/hospital_uniforms/Hospital_Uniform_Sarees.png",
      description:
        "Comfortable and professional sarees designed for hospital staff, offering ease of movement and a neat appearance throughout long working hours.",

      features: [
        "Made with breathable, lightweight fabric",
        "Easy to wash and quick-drying material",
        "Wrinkle-resistant for a crisp look",
        "Designed for comfort during extended shifts",
      ],
      code_ID: "HosU-004",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hospital Uniform Pants",
      image: "/hospital_uniforms/Hospital_Uniform_Pants.png",
      description:
        "Durable and comfortable pants tailored for hospital staff, providing flexibility, ease of movement, and a professional appearance during long shifts.",

      features: [
        "Made with breathable, skin-friendly fabric",
        "Elastic or drawstring waist for adjustable fit",
        "Wrinkle and stain-resistant material",
        "Available in multiple sizes and colors",
      ],
      code_ID: "HosU-005",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hospital Uniform Shirts",
      image: "/hospital_uniforms/Hospital_Uniform_Shirts.png",
      description:
        "Professional and comfortable shirts designed for hospital staff, ensuring ease of movement, durability, and a polished appearance during long working hours.",

      features: [
        "Breathable and lightweight fabric",
        "Easy to wash and quick-dry material",
        "Wrinkle-resistant finish",
        "Available in various colors and fits",
      ],
      code_ID: "HosU-006",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Mens Staff Uniforms",
      image: "/hospital_uniforms/Mens_Staff_Uniforms.png",
      description:
        "Durable and well-fitted uniforms tailored for male hospital staff, offering comfort, mobility, and a professional look for daily duties.",

      features: [
        "High-quality, breathable fabric",
        "Wrinkle-resistant and easy-care material",
        "Designed for all-day comfort",
        "Available in multiple styles and sizes",
      ],
      code_ID: "HosU-007",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Staff Uniform Chudidhars",
      image: "/hospital_uniforms/Staff_Uniform_Chudidhars.png",
      description:
        "Elegant and comfortable chudidhars designed for female hospital staff, combining professional appearance with ease of movement for long working hours.",

      features: [
        "Soft and breathable fabric",
        "Easy to wash and quick-dry",
        "Available in various colors and patterns",
        "Designed for comfort during extended shifts",
      ],
      code_ID: "HosU-008",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Doctor Uniform Sarees",
      image: "/hospital_uniforms/Doctor_Uniform_Sarees.png",
      description:
        "Professional sarees tailored for doctors, offering a dignified appearance while ensuring comfort and ease of movement during long working hours.",

      features: [
        "Made from lightweight, breathable fabric",
        "Easy-care and wrinkle-resistant material",
        "Available in professional and subtle colors",
        "Designed for all-day comfort and mobility",
      ],
      code_ID: "HosU-009",
      logo: "/images/SriSakthi.jpg",
    },
    {
      title: "Hospital Uniforms",
      image: "/hospital_uniforms/Hospital_Uniforms.png",
      description:
        "A complete range of professional hospital uniforms designed for doctors, nurses, and staff, ensuring comfort, hygiene, and a polished appearance in healthcare environments.",

      features: [
        "Durable, high-quality fabric for daily use",
        "Breathable and skin-friendly material",
        "Easy to clean and maintain",
        "Available in multiple styles and colors for different roles",
      ],
      code_ID: "HosU-0010",
      logo: "/images/SriSakthi.jpg",
    },
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % hospitalCategories.length);
  }, [selectedIndex, hospitalCategories.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? hospitalCategories.length - 1 : prev! - 1
    );
  }, [selectedIndex, hospitalCategories.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleNext, handlePrev]);

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
            Hospital Uniforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 opacity-90 font-medium"
          >
            High-quality clinical, surgical and support-staff uniforms
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-hospital-uniforms.png"
                alt="Other Uniforms"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
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
              Hospital Uniform Categories
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
                Premium hospital uniforms that blend comfort, hygiene, and
                professionalism — tailored for every healthcare role.
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalCategories.map((category, index) => {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2 cursor-pointer">
                    <CardHeader>
                      <div
                        className="relative w-full h-64 flex items-center justify-center overflow-hidden"
                        onClick={() => setSelectedIndex(index)}
                      >
                        <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden">
                          <Image
                            src={category.image}
                            alt={category.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-lg"
                            priority
                          />
                          <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                            <Image
                              src={category.logo}
                              alt="Logo"
                              width={32}
                              height={32}
                              priority
                            />
                          </div>
                          <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                            {category.code_ID}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue mb-2 text-center p-2">
                        {category.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 text-center text-md font-semibold">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-md text-gray-700 font-semibold"
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

      {/* Image Modal with Navigation */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          {/* Navigation + Close Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-50"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
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
          <div className="relative w-full max-w-2xl max-h-[70vh] overflow-hidden">
            <Image
              src={hospitalCategories[selectedIndex].image}
              alt={hospitalCategories[selectedIndex].title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />

            {/* Logo Watermark */}
            <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
              <Image
                // src="/images/SriSakthi.jpg"
                src={hospitalCategories[selectedIndex].logo}
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </div>

            {/* Code_ID Watermark */}
            <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
              {hospitalCategories[selectedIndex].code_ID}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalUniforms;
