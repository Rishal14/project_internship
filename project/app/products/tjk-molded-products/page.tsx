"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowDown, CheckCircle, Sparkles, Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "union-seal-rings", label: "Union Seal Rings" },
  { id: "swivel-packing", label: "Swivel Packing" },
  { id: "swivel-repair-kits", label: "Swivel Repair Kits" },
  { id: "plug-valve-kit", label: "Plug Valve Kit" },
  { id: "swivel-dust-seals", label: "Swivel Dust Seals" },
  { id: "swivel-o-rings", label: "Swivel O-Rings" },
  { id: "swivel-ball-retaining-plugs", label: "Swivel Ball Retaining Plugs" },
  { id: "swivel-ball-plug-retaining-clips", label: "Swivel Ball Plug/Retaining Clips & Detachable Nut Retaining Rings" },
  { id: "chrome-steel-balls", label: "Chrome Steel Balls" },
  { id: "o-rings", label: "O Rings" },
];

// Enhanced floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 50,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: -50,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 1.5 + 0.5, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced video player component
const EnhancedVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        whileHover={{ 
          boxShadow: "0 25px 50px rgba(250, 204, 21, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <video
          ref={videoRef}
          className="w-full h-auto rounded-2xl"
          muted={isMuted}
          loop
          playsInline
          poster="/4033.jpg"
        >
          <source src="/videos/GTO_TJK_04.mp4" type="video/mp4" />
        </video>
        
        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Play/Pause overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.button
                onClick={togglePlay}
                className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1, backgroundColor: "#fbbf24" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Play className="w-8 h-8 text-black ml-1" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-4 right-4 flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={togglePlay}
                className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </motion.button>
              
              <motion.button
                onClick={toggleMute}
                className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
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
          Introduction
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
            With over 40 years of industry experience, TJK Molded Products has been a trusted name in rubber component manufacturing.
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
            Since TJK founding in 2009 by the Klingbail Brothers, we&apos;ve committed to delivering high-quality products from our state-of-the-art, 15,000 sq. ft. air-conditioned facility located in Ardmore, Oklahoma.
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
            To date, TJK has successfully molded millions of rubber components, earning the trust of our clients through our dedication to precision and excellence.
          </motion.p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <EnhancedVideoPlayer />
      </motion.div>
      
      {/* Specifications section */}
      {/* <motion.div
        className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          Key Specifications
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {[
            { label: "Facility Size", value: "15,000 sq. ft." },
            { label: "Founded", value: "2009" },
            { label: "Experience", value: "40+ years" },
            { label: "Location", value: "Ardmore, Oklahoma" },
            { label: "Components Produced", value: "Millions" },
            { label: "Climate Control", value: "Full AC" }
          ].map((spec, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">{spec.label}</span>
                <span className="text-gray-900 font-bold">{spec.value}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </motion.div>
  ),
  "union-seal-rings": (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">Union Seal Rings</h2>
      <p className="text-base text-gray-800 max-w-3xl">
        At TJK Molded Products, we offer a wide range of high-quality Union Seal Rings designed to meet diverse industrial requirements. Our seal rings are made from durable Buna-N rubber with precise specifications to ensure superior performance in flow-line applications.
      </p>
      <p className="text-base text-gray-800 max-w-3xl">
        Our Union Seal Rings are designed for durability, reliability, and optimal sealing performance. Whether you&apos;re in need of standard Buna-N components or enhanced options with bronze back-up, we have the solutions to suit your needs.
      </p>
      <motion.div
        className="flex flex-col md:flex-row gap-8 items-center justify-start mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-col items-center flex-1 cursor-pointer rounded-2xl border-2 border-yellow-300 p-6 bg-white shadow-md"
          whileHover={{ boxShadow: '0 0 32px 4px #fde047' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/products/13-2.webp" alt="Duro with anti extrusion ring" className="w-44 h-44 object-contain rounded-xl bg-white" />
          <span className="font-semibold mt-2">Duro with anti extrusion ring</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center flex-1 cursor-pointer rounded-2xl border-2 border-yellow-300 p-6 bg-white shadow-md"
          whileHover={{ boxShadow: '0 0 32px 4px #fde047' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/products/15-5.webp" alt="Union seal ring" className="w-44 h-44 object-contain rounded-xl bg-white" />
          <span className="font-semibold mt-2">Union seal ring</span>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR621</span><br />
          <span>Desc: 1&quot; Union Seal Ring Buna -N 80 Duro</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR6215</span><br />
          <span>Desc: 1-1/2&quot; Union Seal Ring Buna -N 80 Duro</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR622</span><br />
          <span>Desc: 2&quot; Union Seal Ring Buna -N 80 Duro</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR623</span><br />
          <span>Desc: 3&quot; Union Seal Ring Buna -N 80 Duro</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR624</span><br />
          <span>Desc: 4&quot; Union Seal Ring Buna -N 80 Duro</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR152</span><br />
          <span>Desc: 2&quot; Union Seal Ring Buna -N 80 Duro With Bronze back -up</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR153</span><br />
          <span>Desc: 3&quot; Union Seal Ring Buna -N 80 Duro With Bronze back -up</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR154</span><br />
          <span>Desc: 4&quot; Union Seal Ring Buna -N 80 Duro With Bronze back -up</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # OR428</span><br />
          <span>Desc: 5&quot; Fig 1002 seal ring -N 90 Duro With Bronze back -up</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SR156</span><br />
          <span>Desc: 6&quot; Union Seal Ring -Buna -N 80 Duro With Bronze back -up</span>
        </div>
      </div>
    </div>
  ),
  "swivel-packing": (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">Swivel Packing</h2>
      <p className="text-base text-gray-800 max-w-3xl">
        Our Swivel Packing Kits are engineered for reliability and long service life in demanding oilfield applications. Each kit includes all necessary components for a complete packing replacement, ensuring a secure seal and smooth operation.
      </p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-start mt-6">
        <motion.div
          className="flex flex-col items-center flex-1 cursor-pointer rounded-2xl border-2 border-yellow-300 p-6 bg-white shadow-md"
          whileHover={{ boxShadow: '0 0 32px 4px #fde047' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/products/11-2.webp" alt="Swivel Packing Kit in Box" className="w-44 h-44 object-contain rounded-xl bg-white" />
          <span className="font-semibold mt-2">Swivel Packing Kit in Box</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center flex-1 cursor-pointer rounded-2xl border-2 border-yellow-300 p-6 bg-white shadow-md"
          whileHover={{ boxShadow: '0 0 32px 4px #fde047' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/products/pack.webp" alt="Swivel Packing Kit Label" className="w-44 h-44 object-contain rounded-xl bg-white" />
          <span className="font-semibold mt-2">Swivel Packing Kit Label</span>
        </motion.div>
        <motion.div
          className="flex flex-col items-center flex-1 cursor-pointer rounded-2xl border-2 border-yellow-300 p-6 bg-white shadow-md"
          whileHover={{ boxShadow: '0 0 32px 4px #fde047' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src="/products/17-4.webp" alt="Swivel Packing Kit Components" className="w-44 h-44 object-contain rounded-xl bg-white" />
          <span className="font-semibold mt-2">Swivel Packing Kit Components</span>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK01</span><br />
          <span>Desc: Swivel Packing Kit for 2&quot; Swivel</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK02</span><br />
          <span>Desc: Swivel Packing Kit for 3&quot; Swivel</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK03</span><br />
          <span>Desc: Swivel Packing Kit for 4&quot; Swivel</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK04</span><br />
          <span>Desc: Swivel Packing Kit for 2&quot; Swivel with Viton Seals</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK05</span><br />
          <span>Desc: Swivel Packing Kit for 3&quot; Swivel with Viton Seals</span>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <span className="font-bold">Part # SPK06</span><br />
          <span>Desc: Swivel Packing Kit for 4&quot; Swivel with Viton Seals</span>
        </div>
      </div>
    </div>
  ),
  "swivel-repair-kits": (
    <motion.div
      key="swivel-repair-kits"
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
        Swivel Repair Kits
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Swivel Repair Kits will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "plug-valve-kit": (
    <motion.div
      key="plug-valve-kit"
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
        Plug Valve Kit
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Plug Valve Kit will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "swivel-dust-seals": (
    <motion.div
      key="swivel-dust-seals"
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
        Swivel Dust Seals
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Swivel Dust Seals will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "swivel-o-rings": (
    <motion.div
      key="swivel-o-rings"
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
        Swivel O-Rings
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Swivel O-Rings will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "swivel-ball-retaining-plugs": (
    <motion.div
      key="swivel-ball-retaining-plugs"
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
        Swivel Ball Retaining Plugs
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Swivel Ball Retaining Plugs will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "swivel-ball-plug-retaining-clips": (
    <motion.div
      key="swivel-ball-plug-retaining-clips"
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
        Swivel Ball Plug/Retaining Clips & Detachable Nut Retaining Rings
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Swivel Ball Plug/Retaining Clips & Detachable Nut Retaining Rings will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "chrome-steel-balls": (
    <motion.div
      key="chrome-steel-balls"
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
        Chrome Steel Balls
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about Chrome Steel Balls will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
  ),
  "o-rings": (
    <motion.div
      key="o-rings"
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
        O Rings
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
        <p className="text-lg text-gray-700 mb-4">
          Detailed information about O Rings will be available soon. Our team is working on comprehensive documentation for all our product categories.
        </p>
      </motion.div>
    </motion.div>
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
          className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          <p className="text-lg text-gray-700">
            Detailed information about {section?.label.toLowerCase()} will be available soon. Our team is working on comprehensive documentation for all our product categories.
          </p>
        </motion.div>
      </motion.div>
    );
  }
});

export default function TJKMoldedProducts() {
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
          backgroundImage: "url('/4033.jpg')",
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
                    TJK Molded Products
                  </motion.span>
                </motion.h1>
              </motion.div>
              {/* Right: Image */}
              <div className="hidden md:flex flex-1 items-center justify-end">
                <img
                  src="/services/TJK.png"
                  alt="TJK Molded Products"
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
                Product Categories
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