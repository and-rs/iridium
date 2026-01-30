import { defineConfig } from "@solidjs/start/config"
import UnoCSS from "unocss/vite"
import presetWind4 from "@unocss/preset-wind4"
import presetAttributify from "@unocss/preset-attributify"

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS({
        presets: [presetAttributify(), presetWind4()],
      }),
    ],
  },
})
