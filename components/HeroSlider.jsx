"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      images: [
        "/hero-school-uniforms.jpg",
        "/hero-womens-uniforms.jpg",
        "/hero-mens-uniforms.jpg",
        "/hero-company-uniforms.jpg",
      ],
      title: "SCHOOL UNIFORMS",
      subtitle:
        "CBSE School Uniforms, Private School Uniforms and Government School Uniforms",
    },
    {
      images: [
        "/hero-womens-uniforms.jpg",
        "/hero-school-uniforms.jpg",
        "/hero-mens-uniforms.jpg",
        "/hero-company-uniforms.jpg",
      ],
      title: "WOMENS UNIFORMS",
      subtitle:
        "Teachers Uniform Sarees, Staff Uniform Sarees and Wedding Uniform Sarees",
    },
    {
      images: [
        "/hero-mens-uniforms.jpg",
        "/hero-school-uniforms.jpg",
        "/hero-womens-uniforms.jpg",
        "/hero-company-uniforms.jpg",
      ],
      title: "MENS UNIFORMS",
      subtitle: "Uniform Shirts, Uniform Pants and Uniform Blazers",
    },
    {
      images: [
        "/hero-company-uniforms.jpg",
        "/hero-school-uniforms.jpg",
        "/hero-womens-uniforms.jpg",
        "/hero-mens-uniforms.jpg",
      ],
      title: "COMPANY UNIFORMS",
      subtitle: "Mens Uniforms, Womens Uniforms and Staff Uniforms",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 60 },
    }),
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const bannerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="flex h-full absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slides[currentSlide].images.map((image, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-1/4 h-full relative overflow-hidden"
              custom={i}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={imageVariants}
            >
              <img
                src={image}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Red Banner */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <div className="bg-red-800/95 backdrop-blur-sm px-8 py-6 md:px-16 md:py-8 transform -skew-x-12 shadow-2xl">
          <div className="transform skew-x-12 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 tracking-wider">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-lg opacity-95 max-w-md mx-auto">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-red-600 scale-125"
                : "bg-white/70 hover:bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
