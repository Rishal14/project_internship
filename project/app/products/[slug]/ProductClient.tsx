"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

  // Use a single image or an array with the main image
  const productImages = [product.image, ...(product.images || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {productImages.map((image, index) => (
                    <div key={index} className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="mt-2 text-lg text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.round(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">
                      {product.rating.toFixed(1)}/5.0
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button asChild>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group block"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="relative h-48 bg-gray-100">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {relatedProduct.description}
                        </p>
                        <div className="mt-2 flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.round(relatedProduct.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-600">
                            {relatedProduct.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export type { Product };

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
