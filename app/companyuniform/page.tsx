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

const CompanyUniformPage = () => {
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

  // 🔹 Extract unique subtypes dynamically for "Company"
  const uniqueSubtypes = useMemo(() => {
    const companyUniforms = allUniforms.filter(
      (u: any) => u.uniformType === "Company"
    );
    const seen = new Set<string>();
    return companyUniforms.filter((u: any) => {
      if (seen.has(u.uniformSubtype)) return false;
      seen.add(u.uniformSubtype);
      return true;
    });
  }, [allUniforms]);

  // 🔹 Prepare previews for each subtype
  const previews = useMemo(
    () =>
      uniqueSubtypes
        .map((item: any) => {
          const uniformData = selectUniformsByTypeAndSubtype(
            { uniformData: { uniformArr: allUniforms } },
            "Company",
            item.uniformSubtype
          );
          return {
            label: item.uniformSubtype,
            link: `/companyuniform/${item.uniformSubtype
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
        item?.name === "company-hero-section" && item?.type === "background"
    )?.url || "/placeholder-hero.jpg";

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto text-center relative z-10">
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
            Company Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg"
          >
            Discover our wide collection of company uniforms tailored for
            different industries.
          </motion.p>
        </div>
      </section>

      {/* Subpage Cards */}
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
                      <Card className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <h3 className="text-xl font-semibold capitalize">
                            {preview.label}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          {/* 🔹 Image container with overlays */}
                          <div className="relative w-full h-72 bg-white">
                            <Image
                              src={preview.data.image}
                              alt={preview.data.title}
                              fill
                              className="object-contain p-2"
                              priority={index < 3}
                            />

                            {/* 🔹 Logo top-right INSIDE image */}
                            {logoItem && (
                              <div className="absolute top-2 right-20 z-10 bg-white/80 rounded-full p-1 shadow">
                                <img
                                  src={logoItem.url}
                                  alt="Logo"
                                  className="h-8 w-8 object-contain"
                                />
                              </div>
                            )}

                            {/* 🔹 Uniform Code bottom-right INSIDE image */}
                            {preview.data.uniformCode && (
                              <div className="absolute bottom-2 right-20 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {preview.data.uniformCode}
                              </div>
                            )}
                          </div>

                          <p className="mt-4 text-gray-700 line-clamp-3">
                            {preview.data.description}
                          </p>
                          <p className="mt-2 text-blue-600 font-semibold">
                            View all {preview.label} →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              : !isLoading && (
                  <p className="text-center text-gray-500">
                    No company uniforms found.
                  </p>
                )}
          </div>
        </div>
      </section>

      <ContactAdvertise />
    </div>
  );
};

export default CompanyUniformPage;
