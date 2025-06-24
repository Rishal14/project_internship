export interface Product {
  id: number;
  title: string;
  description: string;
  slug: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "TJK Molded Products",
    description: "Premium molded products for industrial applications",
    slug: "tjk-molded-products",
    images: [
      "/products/tjk-molded-1.jpg",
      "/products/tjk-molded-2.jpg"
    ]
  },
  {
    id: 2,
    title: "Flow Valve",
    description: "Advanced flow control solutions",
    slug: "flow-valve",
    images: [
      "/products/FLOWVALVE.png"
    ]
  },
  {
    id: 3,
    title: "KERR Pumps",
    description: "High-performance pumping systems",
    slug: "kerr-pumps",
    images: [
      "/products/KERR.png"
    ]
  },
  {
    id: 4,
    title: "OPEN & CLOSE Oil Field Equipment",
    description: "Specialized equipment for oil field operations",
    slug: "open-close-equipment",
    images: [
      "/products/OPENCLOSE.png"
    ]
  },
  {
    id: 5,
    title: "Affordable Automation Products",
    description: "Cost-effective automation solutions",
    slug: "affordable-automation",
    images: [
      "/products/AA1.png",
      "/products/AA2.png"
    ]
  },
  {
    id: 6,
    title: "SILVER FOX Flow Control Tools",
    description: "Precision flow control tools",
    slug: "silver-fox",
    images: [
      "/products/SILVERSTONE1.png",
      "/products/SILVERSTONE2.png"
    ]
  },
  {
    id: 7,
    title: "Keystone Oilfield Fabrication",
    description: "Custom fabrication services for oilfield equipment",
    slug: "keystone-fabrication",
    images: [
      "/products/KEYSTONE1.png"
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
