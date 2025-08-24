"use client";

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { fetchUniformApiServer, selectUniformsByType } from "../redux/slice";
import { fetchLogoHeroBgImageServer } from "../redux/thirdSlice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import ContactAdvertise from "@/components/ContactAdvertise";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const OtherUniformPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);

  // ✅ Select only "Other Uniform"
  const uniforms = useSelector((state: any) =>
    selectUniformsByType(state, "Other")
  );

  const logoHeroStatus = useSelector(
    (state: any) => state?.logoHeroImages?.status ?? "idle"
  );
  const logoHeroArr = useSelector((state: any) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
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
    if (selectedIndex !== null)
      window.addEventListener("keydown", handleKeyDown);
    else window.removeEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleKeyDown]);

  const logoItem = logoHeroArr.find((item: any) => item?.type === "logo");
  const heroImageUrl =
    logoHeroArr.find(
      (item: any) =>
        item?.name === "other-hero-section" && item?.type === "background"
    )?.url || "/placeholder-hero.jpg";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Hero Section */}
      <section
        className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto text-center relative z-10 px-4">
          {logoItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <img
                src={logoItem.url || "/placeholder-logo.png"}
                alt="Sri Sakthi Uniforms Logo"
                className="h-16 w-auto rounded-full shadow-md object-contain mx-auto"
              />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            Other Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base sm:text-lg"
          >
            Browse our other uniform categories.
          </motion.p>
        </div>
      </section>

      {/* ✅ Uniform Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div className="py-10 text-center text-lg">Loading uniforms...</div>
          )}
          {error && (
            <div className="py-10 text-center text-red-500">{error}</div>
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
                        <h3 className="text-xl font-semibold">
                          {uniform.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <div className="relative aspect-[4/3] w-full">
                          {/* ✅ Uniform Image fixed aspect ratio */}
                          <Image
                            src={uniform.image}
                            alt={uniform.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw,
                                   (max-width: 1200px) 50vw,
                                   33vw"
                            priority={index < 3}
                          />

                          {/* ✅ Overlay Logo (top-right corner) */}
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

                          {/* ✅ Uniform Code (bottom-right corner) */}
                          {uniform.uniformCode && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {uniform.uniformCode}
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
                    No Other Uniforms found.
                  </p>
                )}
          </div>
        </div>
      </section>

      {/* ✅ Modal */}
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
              <div className="relative">
                <Image
                  src={uniforms[selectedIndex].image}
                  alt={uniforms[selectedIndex].title}
                  width={1000}
                  height={700}
                  className="rounded-lg object-contain mx-auto"
                />

                {/* ✅ Overlay Logo in Modal */}
                {logoItem && (
                  <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md">
                    <Image
                      src={logoItem.url}
                      alt="Logo"
                      width={50}
                      height={50}
                      className="object-contain rounded-full"
                    />
                  </div>
                )}

                {/* ✅ Uniform Code in Modal */}
                {uniforms[selectedIndex].uniformCode && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                    {uniforms[selectedIndex].uniformCode}
                  </div>
                )}
              </div>

              <button
                className="absolute top-4 left-4 bg-black/60 p-2 rounded-full text-white"
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

export default OtherUniformPage;
