import localFont from "next/font/local"

/**
 * Diatype is the app-wide typeface used across the marketing site.
 * Only the actively used weights stay in the global font preload path.
 */
export const diatypeFont = localFont({
  variable: "--font-diatype",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  src: [
    {
      path: "../../public/fonts/diatype/ABCDiatypeVariable-Trial.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/diatype/ABCDiatype-RegularItalic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/diatype/ABCDiatype-MediumItalic-Trial.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/diatype/ABCDiatype-BoldItalic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
  ],
})
