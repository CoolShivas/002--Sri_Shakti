"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";

// IMPORTANT: from this file's location, go two levels up to redux:
import {
  fetchUniformApiServer,
  selectUniformsByTypeAndSubtype,
} from "../../redux/slice";

import SidebarLinks from "@/components/SidebarLinks";

const GovtSchoolUniforms = () => {
  const dispatch = useDispatch();

  // school + cbse (case-insensitive, includes, with fallbacks if subtype missing)
  const uniforms =
    useSelector(selectUniformsByTypeAndSubtype("school", "government")) || [];

  const isLoading = useSelector((state: any) => state.uniformData?.isLoading);
  const error = useSelector((state: any) => state.uniformData?.error);

  useEffect(() => {
    dispatch(fetchUniformApiServer() as any);
  }, [dispatch]);

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Welcome to Government School Uniforms Page.
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <SidebarLinks />
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {isLoading && (
              <p className="text-center text-lg">Loading uniforms...</p>
            )}
            {error && (
              <p className="text-center text-red-500">
                Failed to load: {error}
              </p>
            )}

            {!isLoading && !error && uniforms.length === 0 && (
              <p className="text-gray-500">No CBSE uniforms found.</p>
            )}

            {!isLoading && !error && uniforms.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {uniforms.map((item: any, idx: number) => {
                  const title = item.name ?? item.title ?? "Untitled";
                  const image =
                    item.imageUrl ?? item.image ?? "/placeholder.png";
                  const desc = item.description ?? "";
                  const price = item.price ?? null;

                  return (
                    <motion.div
                      key={item._id ?? idx}
                      whileHover={{ scale: 1.03 }}
                      className="border rounded-lg shadow-md overflow-hidden bg-white"
                    >
                      <div className="relative w-full h-64">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{title}</h2>
                        {desc && (
                          <p className="text-gray-600 text-sm mb-2">{desc}</p>
                        )}
                        {price != null && (
                          <p className="text-gray-800 font-bold">₹{price}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovtSchoolUniforms;
