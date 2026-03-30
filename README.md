# AMM Market

**AMM Market** is a lending protocol built for LP collateral. Liquidity providers from Uniswap, Balancer, Curve, or Aerodrome can deposit supported LP positions, have them evaluated inside market-specific risk frameworks, and borrow against them while the positions stay active in the underlying pools.

The closest comparable system is [Fluid](https://fluid.instadapp.io/) (Instadapp). Fluid’s innovation is a unified liquidity layer where debt and collateral become DEX liquidity inside a vertically integrated stack. AMM Market’s design is different: it turns third-party AMM LP positions from across venues into borrowable collateral in a horizontally aggregative system. Fluid owns the liquidity rails; AMM Market works with the rails that already exist. The distinction shows up when you ask where liquidity lives, who controls the infrastructure, and what exactly is being collateralized.

## This repository

This repo is the frontend for the product: landing pages, developer docs, blog, and legal pages. It is built with [Next.js](https://nextjs.org/) (App Router). There is **no** backend app service, **no** wallet integration, and **no** live on-chain protocol execution code here—the smart contracts and production app live elsewhere.

For long-form product and architecture context, run the app locally and open **`/lightpaper`**, or browse **`/developers`** for technical documentation.

## Getting started

Install dependencies:

```bash
npm install
```

Copy the translation environment template if you plan to use General Translation:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start Next.js in development   |
| `npm run translate`  | Generate General Translation output |
| `npm run build`      | Production build               |
| `npm run start`      | Run production server          |
| `npm run lint`       | ESLint                         |
| `npm run test`       | Vitest (watch)                 |
| `npm run test:run`   | Vitest (single run)            |
| `npm run test:ui`    | Vitest UI                      |
| `npm run test:coverage` | Vitest with coverage      |

## Translation setup

This app is wired for [General Translation](https://generaltranslation.com/) with locale-aware URLs and a header language picker.

Set these environment variables before generating translations or running a production build:

```bash
GT_PROJECT_ID=your-general-translation-project-id
GT_API_KEY=your-general-translation-api-key
# optional local-dev fallback
GT_DEV_API_KEY=your-general-translation-dev-api-key
```

For the current repo state, translation will not work until you actually create `.env.local`; right now only `.env.example` exists.

`GT_API_KEY` is the official key used by the GT CLI. This repo also accepts `GT_DEV_API_KEY` as a fallback for local development when running `npm run translate`.

The production build runs `npm run translate` before `next build`, so missing GT credentials will block a full translated build.
