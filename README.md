# Avana Marketing Site

**Avana** is a lending protocol built on Aave V4 that enables AMM liquidity pool positions to be used as collateral. Liquidity providers from Uniswap, Balancer, Curve, or Aerodrome can deposit supported LP positions, have them evaluated inside market-specific risk frameworks, and borrow against them while the positions stay active in the underlying pools.

Avana competitor is [Fluid](https://fluid.instadapp.io/) (Instadapp). Fluid built their own unified liquidity layer that combines both lending and dex together, where collateral and debt can also be used as DEX liquidity inside one vertically integrated system. Avana takes a different approach. Instead of owning the liquidity rails, Avana plugs into the AMMs that already exist and lets users borrow against LP positions from across different Dexes. So the big difference is pretty simple: Fluid builds and controls the liquidity infrastructure, while Avana aggregates liquidity positions from the broader DeFi ecosystem and turns them into usable collateral.


## Links

* Website: https://avana.cc
* App: https://app.avana.cc

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

Licensed under the MIT License.
