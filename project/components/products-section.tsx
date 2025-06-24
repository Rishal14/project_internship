"use client";

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, ArrowRight, Star, SearchX } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { Product } from '@/lib/products';

// 3D card effect component with image carousel
interface ProductCardProps {
  product: Product & {
    image: string;
    features: string[];
  };
  index: number;
  isLoading?: boolean;
}

const ProductCard = ({ product, index, isLoading = false }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();
  
  const imageUrl = product.image || '/images/placeholder-product.jpg';
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      cardRef.current.style.transition = 'transform 0.5s ease-out';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(`/products/${product.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="relative bg-white rounded-xl overflow-hidden h-full p-4 flex flex-col">
        <Skeleton className="h-48 w-full rounded-lg mb-4 flex-shrink-0" />
        <div className="mt-4 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-2 mt-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div 
        ref={cardRef}
        variants={variants}
        initial="hidden"
        animate="visible"
        onClick={() => setShowDetails(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={`View details of ${product.name}`}
        className="relative bg-white rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(0) rotateY(0)',
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out'
        }}
      >
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {!imageError ? (
            <div className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Image 
                src={imageUrl} 
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onLoad={handleImageLoad}
                onError={handleImageError}
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
          {!imageLoaded && !imageError && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-amber-600 flex items-center">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {product.rating?.toFixed(1) || '4.5'}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {product.category}
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    +{product.features.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
              View Details
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </motion.div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            <DialogDescription className="text-base">
              {product.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative h-[300px] my-6 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
              onError={handleImageError}
            />
          </div>

          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {product.category}
              </Badge>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < (product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  {(product.rating || 0).toFixed(1)}
                </span>
              </div>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter className="mt-6">
            <Button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full sm:w-auto"
            >
              View Full Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper function to generate slug from product name
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

import { products } from '@/lib/products';

// Map the products to the expected format for the products section
const mappedProducts = products.map(product => ({
  ...product,
  // Ensure we have a valid image URL
  image: product.image || (Array.isArray(product.images) && product.images[0]) || '/images/placeholder-product.jpg',
  // Ensure we have features array
  features: Array.isArray(product.features) ? product.features : []
}));

export function ProductsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('name');
  
  // Get all unique categories from the products
  const categories = ['All', ...new Set(mappedProducts.map(product => product.category))];
  
  // Filter and sort products based on user selection
  const filteredProducts = mappedProducts
    .filter(product => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Discover our range of high-quality equipment and tools for the oil and gas industry.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="w-full sm:w-auto">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64"
              />
            </div>
            
            <div className="flex gap-4 items-center flex-wrap justify-center sm:justify-end">
              <Select value={sortBy} onValueChange={(value: 'name' | 'rating') => setSortBy(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>

              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent p-0">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className={`rounded-full px-4 py-2 transition-all ${selectedCategory === category
                        ? 'bg-orange-500 text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white'
                        : 'bg-white/10 text-gray-400 hover:bg-orange-500/10 hover:text-orange-400'}`}
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <Alert className="max-w-2xl mx-auto mb-8 bg-orange-500/10 border-orange-500/20 text-orange-400">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Click on any product card to view detailed specifications and download technical documentation.
            </AlertDescription>
          </Alert>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCard key={index} product={products[0]} index={index} isLoading={true} />
              ))
            : filteredProducts.length > 0
              ? filteredProducts.map((product, index) => {
                const productWithDefaults = {
                  ...product,
                  image: product.image || (Array.isArray(product.images) && product.images[0]) || '/images/placeholder-product.jpg',
                  features: Array.isArray(product.features) ? product.features : [],
                  rating: typeof product.rating === 'number' ? product.rating : 4.5,
                  category: product.category || 'Uncategorized',
                  description: product.description || 'No description available.'
                };
                return <ProductCard key={product.id} product={productWithDefaults} index={index} />;
              })
              : (
                <div className="col-span-full text-center py-12">
                  <div className="flex flex-col items-center gap-4">
                    <SearchX className="h-12 w-12 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </div>
              )}
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
