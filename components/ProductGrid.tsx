"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes.webp"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes2.webp"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes3.jpg"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes.webp"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes2.webp"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
      {/* Starting of Product Grid Images */}
      <motion.div
        key=""
        custom=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 hover:from-brand-red/5 hover:to-brand-blue/10 border border-gray-200 hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl rounded-xl group p-2">
          <CardHeader>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-2xl max-h-[30vh] overflow-hidden cursor-pointer">
                <Image
                  src="/images/clothes3.jpg"
                  alt=""
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white/70 rounded-full p-2 shadow-md">
                  <Image
                    src="/images/SriSakthi.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-0 bg-sky-200/80 text-xl px-3 py-1 rounded font-semibold shadow-md">
                  Code:-007
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
      {/* Ending of Product Grid Images */}
    </div>
  );
}
