import { A } from "@solidjs/router"

const NotFoundRoute = () => {
  return (
    <main class="p-4 mx-auto text-center">
      <h1 class="my-16 text-6xl font-thin">Not Found</h1>
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
        <A href="/team">Team</A>
      </p>
    </main>
  )
}

export default NotFoundRoute
