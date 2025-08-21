"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../redux/slice";
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
  const isLoading = useSelector((state: any) => state.uniformData.isLoading);
  const error = useSelector((state: any) => state.uniformData.error);

  // ✅ grab 1 item per subtype
  const cbseUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "cbse")
  );
  const privateUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "private")
  );
  const govtUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "government")
  );

  const shirtingUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "shirting")
  );

  const suitingUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "suiting")
  );

  const plainUniforms = useSelector(
    selectUniformsByTypeAndSubtype("school", "plain")
  );

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
  }, [dispatch]);

  // ✅ pick one sample from each subtype
  const previews = [
    {
      label: "CBSE",
      link: "/schooluniform/cbseschooluniform",
      data: cbseUniforms[0],
    },
    {
      label: "Private",
      link: "/schooluniform/privateschooluniform",
      data: privateUniforms[0],
    },
    {
      label: "Government",
      link: "/schooluniform/govtschooluniform",
      data: govtUniforms[0],
    },
    {
      label: "Uniform Shirtings",
      link: "/schooluniform/uniformshirtings",
      data: shirtingUniforms[0],
    },
    {
      label: "Uniform Suitings",
      link: "/schooluniform/uniformsuitings",
      data: suitingUniforms[0],
    },
    {
      label: "Plain",
      link: "/schooluniform/plainschooluniform",
      data: plainUniforms[0],
    },
  ].filter((p) => p.data); // only keep if data exists

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 text-white">
        <div className="container mx-auto text-center">
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
