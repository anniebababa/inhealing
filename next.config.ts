import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/inhealing',
  assetPrefix: '/inhealing/',
};

export default nextConfig;
