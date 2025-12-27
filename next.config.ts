import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio.uxpincdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.muravie.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
