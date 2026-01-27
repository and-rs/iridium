import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind4,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  transformers: [transformerAttributifyJsx()],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Hanken Grotesk",
        mono: "IBM Plex Mono",
      },
    }),
  ],
  shortcuts: {
    "btn-link-active": "border-b-2 border-primary text-xl font-sans",
    "btn-link-inactive":
      "border-b-2 border-transparent text-xl font-sans hover:border-muted",
  },
  theme: {
    colors: {
      foreground: "var(--foreground)",
      background: "var(--background)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      muted: "var(--muted)",
    },
  },
});
