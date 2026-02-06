import Brand from "~/components/brand"
import { SpaSvg } from "~/components/spa-svg"

export default function Home() {
  return (
    <main class="p-4">
      <div class="grid grid-cols-1 gap-3 mb-3 md:grid-cols-3 grid-rows-[auto_1fr]">
        <div class="flex flex-col gap-4 md:col-span-3 h-min bento-cell">
          <Brand size="lg" />
          <span class="text-xl">
            Systems Research &amp; Developer Infrastructure Lab.
          </span>
        </div>

        <div class="flex row-start-2 gap-3 justify-center md:col-span-2 bento-cell">
          {/* add some performance metrics here */}
          <SpaSvg />
        </div>

        <div class="flex flex-col gap-3 sm:flex-row md:flex-col bento-cell centered md:aspect-square">
          <h2>Dense</h2>
          <h2>Unyielding</h2>
          <h2>Refractory</h2>
        </div>
      </div>
      <div class="flex flex-col gap-4 py-8">
        <p class="text-4xl font-medium">
          Building for production requires unyielding technical precision and
          direct alignment with the metal.
        </p>
        <p class="text-4xl font-medium">
          Finding the best solutions becomes a mission.
        </p>
      </div>
    </main>
  )
}
