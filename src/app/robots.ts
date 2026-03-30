import { MetadataRoute } from 'next'
import { SITE_URL } from "@/lib/site"

/**
 * Generates the robots.txt for the Avana website.
 * 
 * @description
 * This file is automatically processed by Next.js to generate /robots.txt.
 * It provides directives to search engine crawlers about which pages to index.
 * 
 * Rules:
 * - Allow all public pages to be crawled
 * - Disallow API routes and internal Next.js routes
 * - Block AI training bots (GPTBot, CCBot)
 * - Reference the sitemap for efficient crawling
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard search engine crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/_next/',         // Next.js internal routes
          '/private/',       // Private routes (if any)
          '/*.json$',        // JSON files
        ],
      },
      {
        // Block OpenAI's GPTBot from training on content
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        // Block Common Crawl bot
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        // Block Google's AI training bot
        userAgent: 'Google-Extended',
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
