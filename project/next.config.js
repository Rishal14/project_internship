/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export for production build
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    domains: [],
    remotePatterns: [],
  },
  // Ensure static files are properly exported
  trailingSlash: true,
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static page generation in development
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
