"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../../redux/slice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import SidebarLinks from "@/components/SidebarLinks";
import ContactAdvertise from "@/components/ContactAdvertise";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const PlainSchoolUniformsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);

  const uniforms = useSelector((state: any) =>
    selectUniformsByTypeAndSubtype(state, "school", "plain")
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
  }, [dispatch]);

  // Modal handlers
  const openModal = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? uniforms.length - 1 : prev - 1));
    setSelectedImage(
      uniforms[currentIndex === 0 ? uniforms.length - 1 : currentIndex - 1]
        .image
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === uniforms.length - 1 ? 0 : prev + 1));
    setSelectedImage(
      uniforms[currentIndex === uniforms.length - 1 ? 0 : currentIndex + 1]
        .image
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, uniforms]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-white p-6 shadow-lg rounded-lg">
              <SidebarLinks />
            </div>

            {/* Uniform Cards */}
            <div className="md:col-span-3">
              {isLoading && (
                <div className="py-10 text-center text-lg">
                  Loading uniforms...
                </div>
              )}
              {error && (
                <div className="py-10 text-center text-red-500">{error}</div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {uniforms.length > 0
                  ? uniforms.map((uniform: any, index: number) => (
                      <motion.div
                        key={uniform.id || index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                      >
                        <Card
                          className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                          onClick={() => openModal(uniform.image, index)}
                        >
                          <CardHeader>
                            <h3 className="text-xl font-semibold">
                              {uniform.title}
                            </h3>
                          </CardHeader>
                          <CardContent>
                            <div className="relative h-60">
                              <Image
                                src={uniform.image}
                                alt={uniform.title}
                                fill
                                className="object-cover rounded-lg"
                                priority={index < 3}
                              />
                            </div>
                            <p className="mt-4 text-gray-700 line-clamp-3">
                              {uniform.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  : !isLoading && (
                      <p className="text-center text-gray-500">
                        No Plain School uniforms found.
                      </p>
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Left Arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl"
              onClick={showPrev}
            >
              &#10094;
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl"
              onClick={showNext}
            >
              &#10095;
            </button>

            {/* Image with zoom-in */}
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Zoomed"
              className="w-full h-auto rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}

      <ContactAdvertise />
    </div>
  );
};

export default PlainSchoolUniformsPage;
