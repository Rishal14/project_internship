"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowDown, CheckCircle, Sparkles, Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "structural-fabrication", label: "Structural Fabrication" },
  { id: "pressure-vessels", label: "Pressure Vessels" },
  { id: "piping-systems", label: "Piping Systems" },
  { id: "skid-packages", label: "Skid Packages" },
  { id: "custom-solutions", label: "Custom Solutions" },
  { id: "quality-assurance", label: "Quality Assurance" },
  { id: "project-management", label: "Project Management" },
];

// Enhanced floating particles component
const FloatingParticles = () => {
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    // Only runs on client
    setPositions(
      Array.from({ length: 50 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{
            x: pos.x,
            y: pos.y,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 1.5 + 0.5, 0],
            x: pos.x,
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced section content with more animations
const sectionContents: Record<string, React.ReactNode> = {
  introduction: (
    <motion.div
      key="introduction"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.span
          className="inline-block bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Keystone Oilfield Fabrication
        </motion.span>
      </motion.h2>
      
      <motion.div
        className="prose prose-lg text-gray-700 max-w-none mb-12 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.p 
            className="text-xl mb-4 font-semibold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Keystone Oilfield Fabrication delivers world-class custom fabrication services for the oil and gas industry.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(34, 197, 94, 0.15)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Our comprehensive fabrication capabilities include structural steel, pressure vessels, piping systems, and complete skid packages designed to meet the most demanding oilfield requirements.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            With state-of-the-art facilities and expert craftsmanship, we deliver precision-engineered solutions that exceed industry standards for quality, safety, and performance.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  ),
  "structural-fabrication": (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">Structural Fabrication</h2>
      <p className="text-base text-gray-800 max-w-3xl">
        Heavy-duty structural steel fabrication for oilfield infrastructure, platforms, and support structures built to withstand extreme conditions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Platform Structures</span><br />
          <span>Drilling and production platform fabrication</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Support Frames</span><br />
          <span>Equipment mounting and support structures</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Walkways & Stairs</span><br />
          <span>Safety access structures and grating systems</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Modular Construction</span><br />
          <span>Pre-fabricated modules for rapid deployment</span>
        </div>
      </div>
    </div>
  ),
};

// Add remaining sections with similar animation patterns
Object.keys(sections).slice(2).forEach(sectionId => {
  if (!sectionContents[sectionId]) {
    const section = sections.find(s => s.id === sectionId);
    sectionContents[sectionId] = (
      <motion.div
        key={sectionId}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {section?.label}
        </motion.h2>
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)"
          }}
        >
          <p className="text-lg text-gray-700">
            Detailed information about {section?.label.toLowerCase()} will be available soon. Our team is working on comprehensive documentation for all our fabrication categories.
          </p>
        </motion.div>
      </motion.div>
    );
  }
});

export default function KeystoneFabrication() {
  const [selected, setSelected] = useState("introduction");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Hero Section with enhanced animations */}
      <motion.div
        className="relative text-white min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/products/KEYSTONE1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          y,
          opacity
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(59,130,246,0.3), rgba(0,0,0,0.7))",
            backgroundSize: "400% 400%"
          }}
        />
        
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Heading */}
              <motion.div 
                className="text-center md:text-left flex-1"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                  <motion.span
                    className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    Keystone Fabrication
                  </motion.span>
                </motion.h1>
              </motion.div>
              {/* Right: Image */}
              <div className="hidden md:flex flex-1 items-center justify-end">
                <img
                  src="/services/KeyStone.png"
                  alt="Keystone Fabrication"
                  className="w-[180px] h-auto object-contain drop-shadow-2xl rounded-lg"
                  style={{ maxHeight: '180px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content with enhanced animations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Sidebar Navigation */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl p-8 sticky top-24 overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(236,72,153,0.1))",
                    "linear-gradient(45deg, rgba(236,72,153,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1))",
                    "linear-gradient(45deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1), rgba(59,130,246,0.1))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                Fabrication Services
              </motion.h2>
              
              <nav className="relative z-10">
                <ul className="space-y-3">
                  {sections.map((section, index) => (
                    <motion.li 
                      key={section.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.6 + index * 0.05, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      <motion.button
                        onClick={() => setSelected(section.id)}
                        className={`flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          selected === section.id
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                        }`}
                        whileHover={{ 
                          scale: 1.03,
                          x: selected === section.id ? 0 : 8,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        {/* Animated background for active state */}
                        {selected === section.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                            layoutId="activeBackground"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        
                        <span className="font-medium text-sm leading-tight relative z-10">
                          {section.label}
                        </span>
                        
                        <motion.div
                          animate={{ 
                            rotate: selected === section.id ? 90 : 0,
                            scale: selected === section.id ? 1.2 : 1
                          }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                          className="relative z-10"
                        >
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Content Area */}
          <motion.div 
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl p-10 min-h-[700px] relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(236,72,153,0.3) 0%, transparent 50%)"
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <AnimatePresence mode="wait">
                <div className="relative z-10">
                  {sectionContents[selected]}
                </div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}