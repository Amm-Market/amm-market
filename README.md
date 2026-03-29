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

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start Next.js in development   |
| `npm run build`      | Production build               |
| `npm run start`      | Run production server          |
| `npm run lint`       | ESLint                         |
| `npm run test`       | Vitest (watch)                 |
| `npm run test:run`   | Vitest (single run)            |
| `npm run test:ui`    | Vitest UI                      |
| `npm run test:coverage` | Vitest with coverage      |
