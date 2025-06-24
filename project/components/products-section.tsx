"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft, Sparkles, Shield, Zap, Award, Search, Filter, SlidersHorizontal, Tag, ArrowRight, SearchX, Info, Check, Layers, Tool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Drill Pipe',
    description: 'High-quality drill pipe for oil and gas operations. Made from premium materials for maximum durability and performance in harsh drilling conditions.',
    price: 1299.99,
    image: '/images/drill-pipe.jpg',
    features: ['High strength', 'Corrosion resistant', 'Durable construction'],
    rating: 4.5,
    category: 'Drilling Equipment'
  },
  {
    id: '2',
    name: 'Mud Pump',
    description: 'Heavy-duty mud pump designed for high-pressure drilling operations. Features advanced cooling and lubrication systems.',
    price: 5499.99,
    image: '/images/mud-pump.jpg',
    features: ['High pressure', 'Reliable performance', 'Low maintenance'],
    rating: 4.7,
    category: 'Pumps'
  },
  {
    id: '3',
    name: 'Blowout Preventer',
    description: 'Critical safety component for oil and gas wells. Designed to prevent uncontrolled release of formation fluids.',
    price: 8999.99,
    image: '/images/bop.jpg',
    features: ['Safety certified', 'High pressure rating', 'Durable'],
    rating: 4.9,
    category: 'Safety Equipment'
  },
  {
    id: '4',
    name: 'Casing Head',
    description: 'Heavy-duty casing head for oil well construction. Provides support for casing strings and wellhead equipment.',
    price: 3299.99,
    image: '/images/casing-head.jpg',
    features: ['Heavy duty', 'Corrosion resistant', 'Easy installation'],
    rating: 4.6,
    category: 'Wellhead Equipment'
  }
];

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    features: string[];
    rating: number;
    category: string;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const imageUrl = product.image || '/images/placeholder-product.jpg';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 bg-gray-100">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder-product.jpg';
          }}
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium flex items-center">
          <Star className="w-3 h-3 text-yellow-500 mr-1" />
          {product.rating}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality oil and gas equipment for all your industrial needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
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
