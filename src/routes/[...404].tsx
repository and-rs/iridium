import { A } from "@solidjs/router"

export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="my-16 text-6xl font-thin">
        Not Found
      </h1>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank" rel="noopener">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p>
        <A href="/">Home</A>
        {" - "}
        <A href="/about">About Page</A>
      </p>
    </main>
  )
}
