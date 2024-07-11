"use client"

export const ClientComponent = ({onSubmit}: {onSubmit: () => Promise<void>}) => {
  return (
    <div onClick={() => onSubmit()} style={{backgroundColor: 'lightgreen', cursor: 'pointer'}}>
      <h2>Client Component</h2>
    </div>
  )
}