"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <motion.div
        className="card overflow-hidden"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.03 }}
      >
        <Image
          src="/images/category-school.jpg"
          alt="image not found"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
        <Image
          src="/images/category-school.jpg"
          alt="image not found"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
        <Image
          src="/images/category-school.jpg"
          alt="image not found"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />

        <div className="p-3 text-sm text-gray-600">
          CODE: <span className="font-semibold">Unique Code of an image</span>
        </div>
      </motion.div>
    </div>
  );
}
