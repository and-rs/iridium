import ChevronRight from "lucide-solid/icons/chevron-right"
import { Brand } from "~/components/brand"
import { PerformanceHero } from "~/components/perfomance-hero"
import { Spa } from "~/components/spa"
import { Button } from "~/components/ui/button"

const HomeRoute = () => {
  return (
    <main class="px-4 pt-4 pb-3">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-4 md:col-span-3 bento-cell md:h-min">
          <Brand size="lg" />
          <span class="text-xl">
            Systems Research &amp; Developer Infrastructure Lab.
          </span>
        </div>

        <div class="flex flex-col gap-3 md:flex-row">
          <div class="flex flex-col gap-3 flex-[3/4]">
            <Spa />
            <div class="bento-cell centered">
              <Button
                variant="ghost"
                class="gap-2 text-xl font-medium"
                size="lg"
              >
                View the case studies
                <ChevronRight class="size-7" />
              </Button>
            </div>
          </div>
          <PerformanceHero />
        </div>
      </div>
    </main>
  )
}

export default HomeRoute
