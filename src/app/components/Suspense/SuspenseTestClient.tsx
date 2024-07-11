"use client"

import { Suspense } from "react"
import { SuspenseTestClientInternal as SuspendingComponent } from "./SuspenseTestClientInternal"

export const SuspenseTestClient = () => {
  return (
    <div style={{backgroundColor: "green"}}>
      <Suspense fallback="Suspense test Client">
        <SuspendingComponent name="1" />
        <SuspendingComponent name="2" />
      </Suspense>
    </div>
  )
}