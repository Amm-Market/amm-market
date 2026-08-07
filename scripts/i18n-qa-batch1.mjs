#!/usr/bin/env node
/**
 * Batch 1 i18n QA: fetch pages, check lang/dir, English fingerprints
 */
const BASE = 'http://127.0.0.1:3456';
const LOCALES = ['en', 'fr', 'es', 'ar', 'zh-CN', 'ja'];
const PATHS = ['', '/about', '/borrow', '/lend', '/multiply', '/brand', '/faq', '/privacy', '/terms', '/newsroom'];

const FINGERPRINTS = [
  'How can we help',
  'Borrow Against',
  'Privacy Policy',
  'Terms of',
  'What is Avana',
  'Getting Started',
  'Health Factor',
  'Unlock liquidity',
];

// Common English function words / patterns for paragraph detection
const EN_WORDS = new Set([
  'the','and','for','with','that','this','from','your','are','you','can','will','have','has',
  'our','not','but','all','any','when','how','what','why','who','which','their','they','them',
  'about','into','through','during','before','after','above','below','between','under','again',
  'further','then','once','here','there','where','both','each','few','more','most','other',
  'some','such','only','own','same','than','too','very','just','also','now','new','way','use',
  'used','using','make','made','help','need','want','get','keep','borrow','lend','liquidity',
  'collateral','assets','position','positions','market','markets','protocol','token','tokens',
  'without','while','because','since','until','although','however','therefore','including',
  'provide','provides','allow','allows','enable','enables','support','supports','designed',
  'experience','platform','users','user','risk','yield','leverage','multiply','against',
]);

function localePath(locale, path) {
  const p = path || '/';
  return locale === 'en' ? `/en${p === '/' ? '' : p}` : `/${locale}${p === '/' ? '' : p}`;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMeta(html) {
  const lang = html.match(/<html[^>]*\slang=["']([^"']+)["']/i)?.[1] ?? null;
  const dir = html.match(/<html[^>]*\sdir=["']([^"']+)["']/i)?.[1] ?? null;
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() ?? null;
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() ?? null;
  return { lang, dir, title, h1 };
}

function findFingerprints(text) {
  const found = [];
  for (const fp of FINGERPRINTS) {
    if (text.toLowerCase().includes(fp.toLowerCase())) {
      found.push(fp);
    }
  }
  return found;
}

function englishScore(sentence) {
  const words = sentence.toLowerCase().match(/[a-z]{3,}/g) || [];
  if (words.length < 8) return 0;
  const enCount = words.filter(w => EN_WORDS.has(w)).length;
  return enCount / words.length;
}

function findLongEnglishParagraphs(text, minWords = 20, minScore = 0.35) {
  const sentences = text.split(/(?<=[.!?])\s+|\n+/).filter(s => s.trim().length > 0);
  const hits = [];
  for (const s of sentences) {
    const words = s.match(/[a-zA-Z]{2,}/g) || [];
    if (words.length >= minWords) {
      const score = englishScore(s);
      if (score >= minScore) {
        hits.push({ excerpt: s.slice(0, 120) + (s.length > 120 ? '…' : ''), words: words.length, score: Math.round(score * 100) });
      }
    }
  }
  return hits.slice(0, 5);
}

function isEnglishTitle(title) {
  if (!title) return false;
  const lower = title.toLowerCase();
  const enMarkers = ['borrow against', 'unlock liquidity', 'privacy policy', 'terms of', 'what is avana', 'getting started', 'how can we help', 'lend & earn', 'multiply your', 'about avana', 'brand guidelines', 'newsroom'];
  return enMarkers.some(m => lower.includes(m)) || /^[A-Za-z0-9\s|&–—\-.,!?']+$/.test(title.replace(/Avana/gi, '').trim()) && title.split(/\s+/).filter(w => /^[a-zA-Z]+$/.test(w)).length > 3;
}

async function fetchPage(url) {
  const res = await fetch(url);
  const html = await res.text();
  return { status: res.status, html };
}

async function main() {
  const results = [];

  for (const locale of LOCALES) {
    for (const path of PATHS) {
      const urlPath = localePath(locale, path);
      const url = BASE + urlPath;
      const displayPath = path || '/';

      try {
        const { status, html } = await fetchPage(url);
        if (status !== 200) {
          results.push({ locale, path: displayPath, status: 'ERROR', detail: `HTTP ${status}` });
          continue;
        }

        const meta = extractMeta(html);
        const text = stripHtml(html);
        const fingerprints = findFingerprints(text);
        const longEn = locale !== 'en' ? findLongEnglishParagraphs(text) : [];
        const issues = [];

        // lang/dir checks
        const expectedLang = locale;
        if (meta.lang !== expectedLang) {
          issues.push(`lang=${meta.lang ?? 'missing'} (expected ${expectedLang})`);
        }
        if (locale === 'ar') {
          if (meta.dir !== 'rtl') issues.push(`dir=${meta.dir ?? 'missing'} (expected rtl)`);
        } else if (meta.dir && meta.dir !== 'ltr') {
          issues.push(`dir=${meta.dir} (expected ltr)`);
        }

        // Title check for fr product pages
        if (locale === 'fr' && ['/', '/borrow', '/lend', '/multiply', '/about'].includes(displayPath)) {
          if (isEnglishTitle(meta.title)) {
            issues.push(`English title: "${meta.title}"`);
          }
        }

        // Non-en fingerprint / paragraph checks
        if (locale !== 'en') {
          const substantiveFps = fingerprints.filter(fp => fp !== 'Health Factor' || fingerprints.length > 1);
          const healthOnly = fingerprints.length === 1 && fingerprints[0] === 'Health Factor';

          if (substantiveFps.length > 0) {
            issues.push(`Fingerprints: ${substantiveFps.join(', ')}`);
          }
          if (healthOnly) {
            issues.push('Note: Health Factor (brand term) only');
          }
          if (longEn.length >= 2) {
            issues.push(`Long English paragraphs (${longEn.length}): "${longEn[0].excerpt}"`);
          } else if (longEn.length === 1 && longEn[0].words >= 30) {
            issues.push(`Long English paragraph: "${longEn[0].excerpt}"`);
          }
        }

        const pass = issues.length === 0 || (issues.length === 1 && issues[0].startsWith('Note:'));
        const noteOnly = issues.length === 1 && issues[0].startsWith('Note:');

        results.push({
          locale,
          path: displayPath,
          status: pass ? (noteOnly ? 'PASS*' : 'PASS') : 'FAIL',
          lang: meta.lang,
          dir: meta.dir,
          title: meta.title,
          h1: meta.h1,
          fingerprints: locale !== 'en' ? fingerprints : [],
          longEnCount: longEn.length,
          issues,
        });
      } catch (e) {
        results.push({ locale, path: displayPath, status: 'ERROR', detail: e.message });
      }
    }
  }

  // Print structured report
  console.log(JSON.stringify(results, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
