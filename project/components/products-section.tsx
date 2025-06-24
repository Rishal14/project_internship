"use client";

"use client";
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';

// 3D card effect component with image carousel
const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  
  // Auto-rotate images
  useEffect(() => {
    if (product.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [product.images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / 20);
    const rotateX = ((centerY - y) / 20);
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.boxShadow = `${-rotateY * 2}px ${-rotateX * 2}px 30px rgba(0, 0, 0, 0.1)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      cardRef.current.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div 
      className="w-full h-full cursor-pointer"
      onClick={handleClick}
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-white rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(0) rotateY(0)',
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
          animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
          opacity: 0
        }}
      >
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {product.images.map((image, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image 
                src={image} 
                alt={`${product.title} - Image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3} // Only preload first 3 images
              />
            </div>
          ))}
          {/* Navigation dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`View image ${idx + 1} of ${product.images.length}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-4 text-blue-600 font-medium">
            Learn more →
          </div>
        </div>
      </div>
    </div>
  );
};

export function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Improve 3D effect on supported devices */
        @media (hover: hover) and (pointer: fine) {
          .product-card {
            transform-style: preserve-3d;
            transform: perspective(1000px);
          }
        }
      `}</style>
    </section>
  );
}
