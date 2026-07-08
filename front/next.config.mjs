/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.barballs72.ru',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
