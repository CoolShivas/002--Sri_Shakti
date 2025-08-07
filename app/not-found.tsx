"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        className="text-6xl font-bold text-rose-600 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-md mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or go back to the homepage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-white bg-gray-900 rounded-lg text-sm font-medium hover:bg-rose-600 transition"
        >
          <ArrowLeftCircle className="mr-2 w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
