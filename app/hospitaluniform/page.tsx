"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

interface HospitalCategory {
  title: string;
  description: string;
  features: string[];
  image: string;
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
      code: "HosU-001",
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
      code: "HosU-002",
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
      code: "HosU-003",
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
      code: "HosU-004",
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
      code: "HosU-005",
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
      code: "HosU-006",
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
      code: "HosU-007",
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
      code: "HosU-008",
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
      code: "HosU-009",
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
      code: "HosU-0010",
    },
  ];

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
            <Image
              src="/images/hero-hospital-uniforms.png"
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
                  <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
                    <CardHeader>
                      <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
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
                            src="/images/SriSakthi.jpg"
                            alt="Logo"
                            width={32}
                            height={32}
                          />
                        </div>

                        {/* Unique Code in bottom-right */}
                        <div className="absolute bottom-2 right-2 z-10 bg-sky-200 text-xs  px-2 py-1 rounded font-semibold">
                          {category.code}
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
    </div>
  );
};

export default HospitalUniforms;
