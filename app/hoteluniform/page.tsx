"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

interface HotelCategory {
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

const HotelUniforms: FC = () => {
  const hotelCategories: HotelCategory[] = [
    {
      title: "Reception & Front Desk Uniforms",
      description:
        "Smart, branded uniforms for front-desk teams that create a warm first impression while staying comfortable throughout long shifts.",
      image: "/hotel_uniforms/Reception_Front_Desk_Uniforms.jpg",
      features: [
        "Tailored fit for a professional look",
        "Easy-care, stain-resistant fabrics",
        "Name badge and brand placement options",
        "Available in brand colors",
      ],
      code: "HU-001",
    },
    {
      title: "Housekeeping Uniforms",
      description:
        "Durable and practical uniforms for housekeeping staff, engineered for mobility and frequent laundering.",
      image: "/hotel_uniforms/Housekeeping_Uniforms.jpg",
      features: [
        "Reinforced stitching for durability",
        "Quick-dry, breathable fabrics",
        "Functional pockets for tools",
        "Color-coded options for departments",
      ],
      code: "HU-002",
    },
    {
      title: "Chef & Kitchen Staff Uniforms",
      description:
        "Heat-resistant, breathable chef jackets and aprons that prioritize safety, hygiene, and a professional kitchen appearance.",
      image: "/hotel_uniforms/Chef_Kitchen_Staff_Uniforms.webp",
      features: [
        "Heat and stain resistant materials",
        "Breathable cotton-blend construction",
        "Adjustable closures for fit",
        "Easy to launder at high temperatures",
      ],
      code: "HU-003",
    },
    {
      title: "Waitstaff & Service Uniforms",
      description:
        "Elegant yet practical uniforms for waitstaff that balance mobility with a polished, guest-facing style.",
      image: "/hotel_uniforms/Waitstaff_Service_Uniforms.jpg",
      features: [
        "Wrinkle-resistant finishes for long shifts",
        "Stretch fabric for free movement",
        "Smart pocket placement for order pads and tools",
        "Designed to pair with non-slip footwear",
      ],
      code: "HU-004",
    },
    {
      title: "Concierge & Managerial Uniforms",
      description:
        "Executive, tailored uniforms for concierge and management staff to reflect the hotel's brand prestige and service standards.",
      image: "/hotel_uniforms/Concierge_Managerial_Uniforms.jpg",
      features: [
        "Premium tailored cuts and fabrics",
        "Custom embroidery and branding options",
        "Coordinated accessories (ties, scarves)",
        "Available in formal color palettes",
      ],
      code: "HU-005",
    },
    {
      title: "Spa & Wellness Uniforms",
      description:
        "Soft, calming uniforms created for spa and wellness teams—focused on comfort, ease of movement, and a serene guest experience.",
      image: "/hotel_uniforms/Spa_Wellness_Uniforms.jpg",
      features: [
        "Soft, breathable fabric blends",
        "Neutral, soothing color options",
        "Easy-care and quick-dry finishes",
        "Flexible fits suited for treatments",
      ],
      code: "HU-006",
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
            Hotel Uniforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 opacity-90 font-medium"
          >
            Professional, durable and on-brand uniforms for every hotel
            department
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Image
              src="/images/hero-hotel-uniforms.jpg"
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
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent drop-shadow-lg p-2"
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.02, 1] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              Hotel Uniform Categories
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
                Premium hotel uniforms that combine comfort, style, and
                professionalism — tailored for every department in hospitality.
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelCategories.map((category, index) => {
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

export default HotelUniforms;
