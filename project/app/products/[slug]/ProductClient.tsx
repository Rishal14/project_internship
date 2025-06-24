"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductClient({ product, relatedProducts }: ProductClientProps) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href="/" className="mt-4 text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <div key={index} className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      fill
                      className="object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <p className="mt-2 text-lg text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>
                <div className="prose max-w-none">
                  <p>
                    {getProductDetails(product.slug)}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get product-specific details
function getProductDetails(slug: string): string {
  const details: Record<string, string> = {
    'tjk-molded-products': 'High-quality molded products designed for industrial applications. Our TJK Molded Products are manufactured to the highest standards, ensuring durability and reliability in the most demanding environments. Made with premium materials and precision engineering.',
    'flow-valve': 'Our advanced flow control solutions provide precise regulation of fluid flow in various industrial applications. Features include high-pressure resistance, corrosion protection, and easy maintenance. Ideal for oil and gas, chemical processing, and water treatment industries.',
    'kerr-pumps': 'High-performance pumping systems designed for efficiency and reliability. Our KERR Pumps feature advanced hydraulics, energy-saving designs, and robust construction. Perfect for industrial, municipal, and commercial applications where performance is critical.',
    'open-close-equipment': 'Specialized equipment designed for oil field operations. Our OPEN & CLOSE equipment is built to withstand harsh conditions while providing reliable performance. Features include heavy-duty construction, easy operation, and minimal maintenance requirements.',
    'affordable-automation': 'Cost-effective automation solutions that don\'t compromise on quality. Our automation products are designed to improve efficiency and reduce operational costs. Easy to install and maintain, these solutions are perfect for small to medium-sized operations.',
    'silver-fox': 'Precision flow control tools designed for accuracy and reliability. Our SILVER FOX tools are engineered for professionals who demand the best. Features include precise flow regulation, durable construction, and user-friendly operation.',
    'keystone-fabrication': 'Custom fabrication services for all your oilfield equipment needs. Our team of experts works with you to design and manufacture equipment that meets your exact specifications. Quality craftsmanship and attention to detail are our top priorities.'
  };

  return details[slug] || 'Detailed product information coming soon.';
}
