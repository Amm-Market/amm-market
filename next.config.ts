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
    ],
  },
};

export default nextConfig;
