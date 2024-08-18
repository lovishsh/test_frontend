/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Remove rewrites for now to test if it's causing the issue
  // async rewrites() {
  //   return [
  //     {
  //       source: '/subdomaincompanyurl/:path*',
  //       destination: '/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
