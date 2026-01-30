import { HeroGrid } from "~/components/hero/hero-grid"
import { IridiumLogo } from "~/components/iridium-logo"

export default function Home() {
  return (
    <main class="p-4">
      <div class="grid grid-cols-1 grid-rows-2 gap-3 mb-3 md:grid-cols-3">
        <div class="flex flex-col gap-4 md:col-span-3 bento-cell">
          <div class="flex flex-row">
            <IridiumLogo />
            <h1>Iridium</h1>
          </div>

          <span class="text-xl">
            Systems Research &amp; Developer Infrastructure Lab.
          </span>
        </div>

        <div class="flex relative flex-col row-start-2 justify-between md:col-span-2 bento-cell">
          <p class="font-mono text-lg font-medium">
            Performance is not negotiable. We reject the comfortable lie that
            "good enough" is sufficient. We choose systems languages over GC'd
            runtimes, manual control over convenient abstractions, and strategic
            leverage over hype cycles. Iridium builds for production. We
            measure. We optimize. We do not compromise on the metal.
          </p>
        </div>

        <div class="flex gap-3 md:flex-col bento-cell centered">
          <h2>Dense</h2>
          <h2>Unyielding</h2>
          <h2>Refractory</h2>
        </div>
      </div>

      <HeroGrid />
    </main>
  )
}
