"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Globe, Zap, Drill, ChevronsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { Inter, Poppins } from 'next/font/google';

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
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <FloatingParticles />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 mb-6"
            >
              <span className="text-sm font-medium text-orange-300 tracking-wider">INNOVATING SINCE 2016</span>
            </motion.div>

            <motion.h1 
              className={`${headingFont.className} text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-200 to-orange-400 mb-4">Oilfield Excellence</span>
              <span className="text-white">Delivered with Precision & Integrity</span>
            </motion.h1>
            
            <motion.p 
              className={`${bodyFont.className} text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl tracking-wide`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              At <span className="font-semibold text-orange-300">Gulf Technical Operations LLC</span>, we bring over 40 years of industry-leading 
              experience to every well and project. As the trusted supplier of high-quality 
              equipment and services, we proudly serve the <span className="text-white font-medium">Middle East</span>, <span className="text-white font-medium">North Africa</span>, and 
              <span className="text-white font-medium">Southeast Asia</span> with a commitment to excellence, reliability, and unmatched expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <Button 
                size="lg" 
                className={`${bodyFont.className} group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/30 text-lg`}
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className={`${bodyFont.className} group border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-lg`}
              >
                <span className="relative z-10">Contact Us</span>
                <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors">
                  <ChevronsDown className="w-4 h-4 text-orange-300" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center space-x-6 text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-orange-400/30 to-transparent"></div>
              <span>Trusted by leading energy companies worldwide</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-16 -right-16 w-32 h-32 bg-orange-500/10 rounded-full filter blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Enhanced Stats Cards with oil rig theme */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <motion.div 
                className="relative overflow-hidden group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-700/50 hover:border-orange-500/40 transition-all duration-300"
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="h-10 w-10 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-200">40+</div>
                <div className="text-sm font-medium text-gray-300 tracking-wider">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="glass-morphism p-6 rounded-2xl text-center border border-orange-500/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                </motion.div>
                <div className="text-2xl font-bold text-white">60+</div>
                <div className="text-sm text-gray-300">Rigs Serviced</div>
              </motion.div>
              
              <motion.div 
                className="glass-morphism p-6 rounded-2xl text-center col-span-2 border border-orange-500/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Drill className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                </motion.div>
                <div className="text-2xl font-bold text-white">Excellence</div>
                <div className="text-sm text-gray-300">Reliability & Unmatched Expertise</div>
              </motion.div>
            </div>

            {/* Oil rig silhouette decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-1/2 right-10 transform -translate-y-1/2 oil-rig-silhouette hidden xl:block"
            >
              <div className="w-32 h-48 opacity-20">
                <Drill className="w-full h-full text-orange-300 animate-oil-pump" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}