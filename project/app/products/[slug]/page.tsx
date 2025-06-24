import { products } from '@/lib/products';
import ProductClient from './ProductClient';
import type { Product } from '@/lib/products';

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
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <a href="/products" className="mt-4 text-blue-600 hover:underline">
            Back to Products
          </a>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}


