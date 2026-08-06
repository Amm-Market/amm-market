# Avana

**Avana** is a lending protocol built for LP collateral. Liquidity providers from Uniswap, Balancer, Curve, or Aerodrome can deposit supported LP positions, have them evaluated inside market-specific risk frameworks, and borrow against them while the positions stay active in the underlying pools.

The closest comparable system is [Fluid](https://fluid.instadapp.io/) (Instadapp). Fluid’s innovation is a unified liquidity layer where debt and collateral become DEX liquidity inside a vertically integrated stack. Avana’s design is different: it turns third-party AMM LP positions from across venues into borrowable collateral in a horizontally aggregative system. Fluid owns the liquidity rails; Avana works with the rails that already exist. The distinction shows up when you ask where liquidity lives, who controls the infrastructure, and what exactly is being collateralized.

