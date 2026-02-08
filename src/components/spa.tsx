import { animate, createTimeline, svg } from "animejs"
import { onMount } from "solid-js"

const PATH_DATA =
  "m4.447 290.28c0.13184 1.3988 0.74128 2.2328 1.7024 3.099 3.1469 2.8362 3.8732 2.3848 55.153-34.244 9.0175-6.4412 22.107-15.77 29.088-20.731 6.9814-4.9613 16.982-12.298 22.221-16.304 11.174-8.5434 12.382-8.6379 13.16-1.0174 0.54917 5.3802 2.4784 8.4052 5.1728 8.1124 2.8403-0.30871 42.138-7.3767 46.568-8.3756 7.9514-1.7928 19.679-6.7943 48.071-20.501 32.219-15.554 31.603-15.443 51.861-9.2555 43.482 13.281 49.67 17.893 74.11 55.221 24.907 38.042 51.388 59.761 81.957 67.22 23.646 5.77 29.868 2.9279 43.646-19.937 14.583-24.2 13.956-28.601-5.4188-38.008-42.141-20.461-41.397-19.922-42.514-30.746-0.47537-4.6053-0.14507-6.2471 1.9454-9.6576 5.1232-8.3583 5.3844-15.657 0.83218-23.295-4.202-7.0498-5.1079-7.4255-46.575-19.273-57.071-16.305-61.474-19.592-63.138-47.139-1.3409-22.191 2.522-26.753 28.962-34.216 38.939-10.991 52.214-15.463 71.271-24.002 27.146-12.163 25.84-12.368 39.668 6.2288 15.126 20.343 27.926 24.049 33.803 9.784 3.2206-7.8173 2.0733-9.7848-23.497-40.265-33.33-39.73-30.5-38.063-52.21-30.777-16.833 5.6483-18.917 5.4528-25.042-2.3521-3.4734-4.4259-7.0086-5.9408-12.528-5.3669-3.732 0.38809-9.7271 2.6943-72.638 27.956-113.06 45.398-110.63 44.288-129.17 59.016-30.773 24.434-45.366 34.512-52.808 36.471-17.988 4.7355-24.603 9.4903-30.154 21.676-3.8076 8.3581-9.6687 15.229-32.851 38.511-32.393 32.533-39.987 43.72-53.2 78.344-5.6978 14.931-7.7238 20.746-7.4337 23.823z"

export const Spa = () => {
  let pathRef1: SVGPathElement | undefined
  let pathRef2: SVGPathElement | undefined
  let carRef: SVGGElement | undefined

  onMount(() => {
    if (!carRef || !pathRef1 || !pathRef2) return

    const trail = 0.1
    const totalLife = 4000
    const phaseTime = totalLife / (1 + trail)
    const tEntry = trail * phaseTime
    const tTransit = (1 - trail) * phaseTime
    const cycle = tEntry + tTransit

    const [d1] = svg.createDrawable(pathRef1)
    const [d2] = svg.createDrawable(pathRef2)
    const motion = svg.createMotionPath(pathRef1)

    const drawStates = {
      entry: ["0 0", `0 ${trail}`],
      transit: [`0 ${trail}`, `${1 - trail} 1`],
      exit: [`${1 - trail} 1`, "1 1"],
    }

    animate([pathRef1, pathRef2], {
      opacity: [0, 1],
      duration: 1000,
      ease: "inOutCirc",
    })
    animate(carRef, {
      opacity: [0, 1],
      duration: 1000,
      ease: "inOutCirc",
    })

    const tl = createTimeline({
      loop: true,
      duration: cycle * 2,
      defaults: { ease: "linear" },
    })

    tl.label("phase1", 0)
      .label("phase2", cycle)
      .add(d1, { draw: drawStates.entry, duration: tEntry }, "phase1")
      .add(d1, { draw: drawStates.transit, duration: tTransit }, tEntry)
      .add(d1, { draw: drawStates.exit, duration: tEntry }, "phase2")
      .add(d2, { draw: drawStates.entry, duration: tEntry }, "phase2")
      .add(d2, { draw: drawStates.transit, duration: tTransit }, cycle + tEntry)
      .add(d2, { draw: drawStates.exit, duration: tEntry }, "phase1")
      .add(carRef, { ...motion, duration: cycle }, "phase1")
      .add(carRef, { ...motion, duration: cycle }, "phase2")
  })

  return (
    <div class="overflow-hidden h-full">
      <svg
        viewBox="-10 -10 521.68 340.48"
        class="block w-auto max-w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Spa Francorchamps SVG</title>
        <path
          d={PATH_DATA}
          fill="none"
          class="text-secondary/80"
          stroke="currentColor"
          stroke-width="6"
        />
        <path
          ref={pathRef1}
          d={PATH_DATA}
          fill="none"
          class="opacity-0 text-success"
          stroke="currentColor"
          stroke-width="6"
        />
        <path
          ref={pathRef2}
          d={PATH_DATA}
          fill="none"
          class="opacity-0 text-success"
          stroke="currentColor"
          stroke-width="6"
        />
        <g ref={carRef} class="opacity-0 text-success">
          <polygon points="11,0 -11,-11 -11,11" fill="currentColor" />
        </g>
      </svg>
    </div>
  )
}
