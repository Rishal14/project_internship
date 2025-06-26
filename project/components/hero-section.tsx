"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  splashDone: boolean;
};

export function HeroSection({ splashDone }: Props) {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heading = "One stop shopping – where oilfield solutions / services is our goal";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/17516669-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full px-8 sm:px-12 lg:px-20">
        <div className="w-full max-w-2xl mt-12">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-400 leading-snug tracking-wide mb-6 flex flex-wrap gap-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            {heading.split(" ").map((word, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-white text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            At Gulf Technical Operations LLC, we bring over 40 years of industry-leading experience to every well and project. As the trusted supplier of high-quality equipment and services, we proudly serve the Middle East, North Africa, and Southeast Asia with a commitment to excellence, reliability, and unmatched expertise.
          </motion.p>

          {/* Button */}
          <motion.button
  onClick={scrollToAbout}
  className="bg-yellow-400 text-black px-8 py-3 text-base font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300"
  initial={{ opacity: 0, y: 10 }}
  animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Who We Are
</motion.button>
        </div>
      </div>
    </section>
  );
}
