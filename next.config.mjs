/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://nestjs-course:path*`,
      },
    ];
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
