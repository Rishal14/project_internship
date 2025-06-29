"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="text-3xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Introduction
      </motion.h2>
      <motion.div
        className="prose prose-lg text-gray-700 max-w-none mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          With over 40 years of industry experience, TJK Molded Products has been a trusted name in rubber component manufacturing. Since TJK founding in 2009 by the Klingbail Brothers, TJK committed to delivering high-quality products from our state-of-the-art, 15,000 sq. ft. air-conditioned facility located in Ardmore, Oklahoma.
        </motion.p>
        <motion.p 
          className="mb-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          To date, TJK successfully molded millions of rubber components, earning the trust of our clients through TJK dedication to precision and excellence.
        </motion.p>
      </motion.div>
      <motion.div 
        className="w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.video
          src="/videos/GTO_TJK_04.mp4"
          controls
          className="rounded-lg shadow-lg max-w-full h-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.div>
  ),
  "union-seal-rings": (
    <motion.div
      key="union-seal-rings"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h2 
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Union Seal Rings
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Union Seal Rings will go here.
      </motion.p>
    </motion.div>
  ),
  "swivel-packing": (
    <motion.div
      key="swivel-packing"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h2 
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel Packing
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel Packing will go here.
      </motion.p>
    </motion.div>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel Repair Kits
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel Repair Kits will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Plug Valve Kit
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Plug Valve Kit will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel Dust Seals
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel Dust Seals will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel O-Rings
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel O-Rings will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel Ball Retaining Plugs
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel Ball Retaining Plugs will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Swivel Ball Plug/Retaining Clips & Detachable Nut Retaining Rings
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Swivel Ball Plug/Retaining Clips & Detachable Nut Retaining Rings will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Chrome Steel Balls
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about Chrome Steel Balls will go here.
      </motion.p>
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
        className="text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        O Rings
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Details about O Rings will go here.
      </motion.p>
    </motion.div>
  ),
};

export default function TJKMoldedProducts() {
  const [selected, setSelected] = useState("introduction");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative text-white min-h-[430px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/4033.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                TJK Molded Products
              </motion.h1>
              <motion.p 
                className="text-xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Premium rubber components for the oil and gas industry. 
                Over 40 years of experience delivering precision-molded solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2 
                className="text-xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Product Categories
              </motion.h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.li 
                      key={section.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.6 + index * 0.05, 
                        duration: 0.5 
                      }}
                    >
                      <motion.button
                        onClick={() => setSelected(section.id)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 group ${
                          selected === section.id
                            ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                        }`}
                        whileHover={{ 
                          scale: 1.02,
                          x: selected === section.id ? 0 : 5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium text-sm leading-tight">
                          {section.label}
                        </span>
                        <motion.div
                          animate={{ 
                            rotate: selected === section.id ? 90 : 0,
                            x: selected === section.id ? 0 : 0
                          }}
                          transition={{ duration: 0.3 }}
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

          {/* Main Content Area */}
          <motion.div 
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 min-h-[600px]"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <AnimatePresence mode="wait">
                {sectionContents[selected]}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}