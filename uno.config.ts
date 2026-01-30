import {
  defineConfig,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Golos Text",
        mono: "IBM Plex Mono",
      },
    }),
  ],
  shortcuts: {
    "btn-link-active": "border-b-2 border-primary text-xl font-sans",
    "btn-link-inactive":
      "border-b-2 border-transparent text-xl font-sans hover:border-muted",
    "bento-cell":
      "bg-card border-2 border-muted p-4 shadow hover:border-secondary transition-all",
    centered: "flex justify-center items-center",
  },
  theme: {
    colors: {
      foreground: "var(--foreground)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      success: "var(--success)",
      accent: "var(--accent)",
      muted: "var(--muted)",
      card: "var(--card)",
    },
    breakpoints: {
      sm: "425px",
      md: "768px",
    },
  },
})
