import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { DEFAULT_OG_SUBTITLE, SITE_NAME, SITE_URL } from '@/lib/site'

const SITE_DOMAIN = new URL(SITE_URL).host
const DEFAULT_OG_TITLE = SITE_NAME

export const runtime = 'nodejs'

/**
 * Dynamic OG Image Generator
 * 
 * Generates Open Graph images for social sharing.
 * Usage: /og?title=Page%20Title&subtitle=Optional%20subtitle&type=default|blog|developers|faq
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const title = searchParams.get('title') || DEFAULT_OG_TITLE
  const subtitle = searchParams.get('subtitle') || DEFAULT_OG_SUBTITLE
  const type = searchParams.get('type') || 'default'
  
  // Type-specific styling
  const typeConfig: Record<string, { accent: string; badge: string }> = {
    default: { accent: '#3b82f6', badge: '' },
    blog: { accent: '#8b5cf6', badge: 'Blog' },
    developers: { accent: '#10b981', badge: 'Developers' },
    faq: { accent: '#f59e0b', badge: 'FAQ' },
  }
  
  const config = typeConfig[type] || typeConfig.default

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`,
          padding: '80px',
        }}
      >
        {/* Top decoration bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: `linear-gradient(90deg, ${config.accent} 0%, #3b82f6 50%, #8b5cf6 100%)`,
          }}
        />
        
        {/* Badge if type specified */}
        {config.badge && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                backgroundColor: config.accent,
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '20px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {config.badge}
            </span>
          </div>
        )}
        
        {/* Logo and brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          {/* Simple Avana logo representation */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${config.accent} 0%, #3b82f6 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>A</span>
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1f2937',
            }}
          >
            {SITE_NAME}
          </span>
        </div>
        
        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#6b7280',
            lineHeight: 1.4,
            maxWidth: '800px',
          }}
        >
          {subtitle}
        </div>
        
        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '20px', color: '#9ca3af' }}>
            {SITE_DOMAIN}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '20px', color: '#9ca3af' }}>
              Powered by Aave v4
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
