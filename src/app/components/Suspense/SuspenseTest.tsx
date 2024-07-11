import { Suspense } from "react"
import { SuspenseInternal } from "./SuspenseInternal"

export const SuspenseTest = () => {
  return (
    <div style={{backgroundColor: "pink"}}>
      <h1>Suspense TEST SERVER</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseInternal name="Suspense Internal 1" />
        <SuspenseInternal name="Suspense Internal 2" />
      </Suspense>
    </div>
  )
}