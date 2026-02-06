import { useLocation } from "@solidjs/router"
import { ThemeSwitch } from "./theme-switch"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) => path === location.pathname

  return (
    <nav class="max-w-800px mx-a">
      <ul class="flex fixed gap-4 p-4 m-4 border-2 shadow z-60 border-muted bg-card">
        <li class={active("/") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/">Home</a>
        </li>

        <li class={active("/team") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/team">Team</a>
        </li>

        <li
          class={
            active("/case-studies") ? "btn-link-active" : "btn-link-inactive"
          }
        >
          <a href="/case-studies">Case Studies</a>
        </li>
        <ThemeSwitch />
      </ul>
    </nav>
  )
}
