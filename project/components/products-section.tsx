"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle } from "lucide-react";
import Image from "next/image";
import { products as allProducts } from "@/lib/products";

export function ProductsSection() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const toggleFeatures = (id: number) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  // Auto image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevState => {
        const updated = { ...prevState };
        allProducts.slice(0, 6).forEach(product => {
          const totalImages = product.images?.length || 1;
          if (totalImages > 1) {
            updated[product.id] = (updated[product.id] + 1) % totalImages || 0;
          }
        });
        return updated;
      });
    }, 5000); // Image changes every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="products"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/oil.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="h-1 w-12 bg-yellow-400"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Our Products</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>
            <div className="h-1 w-24 bg-yellow-400/50 mx-auto mt-2"></div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {allProducts.slice(0, 6).map((product, index) => {
            const isExpanded = expandedCardId === product.id;
            const activeImageIndex = currentImageIndex[product.id] || 0;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-yellow-400/50 relative flex flex-col"
              >
                {/* Image Slider */}
                <div className="relative h-48 overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={product.images?.[activeImageIndex] || product.image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={product.images?.[activeImageIndex] || product.image || "/products/placeholder-product.webp"}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">{product.description}</p>
                  </div>

                  {/* CTA */}
                  <div>
                    <button
                      onClick={() => toggleFeatures(product.id)}
                      className="text-yellow-500 font-medium text-sm inline-flex items-center gap-1 hover:underline focus:outline-none"
                    >
                      {isExpanded ? "Hide Features" : "Explore Features"}
                      {isExpanded ? (
                        <ArrowDown className="h-4 w-4 rotate-180 transition-transform" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform" />
                      )}
                    </button>

                    {/* Features */}
                    <AnimatePresence>
                      {isExpanded && product.features && (
                        <motion.div
                          key="features"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 space-y-2 overflow-hidden"
                        >
                          <ul className="space-y-2">
                            {product.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-800"
                              >
                                <CheckCircle className="w-4 h-4 text-yellow-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
