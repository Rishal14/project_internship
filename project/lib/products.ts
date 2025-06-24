export interface Product {
  id: number;
  name: string;
  title?: string; // Keep for backward compatibility
  description: string;
  slug: string;
  category: string;
  rating: number;
  image: string;
  images?: string[]; // Keep for backward compatibility
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "TJK Molded Products",
    title: "TJK Molded Products",
    description: "Premium molded products for industrial applications",
    slug: "tjk-molded-products",
    category: "Molded Products",
    rating: 4.8,
    image: "/products/TJR.png",
    images: [
      "/products/TJR.png",
      "/products/TJR2.png"
    ],
    features: [
      "High durability",
      "Industrial grade materials",
      "Custom sizes available"
    ]
  },
  {
    id: 2,
    name: "Flow Valve",
    title: "Flow Valve",
    description: "Advanced flow control solutions",
    slug: "flow-valve",
    category: "Valves",
    rating: 4.7,
    image: "/products/FLOWVALVE.png",
    images: [
      "/products/FLOWVALVE.png"
    ],
    features: [
      "Precision control",
      "Durable construction",
      "Easy maintenance"
    ]
  },
  {
    id: 3,
    name: "KERR Pumps",
    title: "KERR Pumps",
    description: "High-performance pumping systems",
    slug: "kerr-pumps",
    category: "Pumps",
    rating: 4.9,
    image: "/products/KERR.png",
    images: [
      "/products/KERR.png"
    ],
    features: [
      "High efficiency",
      "Low maintenance",
      "Long lifespan"
    ]
  },
  {
    id: 4,
    name: "OPEN & CLOSE Oil Field Equipment",
    title: "OPEN & CLOSE Oil Field Equipment",
    description: "Specialized equipment for oil field operations",
    slug: "open-close-equipment",
    category: "Oil Field Equipment",
    rating: 4.6,
    image: "/products/OPENCLOSE.png",
    images: [
      "/products/OPENCLOSE.png"
    ],
    features: [
      "Heavy duty",
      "Rugged construction",
      "Field-tested reliability"
    ]
  },
  {
    id: 5,
    name: "Affordable Automation Products",
    title: "Affordable Automation Products",
    description: "Cost-effective automation solutions",
    slug: "affordable-automation",
    category: "Automation",
    rating: 4.5,
    image: "/products/AA1.png",
    images: [
      "/products/AA1.png",
      "/products/AA2.png"
    ],
    features: [
      "Cost-effective",
      "Easy to install",
      "Reliable performance"
    ]
  },
  {
    id: 6,
    name: "SILVER FOX",
    title: "SILVER FOX",
    description: "Precision flow control tools",
    slug: "silver-fox",
    category: "Flow Control",
    rating: 4.8,
    image: "/products/SILVERSTONE1.png",
    images: [
      "/products/SILVERSTONE1.png",
      "/products/SILVERSTONE2.png"
    ],
    features: [
      "Precision engineered",
      "Durable materials",
      "Accurate flow control"
    ]
  },
  {
    id: 7,
    name: "Keystone Fabrication",
    title: "Keystone Fabrication",
    description: "Custom fabrication services",
    slug: "keystone-fabrication",
    category: "Fabrication",
    rating: 4.9,
    image: "/products/KEYSTONE1.png",
    images: [
      "/products/KEYSTONE1.png"
    ],
    features: [
      "Custom solutions",
      "Expert craftsmanship",
      "Quality materials"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getRelatedProducts(slug: string, count: number = 3): Product[] {
  return products
    .filter(product => product.slug !== slug)
    .slice(0, count);
}
