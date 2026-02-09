import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import {
  defineConfig,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  transformers: [transformerDirectives()],
  preflights: [
    {
      layer: "theme",
      getCSS: async () => {
        const filePath = resolve(__dirname, "src/theme.css")
        return readFile(filePath, "utf-8")
      },
    },
  ],
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
  theme: {
    colors: {
      foreground: "var(--foreground)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      success: "var(--success)",
      accent: "var(--accent)",
      muted: "var(--muted)",
      light: "var(--light)",
      card: "var(--card)",
    },
    breakpoints: {
      sm: "425px",
      md: "768px",
    },
  },
})
