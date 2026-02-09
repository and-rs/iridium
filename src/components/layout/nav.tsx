import { A, useLocation } from "@solidjs/router"
import { ThemeSwitch } from "./theme-switch"

export const Nav = () => {
  const location = useLocation()
  const active = (path: string) => path === location.pathname

  return (
    <nav class="max-w-800px mx-a">
      <ul class="flex fixed gap-4 p-4 m-4 border-2 shadow z-60 border-muted bg-card">
        <li class={active("/") ? "btn-link-active" : "btn-link-inactive"}>
          <A href="/">Home</A>
        </li>

        <li
          class={
            active("/case-studies") ? "btn-link-active" : "btn-link-inactive"
          }
        >
          <A href="/case-studies">Case Studies</A>
        </li>
        <ThemeSwitch />
      </ul>
    </nav>
  )
}
