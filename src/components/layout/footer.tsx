import Brand from "../brand"

export default function Footer() {
  return (
    <footer class="flex flex-col-reverse gap-12 justify-between mx-4 mb-4 sm:flex-row bento-cell">
      <div class="flex flex-col gap-4 justify-between">
        <Brand size="md" />

        <div class="flex flex-col">
          <p class="font-medium">Researching the future of perfomance.</p>
          <span>Copyright (c) 2026 Iridium. All Rights Reserved.</span>
        </div>
      </div>

      <div class="flex flex-col gap-6 mr-14">
        <div>
          <span class="text-xl font-bold text-primary">Read more...</span>
          <ul class="flex flex-col gap-1 disc-none w-fit">
            <li class="whitespace-nowrap">
              <a href="/">Home</a>
            </li>
            <li class="whitespace-nowrap">
              <a href="/team">Team</a>
            </li>
            <li class="whitespace-nowrap">
              <a href="/case-studies">Case Studies</a>
            </li>
          </ul>
        </div>

        <div>
          <span class="text-xl font-bold text-primary">Find us in...</span>
          <ul class="flex flex-col gap-1 disc-none w-fit">
            <li>
              <a
                href="https://www.linkedin.com/company/iridium-tech"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
