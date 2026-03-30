import type { NextConfig } from "next";
import { withGTConfig } from "gt-next/config";

const isDevGTKey = (value?: string) => typeof value === "string" && value.startsWith("gtx-dev-");

if (process.env.NODE_ENV === "production" && isDevGTKey(process.env.GT_API_KEY)) {
  process.env.GT_DEV_API_KEY ??= process.env.GT_API_KEY;
  delete process.env.GT_API_KEY;
  console.warn(
    "General Translation build warning: ignoring development GT_API_KEY during production build. Set a production GT_API_KEY to enable pretranslated production output."
  );
}

/**
 * Security headers configuration for the application.
 * These headers protect against common web vulnerabilities including:
 * - XSS (Cross-Site Scripting)
 * - Clickjacking
 * - MIME sniffing
 * - Information disclosure
 * 
 * @see https://owasp.org/www-project-secure-headers/
 */
const securityHeaders = [
  {
    // Enables DNS prefetching for faster external resource loading
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    // Enforces HTTPS for 1 year, including subdomains
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  },
  {
    // Prevents clickjacking by disallowing iframe embedding
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    // Prevents MIME type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    // Enables browser XSS filtering
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    // Controls referrer information sent with requests
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    // Restricts browser features and APIs
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    // Content Security Policy - controls resource loading
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https:",
      "media-src 'self' https://cdn-front.freepik.com",
      "frame-ancestors 'none'",
    ].join('; ')
  }
];

const nextConfig: NextConfig = {
  /**
   * Image optimization configuration
   * Defines allowed external image domains for Next.js Image component
   */
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
      {
        protocol: "https",
        hostname: "mkt-static.crypto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mkt-site-asset.crypto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cryptologos.cc",
        pathname: "/**",
      },
    ],
  },

  /**
   * Production build optimizations
   * Removes console.logs and optimizes package imports
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /**
   * Experimental features for better performance
   * - optimizePackageImports: Tree-shakes large icon/UI libraries
   */
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-tabs'],
  },
  
  /**
   * HTTP Headers configuration
   * Applies security headers to all routes
   */
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default withGTConfig(nextConfig, {
  config: "./gt.config.json",
  getLocalePath: "./src/i18n/getLocale.ts",
  getRegionPath: "./src/i18n/getRegion.ts",
});
