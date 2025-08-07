"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SchoolCategory {
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

const SchoolUniforms: FC = () => {
  const schoolCategories: SchoolCategory[] = [
    {
      title: "CBSE School Uniforms",
      image: "/school_uniforms/CBSEUniforms.png",
      description:
        "High-quality uniforms designed specifically for CBSE schools with standard patterns and colors.",
      features: [
        "Standard CBSE patterns",
        "Quality fabric",
        "Comfortable fit",
        "Durable stitching",
      ],
    },
    {
      title: "Private School Uniforms",
      image: "/school_uniforms/PRIVATEUniforms.png",
      description:
        "Custom uniforms tailored to private school requirements with premium fabrics.",
      features: [
        "Custom designs",
        "Premium fabrics",
        "School logo embroidery",
        "Multiple color options",
      ],
    },
    {
      title: "Government School Uniforms",
      image: "/school_uniforms/GovtUniforms.png",
      description:
        "Affordable and durable uniforms meeting government school standards.",
      features: [
        "Budget-friendly",
        "Standard patterns",
        "Bulk orders",
        "Quick delivery",
      ],
    },
    {
      title: "Uniform Shirtings",
      image: "/school_uniforms/UniformShirtings.png",
      description:
        "High-quality shirting materials in various patterns and colors.",
      features: [
        "Cotton blend",
        "Checks and stripes",
        "Color-fast fabrics",
        "Multiple options",
      ],
    },
    {
      title: "Uniform Suitings",
      image: "/school_uniforms/UniformSuitings.png",
      description: "Premium suiting materials for formal school uniforms.",
      features: [
        "Formal wear",
        "Premium quality",
        "Professional look",
        "Long-lasting",
      ],
    },
    {
      title: "Plain School Uniforms",
      image: "/school_uniforms/PlainSchoolUniforms.png",
      description:
        "Simple and elegant plain uniforms for all types of schools.",
      features: [
        "Versatile designs",
        "Solid colors",
        "Easy maintenance",
        "Cost-effective",
      ],
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
            School Uniforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 opacity-90 font-medium"
          >
            CBSE Uniforms, Government School Uniforms and Plain Uniforms
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Image
              src="/images/hero-school-uniforms.jpg"
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
              School Uniform Categories
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
                Complete range of school uniforms for all educational
                institutions
              </span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolCategories.map((category, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolUniforms;
