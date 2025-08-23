// // Having Quick Links in sidebar of all Sub - Pages related to School.

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../../redux/slice";
import { fetchLogoHeroBgImageServer } from "../../redux/thirdSlice";
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

const SuitingSchoolUniformsPage = () => {
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

  const uniforms = useSelector((state) =>
    selectUniformsByTypeAndSubtype(state, "school", "suiting")
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer());
    dispatch(fetchLogoHeroBgImageServer());
  }, [dispatch]);

  const logoItem = logoHeroArr.find((item) => item?.type === "logo");
  const heroItem = logoHeroArr.find(
    (item) =>
      item?.name === "school-hero-section" && item?.type === "background"
  );

  const logoUrl = logoItem?.url || "/placeholder-logo.png";
  const heroImageUrl = heroItem?.url || "/placeholder-hero.jpg";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0 md:mr-6 hidden md:block">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
        <ul className="space-y-3">
          {[
            { subtype: "cbse", label: "CBSE Uniforms" },
            { subtype: "private", label: "Private Uniforms" },
            { subtype: "government", label: "Government Uniforms" },
            { subtype: "shirting", label: "Uniform Shirtings" },
            { subtype: "suiting", label: "Uniform Suitings" },
            { subtype: "plain", label: "Plain Uniforms" },
          ].map(({ subtype, label }) => (
            <li key={subtype}>
              <Link
                href={`/schooluniform/${subtype}schooluniform`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          Recommendation
        </h2>
        <Link
          href="/schooluniform/bestsellers"
          className="text-green-600 hover:text-green-800 hover:underline block font-semibold transition-colors duration-200"
        >
          Best Sellers
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
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
              Suiting School Uniforms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg"
            >
              Explore our collection of CBSE school uniforms.
            </motion.p>
          </div>
        </section>

        {isLoading && (
          <div className="py-10 text-center text-lg">Loading uniforms...</div>
        )}
        {error && <div className="py-10 text-center text-red-500">{error}</div>}

        <section className="py-16">
          <div className="container mx-auto px-4">
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
                      <Link
                        href={`/schooluniform/cbseschooluniform/${
                          uniform.id || index
                        }`}
                      >
                        <Card className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
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
                            <p className="mt-2 text-blue-600 font-semibold">
                              View details →
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))
                : !isLoading && (
                    <p className="text-center text-gray-500">
                      No CBSE uniforms found.
                    </p>
                  )}
            </div>
          </div>
        </section>

        <ContactAdvertise />
      </main>
    </div>
  );
};

export default SuitingSchoolUniformsPage;
