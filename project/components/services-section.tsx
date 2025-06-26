"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect, ReactNode, ComponentType } from 'react';
import { Check, ArrowRight, Shield, Clock, Users, Tool, Chart, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Define proper types for our service items
interface ServiceItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  highlight?: string;
  image: string; // Path to the service image
}

const services: ServiceItem[] = [
  {
    icon: Tool,
    title: 'Equipment Maintenance',
    description: 'Comprehensive maintenance services for oilfield equipment to ensure optimal performance and reliability.',
    features: [
      'Preventive Maintenance',
      '24/7 Emergency Support',
      'Performance Optimization'
    ],
    highlight: 'Most Popular',
    image: '/services/TJK.png'
  },
  {
    icon: Chart,
    title: 'Flow Valve Solutions',
    description: 'Expert flow control solutions to optimize your operations and solve complex fluid management challenges.',
    features: [
      'Valve Maintenance',
      'Flow Optimization',
      'Custom Valve Solutions'
    ],
    image: '/services/FLOW_VALVE.png'
  },
  {
    icon: Shield,
    title: 'Kerr Pumps Services',
    description: 'High-performance pump solutions designed for the most demanding oilfield applications.',
    features: [
      'Pump Installation',
      'Maintenance Programs',
      'Performance Monitoring'
    ],
    image: '/services/KERR_PUMPS.png'
  },
  {
    icon: Settings,
    title: 'Keystone Fabrication',
    description: 'Custom fabrication solutions tailored to your specific operational needs in the oilfield.',
    features: [
      'Custom Design',
      'Precision Fabrication',
      'Quality Assurance'
    ],
    image: '/services/KeyStone.png'
  },
  {
    icon: Users,
    title: 'Open & Close Equipment',
    description: 'Specialized equipment solutions for critical open and close operations in oilfield environments.',
    features: [
      'Equipment Rental',
      'Technical Support',
      'Custom Solutions'
    ],
    image: '/services/OPEN_CLOSE.png'
  },
  {
    icon: Clock,
    title: 'Silver Fox Technologies',
    description: 'Innovative technological solutions for modern oilfield operations and management.',
    features: [
      'Automation Systems',
      'Remote Monitoring',
      'Data Analytics'
    ],
    image: '/services/Silver_fox.png'
  },
  {
    icon: Settings,
    title: 'Automation Solutions',
    description: 'Advanced automation systems to increase efficiency and reduce operational costs in oilfield operations.',
    features: [
      'Process Automation',
      'Control Systems',
      'Remote Operations'
    ],
    image: '/services/Automation.png'
  }
];

export function ServicesSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Debug logging in development only
  if (process.env.NODE_ENV === 'development') {
    console.log("Services Section - Loading services:", services.length);
  }

  return (
    <section id="services" className="py-16 relative overflow-hidden bg-gray-900 text-white">
      {/* Background image with enhanced visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/service-section.jpg')",
          opacity: 0.4,
          filter: 'contrast(1.2) brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/40 to-gray-900/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/70" />
      
      {/* Oil rig silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-contain bg-repeat-x z-10 opacity-30"
        style={{ 
          backgroundImage: "url('/oil-rig-silhouette.png')",
          backgroundPosition: 'bottom center'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="h-1 w-12 bg-yellow-400"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>
            <div className="h-1 w-24 bg-yellow-400/50 mx-auto mt-2"></div>
          </div>
        </motion.div>

        {/* Featured Services Title */}
        <div className="mb-6">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-yellow-400 mb-2 flex items-center"
          >
            <div className="h-0.5 w-6 bg-yellow-400 mr-3"></div>
            Featured Partners & Services
          </motion.h3>
        </div>

        {/* Services Carousel for Mobile and Tablet */}
        <div className="lg:hidden mb-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {!isLoading && services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 pl-4">
                  <Card className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-gray-400/30 hover:border-gray-400 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-3">
                      <div className="h-40 w-full mb-2 relative overflow-hidden rounded-lg bg-gray-700/30 flex items-center justify-center border border-gray-600/30 group-hover:border-yellow-400/20 transition-all duration-300">
                        <img 
                          src={service.image} 
                          className="object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                    </CardContent>
                    <CardFooter className="p-2 mt-auto">
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
              {isLoading && Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 pl-4">
                  <Card className="bg-gray-800/50 border-gray-700/50 rounded-lg shadow-lg h-[220px]">
                    <CardHeader className="p-3">
                      <Skeleton className="h-40 w-full rounded-lg bg-gray-700" />
                      <Skeleton className="h-6 w-1/2 mx-auto mt-4 bg-gray-700" />
                    </CardHeader>
                    <CardContent className="p-0">
                    </CardContent>
                    <CardFooter className="p-2 mt-auto">
                      <Skeleton className="h-6 w-full bg-gray-700 rounded-md" />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 space-x-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-yellow-400 hover:bg-gray-500 text-black border-none" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-yellow-400 hover:bg-gray-500 text-black border-none" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 7 }).map((_, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 rounded-lg shadow-lg h-[220px]">
                    <CardHeader className="p-3">
                      <Skeleton className="h-40 w-full rounded-lg bg-gray-700" />
                      <Skeleton className="h-6 w-1/2 mx-auto mt-4 bg-gray-700" />
                    </CardHeader>
                    <CardContent className="p-0">
                    </CardContent>
                    <CardFooter className="p-2 mt-auto">
                      <Skeleton className="h-6 w-full bg-gray-700 rounded-md" />
                    </CardFooter>
                  </Card>
            ))
          ) : (
            // Actual service cards
            services.map((service, index) => {
              // Skip rendering if service data is invalid
              if (!service) {
                console.error("Skipping rendering of undefined service at index:", index);
                return null;
              }
              
              // Ensure icon is a valid component
              const Icon = service?.icon || (() => null);
              
              // Skip rendering if required fields are missing
              if (!service.title || !Array.isArray(service.features)) {
                console.error("Skipping service with missing required fields at index:", index, service);
                return null;
              }
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Card className="bg-white-800/40 border border-gray-700/30 rounded-lg shadow-lg hover:shadow-gray-400/10 hover:border-yellow-400/40 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-3">
                      <div className="h-40 w-full mb-2 relative overflow-hidden rounded-lg bg-gray-700/30 flex items-center justify-center border border-gray-600/30 group-hover:border-yellow-400/20 transition-all duration-300">
                        <img 
                          src={service.image} 
                          className="object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}