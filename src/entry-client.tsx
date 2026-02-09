// @refresh reload
import "virtual:uno.css"
import "uno:theme.css"

import "./theme.css"
import { mount, StartClient } from "@solidjs/start/client"

const root = document.getElementById("app")
if (!(root instanceof HTMLElement))
  throw new Error("Root element #app not found")

mount(() => <StartClient />, root)
