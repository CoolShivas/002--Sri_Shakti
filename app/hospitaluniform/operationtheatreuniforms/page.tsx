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

const OperationTheatreUniformPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);

  // ✅ Doctor Uniform Saree: strict filter by uniformType + uniformSubtype
  const uniforms = useSelector((state: any) =>
    selectUniformsByTypeAndSubtype(
      state,
      "Hospital",
      "Operation Theatre Uniforms"
    )
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  // Keyboard navigation for modal
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

  const logoHeroArr = useSelector((state: any) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  const logoItem = logoHeroArr.find((item: any) => item?.type === "logo");

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
                <div className="py-10 text-center text-3xl font-bold">
                  Loading operation theatre uniforms...
                </div>
              )}
              {error && (
                <div className="py-10 text-center text-red-500 text-3xl font-bold">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {uniforms && uniforms.length > 0
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
                            <h3 className="text-xl font-semibold text-center text-blue-500">
                              {uniform.title}
                            </h3>
                          </CardHeader>
                          <CardContent>
                            <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                              {/* Uniform Image */}
                              <Image
                                src={uniform.image}
                                alt={uniform.title}
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-lg shadow-lg object-contain"
                                priority={index < 3}
                              />

                              {/* Logo top-right */}
                              {/* {uniform.logo && (
                                                          <div className="absolute top-2 right-2 rounded p-1">
                                                            <Image
                                                              src={uniform.logo}
                                                              alt="logo"
                                                              width={40}
                                                              height={40}
                                                              className="object-contain"
                                                            />
                                                          </div>
                                                        )} */}

                              {logoItem && (
                                <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full shadow-md">
                                  <Image
                                    src={logoItem.url}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-full"
                                  />
                                </div>
                              )}

                              {/* Uniform Code bottom-right */}
                              {uniform.uniformCode && (
                                <span className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                                  {uniform.uniformCode}
                                </span>
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
                      <p className="text-center text-gray-500 text-2xl font-semibold">
                        No Doctor Uniform Sarees found.
                      </p>
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && uniforms[selectedIndex] && (
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
              {/* Full Image */}
              <div className="relative w-full h-[80vh] bg-white flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={uniforms[selectedIndex].image}
                  alt={uniforms[selectedIndex].title}
                  fill
                  className="object-contain"
                />

                {/* Logo top-right */}
                {/* {uniforms[selectedIndex].logo && (
                  <div className="absolute top-4 right-4 bg-white/80 rounded p-2">
                    <Image
                      src={uniforms[selectedIndex].logo}
                      alt="logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                )} */}

                {logoItem && (
                  <div className="absolute top-4 right-6 bg-white/80 p-2 rounded-full shadow-md">
                    <Image
                      src={logoItem.url}
                      alt="Logo"
                      width={50}
                      height={50}
                      className="object-contain rounded-full"
                    />
                  </div>
                )}

                {/* Uniform Code bottom-right */}
                {uniforms[selectedIndex].uniformCode && (
                  <span className="absolute bottom-4 right-6 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                    {uniforms[selectedIndex].uniformCode}
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={24} />
              </button>

              {/* Left Arrow */}
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

              {/* Right Arrow */}
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

export default OperationTheatreUniformPage;
