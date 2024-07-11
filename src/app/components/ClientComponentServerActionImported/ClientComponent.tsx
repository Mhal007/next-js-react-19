// Client component

"use client"

import { onSubmit } from './serverActions'

export const ClientComponent = () => {
  return (
    <div onClick={() => onSubmit()} style={{backgroundColor: 'green', cursor: 'pointer'}}>
      <h2>Client Component</h2>
    </div>
  )
}