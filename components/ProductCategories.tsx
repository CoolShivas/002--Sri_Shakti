"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniformApiServer } from "@/app/redux/slice";
import { fetchLogoHeroBgImageServer } from "@/app/redux/thirdSlice";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Animations (kept as in your hard-coded UI) ---
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

type RootState = any;

const ProductCategories = () => {
  const dispatch = useDispatch();

  // --- Pull data from Redux ---
  const uniforms = useSelector(
    (state: RootState) => state?.uniformData?.uniformArr ?? []
  );
  const isLoadingUniforms = useSelector(
    (state: RootState) => state?.uniformData?.isLoading
  );
  const errorUniforms = useSelector(
    (state: RootState) => state?.uniformData?.error
  );

  // NOTE: on previous pages you used logoHeroImages.logoHeroArr
  // We’ll use that and filter items with type === "logo"
  const logoHeroStatus = useSelector(
    (state: RootState) => state?.logoHeroImages?.status ?? "idle"
  );
  const logoHeroArr = useSelector((state: RootState) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
    dispatch(fetchLogoHeroBgImageServer() as any);
  }, [dispatch]);

  // --- First logo from API (company logo) ---
  const apiLogo = useMemo(() => {
    // Prefer items marked as type === "logo"
    const byType = logoHeroArr.find((i: any) => i?.type === "logo");
    return byType?.url ?? logoHeroArr[0]?.url ?? null;
  }, [logoHeroArr]);

  // --- Unique categories from uniforms by uniformType ---
  // We’ll pick one representative item per type for image + code
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const out: {
      title: string;
      image: string;
      subLink: string;
      code_ID: string;
      logo: string | null;
    }[] = [];

    // map uniformType => route
    const routeForType = (t: string) => {
      const key = (t || "").toLowerCase().replace(/\s+/g, "");
      if (key.includes("men")) return "/menuniform";
      if (key.includes("women")) return "/womenuniform";
      if (key.includes("school")) return "/schooluniform";
      if (key.includes("company")) return "/companyuniform";
      if (key.includes("hotel")) return "/hoteluniform";
      if (key.includes("hospital")) return "/hospitaluniform";
      // fallback
      return `/${key}uniform`;
    };

    for (const u of uniforms) {
      const type = (u?.uniformType ?? u?.type ?? "").toString().trim();
      if (!type || seen.has(type)) continue;
      seen.add(type);

      const title =
        /s$/.test(type) || /men|women/i.test(type)
          ? `${type} Uniforms`
          : `${type} Uniforms`; // keep same label pattern

      out.push({
        title,
        image: u?.image ?? "/placeholder.png",
        subLink: routeForType(type),
        code_ID: u?.uniformCode ?? "N/A",
        logo: apiLogo, // same API logo on each card (as requested)
      });
    }
    return out;
  }, [uniforms, apiLogo]);

  // --- Modal state + navigation (kept from your hard-coded UI) ---
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlerOnNext = useCallback(() => {
    if (selectedIndex === null || categories.length === 0) return;
    setSelectedIndex((prev) => ((prev ?? 0) + 1) % categories.length);
  }, [selectedIndex, categories.length]);

  const handlerOnPrevious = useCallback(() => {
    if (selectedIndex === null || categories.length === 0) return;
    setSelectedIndex((prev) =>
      (prev ?? 0) === 0 ? categories.length - 1 : (prev ?? 0) - 1
    );
  }, [selectedIndex, categories.length]);

  useEffect(() => {
    const handlerOnKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handlerOnNext();
      else if (e.key === "ArrowLeft") handlerOnPrevious();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handlerOnKey);
    return () => window.removeEventListener("keydown", handlerOnKey);
  }, [selectedIndex, handlerOnNext, handlerOnPrevious]);

  // --- Loading / Error states ---
  if (isLoadingUniforms || logoHeroStatus === "loading") {
    return <p className="text-center py-10">Loading...</p>;
  }
  if (errorUniforms || logoHeroStatus === "failed") {
    return (
      <p className="text-center py-10 text-red-500">
        Error: {errorUniforms || "Failed to load logos"}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
        {/* --- Title / Subtitle (kept from hard-coded UI) --- */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg p-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            Explore Our Categories
          </motion.h2>

          <motion.p
            className="mt-4 text-md sm:text-lg text-gray-900 font-medium max-w-2xl mx-auto tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 1] }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          >
            Discover top-tier uniform categories crafted for diverse industries
            — designed to inspire confidence, comfort, and style.
          </motion.p>
        </motion.div>

        {/* --- Cards Grid (kept design/animation) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={`${category.title}-${index}`}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
                <CardHeader>
                  <div
                    className="relative w-full h-64 flex items-center justify-center overflow-hidden"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                      {/* Category image (no crop) */}
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-lg object-contain"
                        priority={index < 3}
                      />

                      {/* Top-right Logo from API */}
                      {category.logo && (
                        <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                          <Image
                            src={category.logo}
                            alt="Logo"
                            width={32}
                            height={32}
                            className="object-contain rounded-full"
                            priority
                          />
                        </div>
                      )}

                      {/* Bottom-right Code ID */}
                      <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                        {category.code_ID}
                      </div>
                    </div>
                  </div>

                  {/* Title link (route inferred from uniformType) */}
                  <Link href={category.subLink}>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue mb-2 text-center p-2 hover:text-red-500 cursor-pointer">
                      {category.title}
                    </h3>
                  </Link>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Image Modal (kept from hard-coded UI) --- */}
      {selectedIndex !== null && categories[selectedIndex] && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlerOnPrevious();
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-50"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlerOnNext();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-50"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-6 right-6 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg z-50"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-2xl max-h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={categories[selectedIndex].image}
              alt={categories[selectedIndex].title}
              width={1000}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg object-contain"
              priority
            />

            {/* Logo Watermark */}
            {categories[selectedIndex].logo && (
              <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                <Image
                  src={categories[selectedIndex].logo as string}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-contain"
                  priority
                />
              </div>
            )}

            {/* Code_ID Watermark */}
            <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
              {categories[selectedIndex].code_ID}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
