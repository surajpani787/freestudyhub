import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure the remote domains allowed for next/image usage
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Google thumbnails
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube video thumbnails
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com", // YouTube channel/profile images
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // YouTube alternate image source
      },
      {
        protocol: "https",
        hostname: "nextjs.org", // Example official Next.js images
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com", // Google/YouTube profile image
      },
      {
        protocol: "https",
        hostname: "mimg.youtube.com", // Mobile YouTube thumbnails
      },
    ],
  },
  transpilePackages: ["lucide-react"],
  reactStrictMode: true, // Ensures best practices in development
  webpack: (config, { dev }) => {
    if (dev) {
      // Prevents Windows EPERM file-locking errors on .next/cache/webpack pack files during fast reload
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
