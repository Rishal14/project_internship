"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Product, products as allProducts } from "@/lib/products";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/oil.jpg')", // ✅ Background image path
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Products</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-4" />
          <p className="text-gray-200">Following are the assortment of our Main Products</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={product.image || "/products/placeholder-product.webp"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{product.description}</p>
                <Link href={`/products/${product.slug}`} passHref>
                  <div className="text-yellow-500 font-medium text-sm inline-flex items-center gap-1 hover:underline">
                    Explore {product.name.toUpperCase()} <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <Link href="/products" passHref>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition">
              SEE MORE PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
