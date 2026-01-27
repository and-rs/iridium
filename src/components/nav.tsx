import { useLocation } from "@solidjs/router";
import { ThemeSwitch } from "./theme-switch";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) => path === location.pathname;

  return (
    <nav>
      <ul flex gap="4" border="b-2 muted" p="x-2 y-4">
        <li class={active("/") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/">Home</a>
        </li>

        <li class={active("/about") ? "btn-link-active" : "btn-link-inactive"}>
          <a href="/about">About</a>
        </li>
        <ThemeSwitch />
      </ul>
    </nav>
  );
}
