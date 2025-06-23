"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Zap, Drill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/ui/floating-particles';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen hero-bg flex items-center">
      <FloatingParticles />
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              One stop shopping - where{' '}
              <span className="text-gradient animate-pulse">oilfield solutions</span> / services is our goal
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Gulf Technical Operations LLC, we bring over 40 years of industry-leading 
              experience to every well and project. As the trusted supplier of high-quality 
              equipment and services, we proudly serve the Middle East, North Africa, and 
              Southeast Asia with a commitment to excellence, reliability, and unmatched expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/25 text-lg"
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg"
              >
                Our Services
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Enhanced Stats Cards with oil rig theme */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="glass-morphism p-6 rounded-2xl text-center border border-orange-500/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                </motion.div>
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
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