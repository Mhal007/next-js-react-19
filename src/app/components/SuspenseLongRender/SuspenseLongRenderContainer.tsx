import { Suspense } from "react"
import { SuspenseLongRenderItem } from "./SuspenseLongRenderItem"

export const SuspenseLongRenderContainer = () => {
  return (
    <div style={{backgroundColor: "brown"}}>
      <h1>Suspense</h1>
      <Suspense fallback={<div>Loading SuspenseLongRenderContainer</div>}>
        <SuspenseLongRenderItem id="1" />
        <SuspenseLongRenderItem id="2" />
      </Suspense>
    </div>
  )
}