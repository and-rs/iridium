import { A } from "@solidjs/router"
import { Brand } from "../brand"

export const Footer = () => {
  return (
    <footer class="flex flex-col-reverse gap-12 justify-between mx-4 mb-4 sm:flex-row bento-cell">
      <div class="flex flex-col gap-4 justify-between md:flex-[2/3]">
        <Brand size="md" />

        <div class="flex flex-col">
          <p class="font-medium">Researching the future of perfomance.</p>
          <span>Copyright (c) 2026 Iridium. All Rights Reserved.</span>
        </div>
      </div>

      <div class="flex flex-col gap-6 mr-14 md:flex-[1/3]">
        <div>
          <span class="text-xl font-bold text-primary">Read more...</span>
          <ul class="flex flex-col gap-1 disc-none w-fit">
            <li class="whitespace-nowrap">
              <A href="/">Home</A>
            </li>

            <li class="whitespace-nowrap">
              <A href="/case-studies">Case Studies</A>
            </li>
          </ul>
        </div>

        <div>
          <span class="text-xl font-bold text-primary">Find us in...</span>
          <ul class="flex flex-col gap-1 disc-none w-fit">
            <li>
              <A
                href="https://www.linkedin.com/company/iridium-tech"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </A>
            </li>
            <li>
              <A href="/">GitHub</A>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
