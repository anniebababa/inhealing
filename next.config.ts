import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: '/inhealing',
    assetPrefix: '/inhealing/',
  }),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
