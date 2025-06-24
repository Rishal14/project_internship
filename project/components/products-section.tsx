"use client";


import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Sparkles, Shield, Zap, Award, Search, Filter, SlidersHorizontal, Tag, ArrowRight, SearchX, Info, Check, Layers, Tool, Drill, Gauge, Flame, Droplet, Wrench, Cog, Truck, Plug, Cpu, Hammer } from 'lucide-react';
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
import { Product, products as productData } from '@/lib/products';

// Enhanced product data with additional fields
const products = [
  {
    id: '1',
    name: 'Accumulator Units',
    description: 'High-pressure hydraulic accumulators for energy storage and shock absorption in oilfield operations.',
    image: '/products/AA2.png',
    category: 'Hydraulic Systems',
    features: [
      'Nitrogen pre-charge capability',
      'Piston-type design for maximum efficiency',
      'Pressure ratings up to 10,000 PSI',
      'Corrosion-resistant internal coating',
      'Multiple mounting options available'
    ],
    specs: {
      capacity: '11 Gallon',
      maxPressure: '10,000 PSI',
      material: 'Forged Steel',
      weight: '385 lbs',
      temperature: '-20°F to 180°F',
      certification: 'ASME, API 16D'
    },
    certification: ['ASME Certified', 'API 16D Compliant', 'ISO 9001:2015'],
    tags: ['Hydraulic', 'High-Pressure', 'Energy Storage'],
    icon: Gauge
  },
  {
    id: '2',
    name: 'Work Over Units',
    description: 'Mobile workover rigs designed for well maintenance, repairs, and completion operations.',
    image: '/products/FLOWVALVE.png',
    category: 'Well Service',
    features: [
      'Self-propelled chassis for site mobility',
      'Telescoping mast with 150,000 lb capacity',
      'Integrated power system',
      'Advanced hydraulic controls',
      'Customizable workover packages'
    ],
    specs: {
      mastHeight: '72 ft',
      hookLoad: '150,000 lbs',
      enginePower: '550 HP',
      pumpCapacity: '300 GPM',
      driveSystem: '6x6 All-Wheel Drive',
      dimensions: '35\'L x 8\'W x 13\'H'
    },
    certification: ['API 4F', 'OSHA Compliant', 'CE Marked'],
    tags: ['Workover', 'Mobile Rig', 'Well Service'],
    icon: Truck
  },
  {
    id: '3',
    name: 'Test Units',
    description: 'Specialized equipment for pressure testing, flow testing, and well integrity verification.',
    image: '/products/KERR.png',
    category: 'Testing Equipment',
    features: [
      'Digital pressure recording and data logging',
      'Multiple test circuit capabilities',
      'Automated test sequences',
      'Remote monitoring interface',
      'Hazardous area certification'
    ],
    specs: {
      maxTestPressure: '15,000 PSI',
      flowRate: '0-60 GPM',
      powerSource: 'Diesel/Electric Hybrid',
      controlSystem: 'PLC with HMI',
      dataInterface: '4G/LTE & Satellite',
      transportability: 'Skid or Trailer Mounted'
    },
    certification: ['ATEX Zone 1', 'IECEx', 'DNV-GL'],
    tags: ['Pressure Testing', 'Flow Testing', 'Data Logging'],
    icon: Gauge
  },
  {
    id: '4',
    name: 'Accessories & Replacement Parts',
    description: 'Genuine OEM and aftermarket parts for oilfield equipment maintenance and upgrades.',
    image: '/products/KEYSTONE1.png',
    category: 'Spare Parts',
    features: [
      'OEM quality standards',
      'Extensive inventory of critical components',
      'Custom machining capabilities',
      'Expedited shipping options',
      'Technical support included'
    ],
    specs: {
      compatibility: 'Multiple OEM Brands',
      materialGrades: 'API 5L, 6A, 16A',
      qualityControl: '100% Inspection',
      leadTime: '24-72 Hours',
      warranty: '12 Months',
      packaging: 'Industrial Grade, Corrosion Protected'
    },
    certification: ['API Spec Q1', 'ISO 9001:2015'],
    tags: ['Replacement', 'OEM', 'Maintenance'],
    icon: Cog
  },
  {
    id: '5',
    name: 'Custom Steel Fabrication',
    description: 'Tailored steel structures and components manufactured to precise specifications for oilfield applications.',
    image: '/products/OPENCLOSE.png',
    category: 'Fabrication',
    features: [
      'Custom design and engineering services',
      'Heavy-duty structural fabrication',
      'Precision CNC machining',
      'Comprehensive NDT testing',
      'Surface treatment and coating options'
    ],
    specs: {
      steelGrades: 'Carbon, Stainless, Alloy',
      thickness: '1/8" to 4"',
      weldingProcesses: 'SMAW, GMAW, FCAW, GTAW',
      surfaceTreatment: 'Blasting, Priming, Painting',
      qualityStandards: 'AWS D1.1, ASME Section IX',
      capacities: 'Up to 20 Tons'
    },
    certification: ['AWS Certified', 'ASME U Stamp', 'API 6A'],
    tags: ['Custom', 'Fabrication', 'Steel'],
    icon: Hammer
  },
  {
    id: '6',
    name: 'Vessels for Oil Field Industry',
    description: 'Storage tanks, pressure vessels, and separators designed for harsh oilfield environments.',
    image: '/products/SILVERSTONE1.png',
    category: 'Pressure Vessels',
    features: [
      'ASME code compliant design',
      'Customizable internal configurations',
      'Corrosion allowance for extended service life',
      'Multiple nozzle and connection options',
      'Internal coatings for product compatibility'
    ],
    specs: {
      designPressure: 'Vacuum to 3000 PSI',
      capacity: '500 to 20,000 Gallons',
      materials: 'Carbon Steel, 316/316L SS, Duplex',
      temperature: '-20°F to 650°F',
      designCode: 'ASME Section VIII Div 1 & 2',
      linings: 'Epoxy, Rubber, Glass, PTFE'
    },
    certification: ['ASME U Stamp', 'National Board R Stamp', 'CRN Registration'],
    tags: ['Pressure Vessel', 'Storage', 'Separator'],
    icon: Zap
  },
  {
    id: '7',
    name: 'Automation & Control Systems',
    description: 'Advanced PLC and SCADA systems for remote monitoring and control of oilfield operations.',
    image: '/products/SILVERSTONE2.png',
    category: 'Automation',
    features: [
      'Real-time data acquisition and monitoring',
      'Cloud-based SCADA solutions',
      'Custom HMI development',
      'Integration with existing control systems',
      'Hazardous area rated components'
    ],
    specs: {
      controllers: 'Allen Bradley, Siemens, Schneider',
      communication: '4G/LTE, Satellite, Radio, Ethernet',
      software: 'Custom SCADA, Mobile Apps',
      enclosures: 'NEMA 4X, Class I Div 1',
      powerOptions: 'AC, DC, Solar',
      redundancy: 'Hot Standby, Dual Redundant'
    },
    certification: ['UL 508A', 'CSA', 'ATEX/IECEx'],
    tags: ['Automation', 'SCADA', 'Remote Monitoring'],
    icon: Cpu
  },
  {
    id: '8',
    name: 'Integral Fittings',
    description: 'High-pressure pipe fittings and connectors engineered for leak-free operation in critical applications.',
    image: '/products/TJR.png',
    category: 'Fittings',
    features: [
      'Metal-to-metal sealing technology',
      'Working pressures up to 20,000 PSI',
      'Corrosion-resistant alloy options',
      'Compact design for space-constrained applications',
      'Quick-connect versions available'
    ],
    specs: {
      pressureRating: 'Up to 20,000 PSI',
      connections: 'NPT, API, Autoclave',
      materials: '316 SS, Duplex, Inconel, Monel',
      sizes: '1/8" to 2"',
      temperature: '-50°F to 450°F',
      sealType: 'Metal-to-Metal, Elastomeric'
    },
    certification: ['NACE MR0175', 'API 6A', 'DNV-GL'],
    tags: ['High-Pressure', 'Connectors', 'Leak-Free'],
    icon: Plug
  }
];

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    rating: number;
    price: number;
    features: string[];
    stock: number;
    specs: Record<string, string>;
    certification: string[];
    tags: string[];
    icon: React.ElementType;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageUrl = product.image || '/products/placeholder-product.webp';
  const Icon = product.icon;
  
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
    <>
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
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl blur-xl" />
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="outline" className="bg-black/50 text-orange-400 border-orange-500/30 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="outline" className="bg-black/50 backdrop-blur-sm flex items-center gap-1 border-orange-500/30">
            <Star className="h-3 w-3 fill-orange-500 text-orange-500" />
            <span className="text-orange-400">{product.rating}</span>
          </Badge>
        </div>
        
        {/* Product image with hover effect */}
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
          
          {/* Animated particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="absolute rounded-full bg-orange-500/30 w-1 h-1"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      filter: 'blur(1px)',
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
        
        {/* Content */}
        <div className="p-5 flex-1 flex flex-col relative z-10">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <div className="mr-3 bg-orange-500/10 p-2 rounded-lg">
                <Icon className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">{product.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs text-gray-300 border-gray-700">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="mt-auto pt-3 border-t border-gray-800">
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-none"
                  variant="outline"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900 to-black border border-orange-500/20">
                <DialogHeader>
                  <DialogTitle className="text-white flex items-center gap-2">
                    <Icon className="h-5 w-5 text-orange-500" />
                    {product.name}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300">
                    {product.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="relative h-64 bg-gradient-to-b from-black/20 to-black/40 rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                  
                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
                      <TabsTrigger value="specs" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                        Specifications
                      </TabsTrigger>
                      <TabsTrigger value="features" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                        Features
                      </TabsTrigger>
                      <TabsTrigger value="certifications" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                        Certifications
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="specs">
                      <Card className="bg-gray-900 border-gray-800 text-gray-300">
                        <CardHeader>
                          <CardTitle className="text-white">Technical Specifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between border-b border-gray-800 py-2">
                                <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span className="font-medium text-white">{value}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="features">
                      <Card className="bg-gray-900 border-gray-800 text-gray-300">
                        <CardHeader>
                          <CardTitle className="text-white">Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <Check className="w-4 h-4 mr-2 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="certifications">
                      <Card className="bg-gray-900 border-gray-800 text-gray-300">
                        <CardHeader>
                          <CardTitle className="text-white">Certifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            {product.certification.map((cert, i) => (
                              <div key={i} className="flex items-center p-3 border border-gray-800 rounded-lg bg-black/30">
                                <Shield className="w-5 h-5 mr-2 text-orange-500" />
                                <span>{cert}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400">
                    Request Quote
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Particles = ({ count = 50 }) => {
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 5 + 5, // Slower movement
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-500/50"
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
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Extract unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    // const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory ;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default: // 'featured'
        return 0;
    }
  });

  return (
    <section ref={sectionRef} id="products" className="py-20 relative overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Industrial background"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
      <Particles />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            High-quality oil and gas equipment for all your industrial needs
          </p>
        </motion.div>
        
        {/* Search and filter bar */}
        <div className="mb-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              
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
              
              <div className="flex rounded-lg overflow-hidden border border-gray-700">
                <Button 
                  variant="ghost" 
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-black/30 text-gray-400'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Layers className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-black/30 text-gray-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Expandable filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category filter */}
                  <div>
                    <h3 className="text-white font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      <div 
                        className={`cursor-pointer px-3 py-2 rounded-lg ${selectedCategory === null ? 'bg-orange-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Categories
                      </div>
                      {categories.map((category) => (
                        <div 
                          key={category} 
                          className={`cursor-pointer px-3 py-2 rounded-lg ${selectedCategory === category ? 'bg-orange-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price range filter */}
                
                  
                  {/* Quick filters */}
                  <div>
                    <h3 className="text-white font-medium mb-2">Quick Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer bg-black/30 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                        onClick={() => setSortOption('rating')}
                      >
                        Top Rated
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer bg-black/30 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                        onClick={() => {
                          setSelectedCategory('Hydraulic Systems');
                        }}
                      >
                        Hydraulic Systems
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer bg-black/30 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                        onClick={() => {
                          setSearchTerm('high-pressure');
                        }}
                      >
                        High Pressure
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Results summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            Showing <span className="text-white font-medium">{sortedProducts.length}</span> of <span className="text-white font-medium">{products.length}</span> products
          </p>
          {searchTerm && (
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white"
              onClick={() => setSearchTerm('')}
            >
              Clear search <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        <div className={viewMode === 'grid' ? 
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : 
          "flex flex-col space-y-6"}
        >
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
