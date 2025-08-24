"use client";

import { useEffect, useState, useCallback } from "react";
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

const SilkCottonUniformSareesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);

  const uniforms = useSelector((state: any) =>
    selectUniformsByTypeAndSubtype(
      state,
      "Womens",
      "Silk Cotton Uniform Sarees"
    )
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % uniforms.length
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + uniforms.length) % uniforms.length
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    },
    [selectedIndex, uniforms.length]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleKeyDown]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1 bg-white p-6 shadow-lg rounded-lg">
              <SidebarLinks />
            </div>

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
                        key={uniform._id || index}
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
                            </div>
                            <p className="mt-4 text-gray-700 line-clamp-3">
                              {uniform.description}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              Code:{" "}
                              <span className="font-semibold">
                                {uniform.uniformCode}
                              </span>
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  : !isLoading && (
                      <p className="text-center text-gray-500">
                        No Silk Cotton Uniform Sarees found.
                      </p>
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full px-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={uniforms[selectedIndex].image}
                alt={uniforms[selectedIndex].title}
                width={1000}
                height={700}
                className="rounded-lg object-contain mx-auto"
              />

              <button
                className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + uniforms.length) % uniforms.length
                  )
                }
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % uniforms.length)
                }
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactAdvertise />
    </div>
  );
};

export default SilkCottonUniformSareesPage;
