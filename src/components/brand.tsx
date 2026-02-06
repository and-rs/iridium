import { animate, remove, splitText, spring } from "animejs"
import { onCleanup, onMount } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Logo } from "./logo"

type BrandSize = "sm" | "md" | "lg"

const CONFIG = {
  sm: { tag: "h3", gap: "gap-1", logoSize: "size-8", shadow: "" },
  md: {
    tag: "h2",
    gap: "gap-2",
    logoSize: "size-10",
    shadow: "drop-shadow/10",
  },
  lg: {
    tag: "h1",
    gap: "gap-4",
    logoSize: "size-14 sm:size-20 md:size-24",
    shadow: "drop-shadow-sm/20",
  },
} as const

export default function Brand(props: { size?: BrandSize; class?: string }) {
  const size = props.size || "md"
  const variant = CONFIG[size]
  let ref: HTMLHeadingElement | undefined
  const getColors = () => {
    const s = getComputedStyle(document.documentElement)
    return {
      primary: s.getPropertyValue("--primary").trim(),
      success: s.getPropertyValue("--success").trim(),
      light: s.getPropertyValue("--light").trim(),
    }
  }

  onMount(() => {
    if (size !== "lg" || !ref) return
    const { chars } = splitText(ref, { chars: true })
    const { light } = getColors()
    chars.forEach((char) => {
      char.style.color = light
    })

    const animateTo = (targetIndex: number | null) => {
      const { light, success } = getColors()
      chars.forEach((char, i) => {
        const isForward = targetIndex !== null && i >= targetIndex
        animate(char, {
          skew: isForward ? -10 : 0,
          translateX: isForward ? 10 : 0,
          color: isForward ? success : light,
          duration: 175,
          ease: spring({ bounce: 0, duration: 175 }),
        })
      })
    }

    chars.forEach((char, index) => {
      char.onmouseenter = () => animateTo(index)
    })

    ref.onmouseleave = () => animateTo(null)
    onCleanup(() => {
      remove(chars)
    })
  })

  return (
    <div
      class={`flex flex-row perspective-normal items-center ${variant.gap} ${
        props.class || ""
      }`}
    >
      <Logo class={`${variant.logoSize} ${variant.shadow}`} />
      <Dynamic
        ref={ref}
        component={variant.tag}
        class={`tracking-tighter cursor-default text-light ${variant.shadow}`}
      >
        Iridium
      </Dynamic>
    </div>
  )
}
