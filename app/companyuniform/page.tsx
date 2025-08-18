"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCallback, useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";
import Link from "next/link";

interface CompanyCategory {
  title: string;
  description: string;
  features: string[];
  image: string;
  code_ID: string;
  logo: string;
  subLink: string;
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

const CompanyUniforms: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const companyCategories: CompanyCategory[] = [
    {
      title: "Company Uniforms",
      image: "/company_uniforms/Company_Uniforms.png",
      description:
        "Professional corporate uniforms designed to enhance brand identity and employee appearance.",
      features: [
        "Brand identity",
        "Professional look",
        "Custom designs",
        "Quality fabrics",
      ],
      code_ID: "CU-001",
      logo: "/images/SriSakthi.jpg",
      subLink: "/companyuniform/companyuniform",
    },

    {
      title: "Staff Uniforms",
      image: "/company_uniforms/Staff_Uniforms.png",
      description:
        "Versatile staff uniforms suitable for various industries and work environments.",
      features: [
        "Versatile designs",
        "Multi-industry",
        "Comfortable wear",
        "Durable fabrics",
      ],
      code_ID: "CU-002",
      logo: "/images/SriSakthi.jpg",
      subLink: "/companyuniform/staffuniform",
    },
    {
      title: "Industrial Uniforms",
      image: "/company_uniforms/Industrial_Uniforms.png",
      description:
        "Safety-focused uniforms designed for industrial workers and manufacturing environments.",
      features: [
        "Safety focused",
        "Durable materials",
        "Work-friendly",
        "Protection features",
      ],
      code_ID: "CU-003",
      logo: "/images/SriSakthi.jpg",
      subLink: "/companyuniform/industrialuniform",
    },
    {
      title: "Mechanic Uniforms",
      image: "/company_uniforms/Mechanic_Uniforms.png",
      description:
        "Specialized uniforms for mechanics and automotive industry professionals.",
      features: [
        "Oil resistant",
        "Durable fabric",
        "Practical design",
        "Professional look",
      ],
      code_ID: "CU-004",
      logo: "/images/SriSakthi.jpg",
      subLink: "/companyuniform/mechanicuniform",
    },
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % companyCategories.length);
  }, [selectedIndex, companyCategories.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? companyCategories.length - 1 : prev! - 1
    );
  }, [selectedIndex, companyCategories.length]);

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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Company Uniforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 opacity-90 font-medium"
          >
            Staff, Industrial and Corporate Uniforms
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-company-uniforms.jpg"
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

      {/* Product Cards */}
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
              Company Uniform Categories
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
                Professional uniforms designed for various industries and
                corporate environments
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyCategories.map((category, index) => {
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
                        className="relative w-full h-64 flex items-center justify-center overflow-hidden"
                        onClick={() => setSelectedIndex(index)}
                      >
                        <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
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
                      <Link href={category.subLink}>
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue mb-2 text-center p-2 hover:text-red-500 cursor-pointer">
                          {category.title}
                        </h3>
                      </Link>
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
              src={companyCategories[selectedIndex].image}
              alt={companyCategories[selectedIndex].title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />

            {/* Logo Watermark */}
            <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
              <Image
                // src="/images/SriSakthi.jpg"
                src={companyCategories[selectedIndex].logo}
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </div>

            {/* Code_ID Watermark */}
            <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
              {companyCategories[selectedIndex].code_ID}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyUniforms;
