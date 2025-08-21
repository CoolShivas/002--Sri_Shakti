"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../redux/slice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const SchoolUniformsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.uniformData.isLoading);
  const error = useSelector((state: any) => state.uniformData.error);
  const uniforms = useSelector(selectUniformsByTypeAndSubtype("school"));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
  }, [dispatch]);

  const handlerOnNext = () => {
    if (selectedIndex === null || uniforms.length === 0) return;
    setSelectedIndex((prev) => ((prev ?? 0) + 1) % uniforms.length);
  };

  const handlerOnPrevious = () => {
    if (selectedIndex === null || uniforms.length === 0) return;
    setSelectedIndex((prev) =>
      prev === 0 ? uniforms.length - 1 : (prev ?? 0) - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold"
          >
            School Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Browse all school uniform options.
          </motion.p>
        </div>
      </section>

      {/* Loading & Error */}
      {isLoading && (
        <div className="py-10 text-center text-lg">Loading uniforms...</div>
      )}
      {error && <div className="py-10 text-center text-red-500">{error}</div>}

      {/* Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniforms.length > 0
              ? uniforms.map((item: any, index: number) => (
                  <motion.div
                    key={item._id ?? index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                  >
                    <Card className="shadow-lg rounded-2xl overflow-hidden">
                      <CardHeader>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-60">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <p className="mt-4 text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              : !isLoading && (
                  <p className="text-center col-span-full text-gray-500">
                    No school uniforms found.
                  </p>
                )}
          </div>
        </div>
      </section>

      <ContactAdvertise />
    </div>
  );
};

export default SchoolUniformsPage;
