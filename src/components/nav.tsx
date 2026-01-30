import { useLocation } from "@solidjs/router"
import { ThemeSwitch } from "./theme-switch"

export default function Nav() {
  const location = useLocation()
  const active = (path: string) => path === location.pathname

  return (
    <nav class="max-w-800px mx-a">
      <ul class="flex fixed gap-4 p-4 m-4 border-2 shadow border-muted bg-card">
        <li class={active("/") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/">Home</a>
        </li>

        <li class={active("/about") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/about">About</a>
        </li>
        <ThemeSwitch />
      </ul>
    </nav>
  )
}
