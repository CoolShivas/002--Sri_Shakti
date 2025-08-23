"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../../redux/slice";
import { fetchLogoHeroBgImageServer } from "../../redux/thirdSlice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import SidebarLinks from "@/components/SidebarLinks";
import ContactAdvertise from "@/components/ContactAdvertise";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const UniformShirtingsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state) => state?.uniformData?.error ?? null);

  const logoHeroArr = useSelector((state) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  const uniforms = useSelector((state) =>
    selectUniformsByTypeAndSubtype(state, "school", "shirting")
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  const logoItem = logoHeroArr.find((item) => item?.type === "logo");
  const logoUrl = logoItem?.url || "/placeholder-logo.png";

  // Modal State
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) =>
        prev !== null ? (prev + 1) % uniforms.length : null
      );
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) =>
        prev !== null ? (prev - 1 + uniforms.length) % uniforms.length : null
      );
    } else if (e.key === "Escape") {
      setSelectedIndex(null);
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, uniforms.length]);

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
                  ? uniforms.map((uniform, index) => (
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
                              {/* Overlay Logo */}
                              {logoUrl && (
                                <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded-full shadow-md">
                                  <img
                                    src={logoUrl}
                                    alt="Logo"
                                    className="h-10 w-10 object-contain"
                                  />
                                </div>
                              )}
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
                        No Shirtings uniforms found.
                      </p>
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactAdvertise />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && uniforms[selectedIndex] && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={uniforms[selectedIndex].image}
                alt={uniforms[selectedIndex].title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 text-white bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                <X size={24} />
              </button>

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + uniforms.length) % uniforms.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % uniforms.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniformShirtingsPage;
