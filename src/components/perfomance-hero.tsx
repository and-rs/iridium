import { stagger, waapi } from "animejs"
import { For, onCleanup, onMount, Show } from "solid-js"
import { createStore } from "solid-js/store"

type MetricValue = number | null

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

interface PerformanceStore {
  TTFB: MetricValue
  DOM_READY: MetricValue
  FP: MetricValue
  FCP: MetricValue
  LCP: MetricValue
  CLS: MetricValue
}

const METRIC_CONFIG: Record<
  keyof PerformanceStore,
  { label: string; desc: string }
> = {
  TTFB: { label: "Time to First Byte", desc: "Server responsiveness" },
  DOM_READY: { label: "DOM Ready", desc: "Document structure parsed" },
  FP: { label: "First Paint", desc: "Visual feedback started" },
  FCP: { label: "First Contentful Paint", desc: "Content begins appearing" },
  LCP: { label: "Largest Contentful Paint", desc: "Main content feels ready" },
  CLS: { label: "Cumulative Layout Shift", desc: "Visual layout is stable" },
}

const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = createStore<PerformanceStore>({
    TTFB: null,
    DOM_READY: null,
    FP: null,
    FCP: null,
    LCP: null,
    CLS: 0,
  })

  onMount(() => {
    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming
    if (nav) {
      setMetrics("TTFB", Math.round(nav.responseStart))
      setMetrics("DOM_READY", Math.round(nav.domContentLoadedEventEnd))
    }

    const paintObs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-paint")
          setMetrics("FP", Math.round(entry.startTime))
        if (entry.name === "first-contentful-paint")
          setMetrics("FCP", Math.round(entry.startTime))
      }
    })

    const lcpObs = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      setMetrics("LCP", Math.round(lastEntry.startTime))
    })

    const clsObs = new PerformanceObserver((list) => {
      let currentCls = metrics.CLS || 0
      for (const entry of list.getEntries() as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          currentCls += entry.value
        }
      }
      setMetrics("CLS", Number(currentCls.toFixed(3)))
    })

    paintObs.observe({ type: "paint", buffered: true })
    lcpObs.observe({ type: "largest-contentful-paint", buffered: true })
    clsObs.observe({ type: "layout-shift", buffered: true })

    onCleanup(() => {
      paintObs.disconnect()
      lcpObs.disconnect()
      clsObs.disconnect()
    })
  })

  return metrics
}

export const PerformanceHero = () => {
  const metrics = usePerformanceMetrics()
  const keys = Object.keys(METRIC_CONFIG) as Array<keyof PerformanceStore>
  let containerRef: HTMLElement | undefined

  onMount(() => {
    if (!containerRef) return

    waapi.animate(containerRef.querySelectorAll(".metric-row"), {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: stagger(150),
      duration: 800,
      ease: "outQuart",
    })
  })

  return (
    <section ref={containerRef} class="bento-cell">
      <header class="mb-3">
        <h3>Real-time Performance Vitals</h3>
      </header>
      <div class="flex flex-col gap-2">
        <For each={keys}>
          {(key) => (
            <div class="flex flex-col w-full opacity-0 metric-row border-b-[2px] border-muted">
              <span class="font-bold text-light">
                {METRIC_CONFIG[key].label}
              </span>
              <span>{METRIC_CONFIG[key].desc}</span>
              <div class="my-1 font-mono text-2xl text-end">
                <Show when={metrics[key] !== null} fallback={<span>...</span>}>
                  <span>
                    {metrics[key]}
                    {key === "CLS" ? "" : "ms"}
                  </span>
                </Show>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  )
}
