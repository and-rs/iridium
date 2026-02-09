import {
  defineConfig,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"
import { THEME_COLORS } from "./src/lib/theme"

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
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
    colors: Object.fromEntries(
      Object.keys(THEME_COLORS).map((key) => [key, `var(--${key})`]),
    ),
    breakpoints: {
      sm: "425px",
      md: "768px",
    },
  },
  // biome-ignore format: uno shortcuts
  shortcuts: {
    "brand-text": "tracking-tighter cursor-default text-light transition-colors",
    "brand-logo-lg": "size-14 sm:size-20 md:size-24 drop-shadow-sm/20",
    "brand-logo-md": "size-10 drop-shadow/10",
    "brand-logo-sm": "size-8",

    centered: "flex justify-center items-center",
    "bento-cell": "p-4 shadow bg-card border-2 border-muted hover:border-secondary transition-all",

    "btn-link-active": "border-b-2 border-primary",
    "btn-link-inactive": "border-b-2 border-transparent hover:border-muted",

    "h1-title": "text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl text-primary",
    "h2-title": "text-4xl font-semibold tracking-tighter text-primary",
    "h3-title": "text-2xl font-semibold tracking-tight text-primary",
  },
  preflights: [
    {
      getCSS: ({ theme }) => {
        const createVars = (mode: "light" | "dark") =>
          Object.entries(THEME_COLORS)
            .map(([k, v]) => `--${k}: ${v[mode]};`)
            .join("\n")

        return `
          :root { ${createVars("light")} }
          [data-kb-theme="dark"] { ${createVars("dark")} }
          body {
            background-color: var(--background);
            color: var(--foreground);
            font-family: ${theme.fontFamily?.sans};
            -webkit-font-smoothing: antialiased;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          h1 { @apply h1-title; }
          h2 { @apply h2-title; }
          h3 { @apply h3-title; }
        `
      },
    },
  ],
})
