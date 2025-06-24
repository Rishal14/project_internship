"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { Check, ArrowRight, Shield, Clock, Users, Tool, Chart, Settings } from 'lucide-react';

const services = [
  {
    icon: Tool,
    title: 'Equipment Maintenance',
    description: 'Comprehensive maintenance services for oilfield equipment to ensure optimal performance and reliability.',
    features: [
      'Preventive Maintenance',
      '24/7 Emergency Support',
      'Performance Optimization'
    ],
    highlight: 'Most Popular'
  },
  {
    icon: Chart,
    title: 'Technical Consulting',
    description: 'Expert technical consulting services to help you optimize operations and solve complex challenges.',
    features: [
      'Process Analysis',
      'Technical Audits',
      'Optimization Studies'
    ]
  },
  {
    icon: Shield,
    title: 'Safety Services',
    description: 'Comprehensive safety services to ensure compliance and protect your workforce.',
    features: [
      'Safety Audits',
      'Training Programs',
      'Compliance Management'
    ]
  },
  {
    icon: Settings,
    title: 'Engineering Solutions',
    description: 'Custom engineering solutions tailored to your specific operational needs.',
    features: [
      'Custom Design',
      'Technical Support',
      'Implementation'
    ]
  },
  {
    icon: Users,
    title: 'Training Programs',
    description: 'Comprehensive training programs to enhance your team's technical capabilities.',
    features: [
      'Hands-on Training',
      'Certification Courses',
      'Custom Programs'
    ]
  },
  {
    icon: Clock,
    title: 'Project Management',
    description: 'Professional project management services to ensure successful project delivery.',
    features: [
      'Timeline Management',
      'Resource Allocation',
      'Progress Tracking'
    ]
  }
];

export function ServicesSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive solutions for all your oilfield service needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="space-y-4">
                  <Skeleton className="h-12 w-12 rounded-full bg-slate-700" />
                  <Skeleton className="h-6 w-3/4 bg-slate-700" />
                  <Skeleton className="h-4 w-full bg-slate-700" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full bg-slate-700" />
                  ))}
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full bg-slate-700" />
                </CardFooter>
              </Card>
            ))
          ) : (
            // Actual service cards
            services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group relative overflow-hidden">
                    {service.highlight && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-orange-500 text-white">
                          {service.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <Check className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 group-hover:scale-105 transition-transform"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
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