"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectAllUniforms,
  selectUniformsByTypeAndSubtype,
} from "../redux/slice";
import { fetchLogoHeroBgImageServer } from "../redux/thirdSlice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ContactAdvertise from "@/components/ContactAdvertise";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const WomenUniformsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state: any) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state: any) => state?.uniformData?.error ?? null);

  const logoHeroStatus = useSelector(
    (state: any) => state?.logoHeroImages?.status ?? "idle"
  );
  const logoHeroArr = useSelector((state: any) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  const allUniforms = useSelector(selectAllUniforms);

  // 🔹 Extract unique subtypes dynamically for "Womens"
  const uniqueSubtypes = useMemo(() => {
    const womensUniforms = allUniforms.filter(
      (u: any) => u.uniformType === "Womens"
    );
    const seen = new Set<string>();
    return womensUniforms.filter((u: any) => {
      if (seen.has(u.uniformSubtype)) return false;
      seen.add(u.uniformSubtype);
      return true;
    });
  }, [allUniforms]);

  // 🔹 Prepare previews for each unique subtype
  const previews = useMemo(
    () =>
      uniqueSubtypes
        .map((item: any) => {
          const uniformData = selectUniformsByTypeAndSubtype(
            { uniformData: { uniformArr: allUniforms } },
            "Womens",
            item.uniformSubtype
          );
          return {
            label: item.uniformSubtype,
            link: `/womenuniform/${item.uniformSubtype
              .replace(/\s+/g, "")
              .toLowerCase()}`,
            data: uniformData[0],
          };
        })
        .filter((p) => p.data),
    [allUniforms, uniqueSubtypes]
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
    dispatch(fetchLogoHeroBgImageServer() as any);
  }, [dispatch]);

  const logoItem = logoHeroArr.find((item: any) => item?.type === "logo");
  const heroImageUrl =
    logoHeroArr.find(
      (item: any) =>
        item?.name === "women-hero-section" && item?.type === "background"
    )?.url || "/placeholder-hero.jpg";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
          {logoHeroStatus === "loading" ? (
            <p className="text-center mb-4">Loading logo...</p>
          ) : logoHeroStatus === "failed" ? (
            <p className="text-center text-red-500 mb-4">Error loading logo</p>
          ) : !logoItem ? (
            <p className="text-center text-yellow-500 mb-4">Logo not found</p>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <img
                src={logoItem.url || "/placeholder-logo.png"}
                alt="Shikha Uniforms Logo"
                className="h-16 w-auto rounded-full shadow-md object-contain mx-auto"
              />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold"
          >
            Women Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Browse our women uniform categories.
          </motion.p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div className="py-10 text-center text-lg">Loading uniforms...</div>
          )}
          {error && (
            <div className="py-10 text-center text-red-500">{error}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previews.length > 0
              ? previews.map((preview, index) => (
                  <motion.div
                    key={preview.label}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                  >
                    <Link href={preview.link}>
                      <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
                        <CardContent>
                          <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                            {/* Main Image */}
                            <Image
                              src={preview.data.image}
                              alt={preview.data.title}
                              width={1200}
                              height={800}
                              className="w-full h-auto rounded-lg shadow-lg object-contain"
                              priority={index < 3}
                            />

                            {/* 🔹 Logo Overlay (top-right) */}
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

                            {/* 🔹 Uniform Code Overlay (bottom-right) */}
                            {preview.data.uniformCode && (
                              <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                                {preview.data.uniformCode}
                              </div>
                            )}
                          </div>
                          <CardHeader>
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue  text-center hover:text-red-500 cursor-pointer">
                              {preview.data.title}
                            </h3>
                          </CardHeader>
                          <p className=" text-blue-600 font-bold text-center">
                            View all {preview.label} uniforms →
                          </p>
                          <p className="mt-6 text-gray-800 line-clamp-3 text-sm font-semibold">
                            {preview.data.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              : !isLoading && (
                  <p className="text-center text-gray-500">
                    No uniforms found.
                  </p>
                )}
          </div>
        </div>
      </section>

      <ContactAdvertise />
    </div>
  );
};

export default WomenUniformsPage;
