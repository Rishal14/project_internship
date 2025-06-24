"use client";


import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Search, Filter, SlidersHorizontal, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, products as allProducts } from '@/lib/products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageUrl = product.image || '/products/placeholder-product.webp';
  
  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setIsHovered(false);
  };
  
  return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-gradient-to-br from-black/80 to-gray-900/90 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col backdrop-blur-sm border border-orange-500/20"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl blur-xl" />
        </div>
        
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="outline" className="bg-black/50 text-orange-400 border-orange-500/30 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
        
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm flex items-center gap-1 border-orange-500/30">
            <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
            <span className="text-orange-400">{product.rating}</span>
          </Badge>
        </div>
        
        <div className="relative h-48 bg-gradient-to-b from-black/20 to-black/40 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{
              z: isHovered ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-contain filter drop-shadow-lg"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotateZ: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/products/placeholder-product.webp';
              }}
            />
          </motion.div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col relative z-10">
            <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
          
            <p className="text-gray-300 text-sm line-clamp-2 mb-3">{product.description}</p>
          
          <div className="mt-auto pt-3 border-t border-gray-800">
            <Link href={`/products/${product.slug}`} passHref>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-none"
                  variant="outline"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
          </div>
        </div>
      </motion.div>
  );
};

const Particles = ({ count = 20 }) => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-500/30"
          style={{ 
            left: `${p.x}%`, 
            top: `${p.y}%`,
            width: p.size, 
            height: p.size 
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const categories = Array.from(new Set(allProducts.map(product => product.category)));
  
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory ;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <section ref={sectionRef} id="products" className="py-20 relative overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <Particles />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={floatingAnimation}
            className="inline-block"
          >
            <h2 className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Products
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto max-w-md"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            High-quality oil and gas equipment for all your industrial needs
          </p>
        </motion.div>
        
        <div className="mb-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <select
                className="bg-black/30 border border-gray-700 rounded-lg text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="rating">Highest Rated</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>
          <AnimatePresence>
            <div className="overflow-hidden">
                <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-white font-medium mb-2 text-sm">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        onClick={() => setSelectedCategory(null)}
                        className={`cursor-pointer ${selectedCategory === null ? 'bg-orange-600 text-white border-orange-600' : 'bg-black/30 hover:bg-orange-600/50 border-gray-700'}`}
                      >
                        All Categories
                      </Badge>
                      {categories.map((category) => (
                        <Badge 
                          key={category} 
                          onClick={() => setSelectedCategory(category)}
                          className={`cursor-pointer ${selectedCategory === category ? 'bg-orange-600 text-white border-orange-600' : 'bg-black/30 hover:bg-orange-600/50 border-gray-700'}`}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                </div>
            </div>
          </AnimatePresence>
        </div>
        
        <div className="mb-6 text-gray-300">
            Showing <span className="text-white font-medium">{sortedProducts.length}</span> of <span className="text-white font-medium">{allProducts.length}</span> products
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
