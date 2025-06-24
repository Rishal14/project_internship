import { products, Product } from '@/lib/products';
import ProductClient from './ProductClient';

// This function runs at build time to generate static paths
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Disable dynamic params for static export
export const dynamicParams = false;

// Force static generation
export const dynamic = 'force-static';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p: Product) => p.slug === params.slug);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const relatedProducts = products
    .filter((p: Product) => p.slug !== params.slug)
    .slice(0, 3);

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}


