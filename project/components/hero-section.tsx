"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Globe, Zap, Drill, ChevronsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { Inter, Poppins } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';

// Load fonts
const headingFont = Poppins({
  weight: '600', // SemiBold
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export function HeroSection() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/11363492/11363492-hd_720_1280_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <img
            src="https://cdn.builder.io/api/v1/assets/01354b77542a480c9b459616a3d70d74/screenshot-2025-06-23-104214-1bef77?format=webp&width=1920"
            alt="Oil field operations"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Animated particles - only render after mount to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-center space-x-4 mb-8">
          {/* <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45 animate-pulse-glow">
              <Drill className="w-8 h-8 text-white transform -rotate-45" />
            </div>
          </div> */}
          {/* <div className="text-white">
            <div className="text-2xl font-bold tracking-wider">GTO</div>
            <div className="text-base text-orange-400 font-medium">GULF TECHNICAL OPERATIONS</div>
          </div> */}
        </div>
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              One stop shopping - where oilfield
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              solutions / services is our goal
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-4xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            At Gulf Technical Operations LLC, we bring over 40 years of
            industry-leading experience to every well and project. As the
            trusted supplier of high-quality equipment and services, we proudly
            serve the Middle East, North Africa, and Southeast Asia with a
            commitment to excellence, reliability, and unmatched expertise.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/30 text-base relative overflow-hidden"
            >
              <span className="relative z-10">Read More</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Button>
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "40+", label: "Years Experience", delay: 0 },
              { value: "500+", label: "Projects Completed", delay: 0.1 },
              { value: "50+", label: "Countries Served", delay: 0.2 },
              { value: "99%", label: "Client Satisfaction", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + stat.delay }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-500 group-hover:from-orange-200 group-hover:to-orange-400 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 mt-2 group-hover:text-white transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}
