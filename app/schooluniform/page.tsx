"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import ContactAdvertise from "@/components/ContactAdvertise";

import { useDispatch, useSelector } from "react-redux";
import { fetchUniformApiServer } from "../redux/slice";

const SchoolUniformsPage = () => {
  const dispatch = useDispatch();

  // ✅ Correct state path based on store.js
  // const uniforms = useSelector((state: any) => state.uniformData.uniforms);
  const uniforms = useSelector((state: any) => state.uniformData.uniformArr);
  console.log(uniforms); // Getting data on Browser Console;

  const isLoading = useSelector((state: any) => state.uniformData.isLoading);
  const error = useSelector((state: any) => state.uniformData.error);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ✅ Fetch only "School" uniforms from API via slice
  useEffect(() => {
    dispatch(fetchUniformApiServer("School") as any);
  }, [dispatch]);

  // ✅ Modal open/close
  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };
  const handleClose = () => {
    setSelectedIndex(null);
  };

  // ✅ Navigation inside modal
  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? uniforms.length - 1 : prev - 1) : null
    );
  };
  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === uniforms.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-pink-500 to-brand-blue mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our School Uniforms
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover a wide range of high-quality, comfortable, and stylish school
          uniforms designed for durability and everyday wear.
        </motion.p>

        {/* Loading / Error states */}
        {isLoading && <p className="text-blue-500">Loading uniforms...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Uniform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {uniforms && uniforms.length > 0 ? (
            uniforms.map((category: any, index: number) => (
              <motion.div
                key={category._id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleCardClick(index)}
                className="cursor-pointer"
              >
                <Card className="shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-64">
                      <Image
                        src={category.uniformImage}
                        alt={category.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <p className="text-gray-600 mt-4">{category.description}</p>
                    <ul className="text-gray-500 mt-3 space-y-1">
                      {category.features?.map((feature: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-center justify-center gap-2 text-sm"
                        >
                          <CheckCircle className="text-green-500 w-4 h-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <p>No uniforms found.</p>
          )}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedIndex !== null && uniforms[selectedIndex] && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative bg-white rounded-2xl max-w-4xl w-full p-6 shadow-xl">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={uniforms[selectedIndex].uniformImage}
                alt={uniforms[selectedIndex].title}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {uniforms[selectedIndex].uniformName}
                {uniforms[selectedIndex].uniformCode}
              </h3>
              <p className="text-gray-600 mt-2">
                {uniforms[selectedIndex].description}
              </p>
              <ul className="text-gray-500 mt-3 space-y-1">
                {uniforms[selectedIndex].features?.map(
                  (feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-2 text-sm"
                    >
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* ✅ Contact Section */}
      <div className="mt-16">
        <ContactAdvertise />
      </div>
    </section>
  );
};

export default SchoolUniformsPage;
