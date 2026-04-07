import localFont from "next/font/local"

/**
 * Outfit is only loaded on the Brand page as a specimen reference.
 * It is not part of the global first-paint font path.
 */
export const brandOutfitFont = localFont({
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  src: [
    {
      path: "../../../public/fonts/outfit/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/outfit/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/outfit/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})
