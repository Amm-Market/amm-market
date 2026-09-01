#!/usr/bin/env python3
"""Sync content phrase-map strings from already-localized messages/*.json."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCALES = [
    x.strip()
    for x in "zh-CN,zh-TW,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,fa,sw,vi,tr,ko,ha,it,th,pl,uk,nl,he".split(",")
]
FILES = ["blog.json", "marketing.json", "docs.json", "faq.json", "legal.json"]

EMAIL_RE = re.compile(r"^[\w.+-]+@[\w.-]+\.\w+$")
CODE_RE = re.compile(
    r"(healthFactor|function |getValue|getCollateralData|getUserAggregate|handleLiquidation|"
    r"setTokenConfig|external view|uint256 |AggregatorV3|IOracle|LiquidationAdapter|=>|===|\.tsx?)"
)
CSS_RE = re.compile(r"(className|object-|border-|bg-|max-w-|@keyframes|w-full|rounded-|px-|py-|grid-|flex )")
SKIP_KEYS = {"id", "slug", "image", "href", "key"}
DATE_RE = re.compile(
    r"^(January|February|March|April|May|June|July|August|September|October|November|December) \d+, \d{4}$"
)
GLOBAL_EN = {
    "Avana", "Sandbox", "Aave v4", "Aave", "DeFi", "AppKit", "GitHub", "FAQ", "Twitter", "Telegram",
    "Uniswap", "Curve", "Balancer", "Aerodrome", "SushiSwap", "Chainlink", "Lido", "Maker", "Compound",
    "Frax", "Synthetix", "Tether", "The Graph", "Bitcoin", "Ethereum", "Ether",
    "stETH", "wstETH", "weETH", "osETH", "rETH", "cbETH", "cbBTC", "ETHx", "LBTC", "sBTC", "tBTC",
    "renBTC", "USDC", "USDT", "USDe", "USDD", "LUSD", "GHO", "WETH", "ETH", "BTC", "LP", "AMM",
    "APR", "APY", "LTV", "TVL", "MEV", "IL", "NFT", "DAO", "EVM", "SDK", "JSON", "URL", "LPs",
    "ACTIVE", "SETTLED", "LIQUIDATING", "Spoke", "Borrow Spoke", "Lend Spoke", "Hub",
    "Avana APY", "$2.4M", "3.5% APY", "HF < 1.0", "Testnet", "Markdown", "ChatGPT", "Claude",
    "Grok", "Perplexity", "LinkedIn", "X", "Diatype", "Outfit", "AaBbCc", "PayPal USD", "USD Coin",
    "Wrapped Bitcoin", "Wrapped Ether", "Curve USD", "Uniswap V3", "Uniswap V2 & SushiSwap",
    "Uniswap V2 ERC-20 LPs", "Uniswap V3 NFT LPs", "Trader Joe & Aerodrome", "SushiSwap / Aerodrome",
    "Balancer Multi-Asset LPs", "Curve Stable/Stable ERC-20 LPs", "Aave v4 Hub", "Borrow Spoke (Avana)",
    "Avana Risk Initiator", "Avana Risk Guardian", "Avana Risk Defender",
    "AggregatorV3Interface", "Oracle Interface: IOracle", "getCollateralData", "getUserAggregate(user)",
    "handleLiquidation", "setTokenConfig", "feeValue", "fullValue", "reserveValue", "maxDifference",
    "maxFeedAge", "maxPoolPriceDifference", "twapSeconds", "uint256 feeValue,", "uint256 fullValue,",
    "uint256 reserveValue", "external view returns (", "LiquidationAdapter",
    "support@avana.cc", "legal@avana.cc", "privacy@avana.cc", "Avana,", "Avana Protocol", "AVANA PROTOCOL",
}


def leaf_map(node, path="", out=None):
    if out is None:
        out = {}
    if isinstance(node, dict):
        for key, value in node.items():
            leaf_map(value, f"{path}.{key}" if path else key, out)
    elif isinstance(node, list):
        for index, value in enumerate(node):
            leaf_map(value, f"{path}[{index}]", out)
    elif isinstance(node, str):
        out[path] = node
    return out


def build_en_to_messages_path(en_messages: dict) -> dict[str, list[str]]:
    leaves = leaf_map(en_messages)
    reverse: dict[str, list[str]] = {}
    for path, value in leaves.items():
        if isinstance(value, str) and value.strip():
            reverse.setdefault(value, []).append(path)
    return reverse


def get_by_path(node, path: str):
    current = node
    for part in path.replace("[", ".[").split("."):
        if not part:
            continue
        if part.startswith("["):
            current = current[int(part[1:-1])]
        else:
            current = current[part]
    return current


def should_sync(path: str, value: str) -> bool:
    value = value.strip()
    if len(value) < 2 or value in GLOBAL_EN:
        return False
    if EMAIL_RE.match(value):
        return False
    if CODE_RE.search(value):
        return False
    if CSS_RE.search(value):
        return False
    if DATE_RE.match(value):
        return False
    leaf = path.split(".")[-1].replace("]", "")
    if leaf in SKIP_KEYS:
        return False
    if value.startswith("/images"):
        return False
    return True


def patch_tree(en_node, loc_node, locale_messages: dict, en_to_msg: dict, path: str = "") -> tuple[object, int]:
    replacements = 0
    if isinstance(en_node, dict) and isinstance(loc_node, dict):
        for key in en_node:
            if key in loc_node:
                child = f"{path}.{key}" if path else key
                loc_node[key], count = patch_tree(en_node[key], loc_node[key], locale_messages, en_to_msg, child)
                replacements += count
        return loc_node, replacements
    if isinstance(en_node, list) and isinstance(loc_node, list):
        out = []
        for index, (en_item, loc_item) in enumerate(zip(en_node, loc_node)):
            patched, count = patch_tree(en_item, loc_item, locale_messages, en_to_msg, f"{path}[{index}]")
            out.append(patched)
            replacements += count
        return out, replacements
    if isinstance(en_node, str) and isinstance(loc_node, str):
        if en_node == loc_node and should_sync(path, en_node):
            for msg_path in en_to_msg.get(en_node, []):
                try:
                    translated = get_by_path(locale_messages, msg_path)
                except (KeyError, IndexError, TypeError):
                    continue
                if translated and translated != en_node:
                    return translated, 1
        return loc_node, 0
    return loc_node, 0


def main() -> None:
    en_messages = json.loads((ROOT / "messages/en.json").read_text())
    en_to_msg = build_en_to_messages_path(en_messages)
    total = 0

    for fname in FILES:
        en_content = json.loads((ROOT / "content/en" / fname).read_text())
        file_total = 0
        for locale in LOCALES:
            loc_messages = json.loads((ROOT / "messages" / f"{locale}.json").read_text())
            loc_path = ROOT / "content" / locale / fname
            loc_content = json.loads(loc_path.read_text())
            patched, count = patch_tree(en_content, loc_content, loc_messages, en_to_msg)
            if count:
                loc_path.write_text(json.dumps(patched, ensure_ascii=False, indent=2) + "\n")
            file_total += count
        print(f"{fname}: synced {file_total} from messages")
        total += file_total
    print(f"total synced: {total}")


if __name__ == "__main__":
    main()
