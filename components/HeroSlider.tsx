// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Slide {
//   image: string;
//   title: string;
//   subtitle: string;
// }

// const slides: Slide[] = [
//   {
//     image: "/images/hero-school-uniforms.jpg",
//     title: "SCHOOL UNIFORMS",
//     subtitle:
//       "CBSE School Uniforms, Private School Uniforms and Government School Uniforms",
//   },
//   {
//     image: "/images/hero-womens-uniforms.jpg",
//     title: "WOMENS UNIFORMS",
//     subtitle:
//       "Teachers Uniform Sarees, Staff Uniform Sarees and Wedding Uniform Sarees",
//   },
//   {
//     image: "/images/hero-mens-uniforms.jpg",
//     title: "MENS UNIFORMS",
//     subtitle: "Uniform Shirts, Uniform Pants and Uniform Blazers",
//   },
//   {
//     image: "/images/hero-company-uniforms.jpg",
//     title: "COMPANY UNIFORMS",
//     subtitle: "Mens Uniforms, Womens Uniforms and Staff Uniforms",
//   },
// ];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-r">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0 w-full h-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={slides[current].image}
//               alt={slides[current].title}
//               fill
//               className="object-cover object-center"
//               priority
//             />
//             <div className="absolute inset-0 bg-black/30" />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Banner */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center text-center px-4"
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
//       >
//         <div className="bg-red-800/90 px-6 py-4 md:px-12 md:py-8 backdrop-blur-sm shadow-lg rounded-lg">
//           <h2 className="text-xl md:text-4xl text-white font-bold mb-2">
//             {slides[current].title}
//           </h2>
//           <p className="text-sm md:text-lg text-white max-w-xl mx-auto">
//             {slides[current].subtitle}
//           </p>
//         </div>
//       </motion.div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
//       >
//         <ChevronRight />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === current ? "bg-red-600 scale-125" : "bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

//////////*************************************************************************//////// */

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchLogoHeroBgImageServer } from "@/app/redux/thirdSlice";

// interface Slide {
//   image: string;
//   title: string;
//   subtitle: string;
// }

// const HeroSlider = () => {
//   const dispatch = useDispatch();

//   // Redux state
//   const logoHeroArr = useSelector(
//     (state: any) => state.logoHeroImages.logoHeroArr
//   );
//   const logoStatus = useSelector((state: any) => state.logoHeroImages.status);

//   // Fetch hero images if idle
//   useEffect(() => {
//     if (logoStatus === "idle") {
//       dispatch(fetchLogoHeroBgImageServer());
//     }
//   }, [dispatch, logoStatus]);

//   // Filter hero images from Redux
//   const heroImages = logoHeroArr
//     .filter((item: any) => item?.type === "background") // adjust type if needed
//     .map((item: any) => ({
//       image: item.url || "/placeholder-hero.jpg",
//       title: item.title || "", // optional: backend can provide title
//       subtitle: item.subtitle || "", // optional: backend can provide subtitle
//     }));

//   // Fallback if no hero images from API
//   const slides: Slide[] = heroImages.length
//     ? heroImages
//     : [
//         {
//           image: "/images/hero-school-uniforms.jpg",
//           title: "SCHOOL UNIFORMS",
//           subtitle:
//             "CBSE School Uniforms, Private School Uniforms and Government School Uniforms",
//         },
//       ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-r">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           className="absolute inset-0 w-full h-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={slides[current].image}
//               alt={slides[current].title}
//               fill
//               className="object-cover object-center"
//               priority
//             />
//             <div className="absolute inset-0 bg-black/30" />
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Banner */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center text-center px-4"
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
//       >
//         <div className="bg-red-800/90 px-6 py-4 md:px-12 md:py-8 backdrop-blur-sm shadow-lg rounded-lg">
//           <h2 className="text-xl md:text-4xl text-white font-bold mb-2">
//             {slides[current].title}
//           </h2>
//           <p className="text-sm md:text-lg text-white max-w-xl mx-auto">
//             {slides[current].subtitle}
//           </p>
//         </div>
//       </motion.div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
//       >
//         <ChevronRight />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === current ? "bg-red-600 scale-125" : "bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

//////////******************************************************************************////////////// */
///////////************************************************************************//////////////////////// */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogoHeroBgImageServer } from "@/app/redux/thirdSlice";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

// Hardcoded subtitles mapping based on title
const subtitleFallbacks: Record<string, string> = {
  "SCHOOL UNIFORMS":
    "CBSE School Uniforms, Private School Uniforms and Government School Uniforms",
  "WOMENS UNIFORMS":
    "Teachers Uniform Sarees, Staff Uniform Sarees and Wedding Uniform Sarees",
  "MENS UNIFORMS": "Uniform Shirts, Uniform Pants and Uniform Blazers",
  "COMPANY UNIFORMS": "Mens Uniforms, Womens Uniforms and Staff Uniforms",
};

const HeroSlider = () => {
  const dispatch = useDispatch();

  // Redux state
  const logoHeroArr = useSelector(
    (state: any) => state.logoHeroImages.logoHeroArr
  );
  const logoStatus = useSelector((state: any) => state.logoHeroImages.status);

  // Fetch hero images if idle
  useEffect(() => {
    if (logoStatus === "idle") {
      dispatch(fetchLogoHeroBgImageServer());
    }
  }, [dispatch, logoStatus]);

  // Map hero images from Redux, applying subtitle fallbacks
  const heroImages = logoHeroArr
    .filter((item: any) => item?.type === "background")
    .map((item: any) => ({
      image: item.url || "/placeholder-hero.jpg",
      title: item.title || "",
      subtitle:
        item.subtitle ||
        subtitleFallbacks[item.title?.toUpperCase()] ||
        "Explore our premium uniform collection",
    }));

  // Fallback if no hero images from API
  const slides: Slide[] = heroImages.length
    ? heroImages
    : [
        {
          image: "/images/hero-school-uniforms.jpg",
          title: "SCHOOL UNIFORMS",
          subtitle: subtitleFallbacks["SCHOOL UNIFORMS"],
        },
      ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-r">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Banner */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-center px-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
      >
        <div className="bg-red-800/90 px-6 py-4 md:px-12 md:py-8 backdrop-blur-sm shadow-lg rounded-lg">
          <h2 className="text-xl md:text-4xl text-white font-bold mb-2">
            {slides[current].title}
          </h2>
          <p className="text-xl md:text-lg text-white max-w-xl mx-auto">
            {slides[current].subtitle}
          </p>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-red-600 scale-125" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
