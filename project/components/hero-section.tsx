"use client";

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Award, Globe, Zap, Drill, ChevronsDown, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { Inter, Poppins } from 'next/font/google';
import { useRef, useEffect, useState } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ y }}
      >
        {/* Dynamic gradient overlay that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 107, 53, 0.15), transparent 40%)`,
          }}
        />
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Animated overlay with breathing effect */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(0,0,0,0.6), rgba(255,107,53,0.1))",
              "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(255,107,53,0.2))",
              "linear-gradient(45deg, rgba(0,0,0,0.6), rgba(255,107,53,0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Enhanced Floating Particles */}
      <FloatingParticles />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-orange-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-orange-300/40"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Animated badge with sparkle effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative inline-block"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative px-6 py-3 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-orange-300" />
                  </motion.div>
                  <span className="text-sm font-medium text-orange-300 tracking-wider">INNOVATING SINCE 2016</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced animated title */}
            <div className="space-y-4">
              <motion.h1 
                className={`${headingFont.className} text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-200 to-orange-400 mb-4"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Oilfield Excellence
                </motion.span>
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Delivered with{" "}
                  <motion.span
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg blur-sm"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="relative">Precision & Integrity</span>
                  </motion.span>
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Enhanced description with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p 
                className={`${bodyFont.className} text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl tracking-wide`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                At{" "}
                <motion.span 
                  className="font-semibold text-orange-300 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Gulf Technical Operations LLC
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </motion.span>
                , we bring over 40 years of industry-leading 
                experience to every well and project. As the trusted supplier of high-quality 
                equipment and services, we proudly serve the{" "}
                <motion.span 
                  className="text-white font-medium"
                  whileHover={{ color: "#fed7aa" }}
                  transition={{ duration: 0.2 }}
                >
                  Middle East
                </motion.span>
                ,{" "}
                <motion.span 
                  className="text-white font-medium"
                  whileHover={{ color: "#fed7aa" }}
                  transition={{ duration: 0.2 }}
                >
                  North Africa
                </motion.span>
                , and{" "}
                <motion.span 
                  className="text-white font-medium"
                  whileHover={{ color: "#fed7aa" }}
                  transition={{ duration: 0.2 }}
                >
                  Southeast Asia
                </motion.span>{" "}
                with a commitment to excellence, reliability, and unmatched expertise.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className={`${bodyFont.className} group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-orange-500/30 text-lg`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Explore Our Solutions
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="ghost" 
                  size="lg"
                  className={`${bodyFont.className} group relative overflow-hidden border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm px-8 py-6 rounded-xl font-semibold transition-all duration-300 text-lg`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Enhanced trust indicator */}
            <motion.div 
              className="mt-12 flex items-center space-x-6 text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="h-px bg-gradient-to-r from-orange-400/30 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 1, delay: 1.6 }}
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                Trusted by leading energy companies worldwide
              </motion.span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-4 h-4 text-orange-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced stats section with 3D effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 relative"
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Enhanced Stats Cards with magnetic hover */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {[
                { icon: Award, value: "40+", label: "Years Experience", color: "from-orange-500 to-red-500", delay: 0.2 },
                { icon: Globe, value: "60+", label: "Rigs Serviced", color: "from-blue-500 to-cyan-500", delay: 0.4 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: stat.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                  }}
                  className="relative overflow-hidden group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/40 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating icon with complex animation */}
                  <motion.div
                    className="relative z-10"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                  >
                    <stat.icon className="h-10 w-10 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Animated counter */}
                  <motion.div 
                    className="text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: stat.delay + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <motion.div 
                    className="text-sm font-medium text-gray-300 tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: stat.delay + 0.5 }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
              
              {/* Full-width excellence card */}
              <motion.div 
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  rotateX: 5,
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
                }}
                className="relative overflow-hidden group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center col-span-2 border border-gray-700/50 hover:border-orange-500/40 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Drill className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                </motion.div>
                
                <motion.div 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Excellence
                </motion.div>
                <div className="text-sm text-gray-300">Reliability & Unmatched Expertise</div>
              </motion.div>
            </div>

            {/* Floating oil rig decoration with complex animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 0.3, scale: 1, rotateY: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-1/2 right-10 transform -translate-y-1/2 oil-rig-silhouette hidden xl:block"
            >
              <motion.div 
                className="w-32 h-48 opacity-20"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Drill className="w-full h-full text-orange-300 animate-oil-pump" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator with magnetic effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="relative group cursor-pointer"
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm group-hover:border-orange-400/70 transition-colors duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-orange-400 rounded-full mt-2 group-hover:bg-orange-300"
            />
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 border-2 border-orange-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}