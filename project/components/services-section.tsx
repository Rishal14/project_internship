"use client";

import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect, ReactNode, ComponentType, useRef } from 'react';
import { Check, ArrowRight, Shield, Clock, Users, PenTool as Tool, BarChart as Chart, Settings, Sparkles, Zap } from 'lucide-react';

// Define proper types for our service items
interface ServiceItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  highlight?: string;
  image: string;
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
    // highlight: 'Most Popular',
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
    icon: Zap,
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      duration: 0.8
    }
  }
};

const cardHoverVariants = {
  rest: { 
    scale: 1,
    rotateY: 0,
    z: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.08,
    rotateY: 8,
    z: 50,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const imageVariants = {
  rest: { 
    scale: 1,
    rotate: 0,
    filter: "brightness(1) contrast(1)"
  },
  hover: { 
    scale: 1.15,
    rotate: 3,
    filter: "brightness(1.1) contrast(1.1)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const skeletonVariants = {
  loading: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -40,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1.2
    }
  }
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { 
    width: "100%", 
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.6
    }
  }
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%",
            scale: 0
          }}
          animate={{ 
            y: "-10%",
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Animated background elements
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border border-yellow-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export function ServicesSection() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 relative overflow-hidden bg-gray-900 text-white min-h-screen"
    >
      {/* Enhanced background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/service-section.jpg')",
          opacity: 0.7,
          filter: 'contrast(1.4) brightness(0.9)'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />
      
      {/* Animated gradient overlays */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      />
      
      {/* Background animated elements */}
      <BackgroundElements />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated oil rig silhouettes */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-40 bg-contain bg-repeat-x z-10 opacity-50"
        style={{ 
          backgroundImage: "url('/oil-rig-silhouette.png')",
          backgroundPosition: 'bottom center'
        }}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 2, delay: 1.2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced title section */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <div className="inline-block mb-8">
            <motion.div 
              className="flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="h-1 w-16 bg-yellow-400"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
              />
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white relative"
                whileHover={{ 
                  textShadow: "0 0 30px rgba(250, 204, 21, 0.6)" 
                }}
              >
                Our Services
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </motion.h2>
              <motion.div 
                className="h-1 w-16 bg-yellow-400"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
              />
            </motion.div>
            <motion.div 
              className="h-1 bg-yellow-400/60 mx-auto mt-3"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Featured Services Title with enhanced animation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -60 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 0.8
              }
            }
          }}
        >
          <motion.h3 
            className="text-3xl font-bold text-yellow-400 mb-6 flex items-center"
            whileHover={{ x: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="h-0.5 bg-yellow-400 mr-4"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            Featured Partners & Services
          </motion.h3>
        </motion.div>

        {/* Enhanced Services Grid - Smaller cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {isLoading ? (
            Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="perspective-1000"
              >
                <Card className="bg-white border border-gray-300 rounded-xl shadow-lg h-[240px] overflow-hidden">
                  <CardHeader className="p-4">
                    <motion.div
                      variants={skeletonVariants}
                      animate="loading"
                      className="space-y-3"
                    >
                      <Skeleton className="h-32 w-full rounded-lg bg-gray-200" />
                      <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
                      <Skeleton className="h-3 w-1/2 mx-auto bg-gray-200" />
                    </motion.div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))
          ) : (
            services.map((service, index) => {
              if (!service) return null;
              
              const Icon = service?.icon || (() => null);
              
              if (!service.title || !Array.isArray(service.features)) {
                return null;
              }
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="perspective-1000"
                >
                  <motion.div
                    className="relative h-full"
                  >
                    <Card className="bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-[240px] flex flex-col">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Highlight badge */}
                      {service.highlight && (
                        <motion.div
                          className="absolute top-2 right-2 z-20"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 15,
                            delay: index * 0.1 + 0.8
                          }}
                        >
                          <Badge className="bg-yellow-400 text-black font-semibold px-2 py-1 text-xs shadow-lg">
                            {service.highlight}
                          </Badge>
                        </motion.div>
                      )}
                      <CardHeader className="p-4 relative z-10 flex-grow">
                        <div 
                          className="h-28 w-full mb-3 relative overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:border-yellow-400 transition-all duration-300"
                        >
                          <img 
                            src={service.image} 
                            className="object-contain w-full h-full p-3"
                          />
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                        {/* Service title */}
                        <h3 
                          className="text-sm font-bold text-gray-800 text-center group-hover:text-yellow-600 transition-colors duration-300"
                        >
                          {service.title}
                        </h3>
                      </CardHeader>
                      {/* Hover overlay with service details */}
                      <motion.div
                        className="absolute inset-0 bg-white/96 backdrop-blur-sm p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-30"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="text-center">
                          <Icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-xs text-gray-700 justify-center"
                              >
                                <Check className="w-3 h-3 text-green-500 mr-1" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* Call to action with enhanced animation */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 2
              }
            }
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-lg"
            >
              Explore All Services
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}