import { type JSX, Suspense } from "solid-js"
import Footer from "./footer"
import Nav from "./nav"

interface LayoutProps {
  children: JSX.Element
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Nav />
      <div class="pt-22 max-w-800px mx-a">
        <Suspense>{props.children}</Suspense>
        <Footer />
      </div>
    </>
  )
}
