"use client";

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../../redux/slice";
import { fetchLogoHeroBgImageServer } from "../../redux/thirdSlice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import ContactAdvertise from "@/components/ContactAdvertise";
import SidebarLinks from "@/components/SidebarLinks";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const UniformSuitingPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);
  const logoHeroArr = useSelector((state: any) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  const uniforms = useSelector((state: any) =>
    selectUniformsByTypeAndSubtype(state, "school", "suiting")
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  const logoItem = logoHeroArr.find((item: any) => item?.type === "logo");
  const logoUrl = logoItem?.url || "/placeholder-logo.png";

  // Modal States
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showPrev = useCallback(() => {
    if (uniforms.length && selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? uniforms.length - 1 : (prev as number) - 1
      );
    }
  }, [uniforms, selectedIndex]);

  const showNext = useCallback(() => {
    if (uniforms.length && selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === uniforms.length - 1 ? 0 : (prev as number) + 1
      );
    }
  }, [uniforms, selectedIndex]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <SidebarLinks />

      {/* Main Content */}
      <main className="flex-1">
        {isLoading && (
          <div className="py-10 text-center text-lg">Loading uniforms...</div>
        )}
        {error && <div className="py-10 text-center text-red-500">{error}</div>}

        <section className="py-16">
          <div className="container mx-auto px-4">
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
                        onClick={() => setSelectedIndex(index)}
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
                            {/* Logo overlay on image */}
                            <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full shadow">
                              <img
                                src={logoUrl}
                                alt="Logo"
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div className="absolute bottom-2 right-0 bg-sky-200/80 text-sm px-3 py-1 rounded font-semibold shadow-md">
                              {uniform.uniformCode}
                            </div>
                          </div>
                          <p className="mt-4 text-gray-700 line-clamp-3">
                            {uniform.description}
                          </p>
                          <p className="mt-2 text-blue-600 font-semibold">
                            View details →
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                : !isLoading && (
                    <p className="text-center text-gray-500">
                      No Suiting uniforms found.
                    </p>
                  )}
            </div>
          </div>
        </section>

        <ContactAdvertise />
      </main>

      {/* Modal */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-3xl w-full mx-4"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl max-h-[70vh] overflow-hidden">
              <Image
                src={uniforms[selectedIndex].image}
                alt={uniforms[selectedIndex].title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
            {/* Logo inside modal */}
            <div className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Close Button (small & neat) */}
            <button
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              onClick={closeModal}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Arrows (small, circular) */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              onClick={showPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              onClick={showNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default UniformSuitingPage;
