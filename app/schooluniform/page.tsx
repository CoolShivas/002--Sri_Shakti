"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectAllUniforms,
  selectUniformsByTypeAndSubtype,
} from "../redux/slice";
import { fetchLogoHeroBgImageServer } from "../redux/thirdSlice"; // Adjust path
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

const SchoolUniformsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state?.uniformData?.isLoading ?? false
  );
  const error = useSelector((state) => state?.uniformData?.error ?? null);
  const logoHeroStatus = useSelector(
    (state) => state?.logoHeroImages?.status ?? "idle"
  );
  const logoHeroArr = useSelector((state) =>
    Array.isArray(state?.logoHeroImages?.logoHeroArr)
      ? state.logoHeroImages.logoHeroArr
      : []
  );

  // Fetch all uniforms once
  const allUniforms = useSelector(selectAllUniforms);

  // Memoize uniform types
  const uniformTypes = useMemo(
    () => [
      { type: "school", subtype: "cbse" },
      { type: "school", subtype: "private" },
      { type: "school", subtype: "government" },
      { type: "school", subtype: "shirting" },
      { type: "school", subtype: "suiting" },
      { type: "school", subtype: "plain" },
    ],
    []
  );

  // Process uniforms for each subtype
  const previews = useMemo(
    () =>
      uniformTypes
        .map(({ subtype }, index) => {
          const uniformData = selectUniformsByTypeAndSubtype(
            { uniformData: { uniformArr: allUniforms } },
            "school",
            subtype
          );
          return {
            label: subtype.charAt(0).toUpperCase() + subtype.slice(1),
            link: `/schooluniform/${subtype}schooluniform`,
            data: uniformData[0],
          };
        })
        .filter((p) => p.data),
    [allUniforms, uniformTypes]
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  // Find logo (type: "logo") and hero image (name: "school-hero-section", type: "background")
  const logoItem = logoHeroArr.find((item) => item?.type === "logo");
  const heroItem = logoHeroArr.find(
    (item) =>
      item?.name === "school-hero-section" && item?.type === "background"
  );

  const logoUrl = logoItem?.url || "/placeholder-logo.png";
  const heroImageUrl = heroItem?.url || "/placeholder-hero.jpg";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Overlay for text readability */}
        <div className="container mx-auto text-center relative z-10">
          {logoHeroStatus === "loading" ? (
            <p className="text-center mb-4">Loading logo...</p>
          ) : logoHeroStatus === "failed" ? (
            <p className="text-center text-red-500 mb-4">
              Error loading logo: {logoHeroStatus.error}
            </p>
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
                src={logoUrl}
                alt="Sri Sakthi Uniforms Logo"
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
            School Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Browse our school uniform categories.
          </motion.p>
        </div>
      </section>

      {/* Loading & Error */}
      {isLoading && (
        <div className="py-10 text-center text-lg">Loading uniforms...</div>
      )}
      {error && <div className="py-10 text-center text-red-500">{error}</div>}

      {/* Cards Grid (1 per type) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
                      <Card className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <h3 className="text-xl font-semibold">
                            {preview.data.title}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <div className="relative h-60">
                            <Image
                              src={preview.data.image}
                              alt={preview.data.title}
                              fill
                              className="object-cover rounded-lg"
                              priority={index < 3} // Add priority for first 3 cards
                            />
                          </div>
                          <p className="mt-4 text-gray-700 line-clamp-3">
                            {preview.data.description}
                          </p>
                          <p className="mt-2 text-blue-600 font-semibold">
                            View all {preview.label} uniforms →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              : !isLoading && (
                  <p className="text-center col-span-full text-gray-500">
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

export default SchoolUniformsPage;
