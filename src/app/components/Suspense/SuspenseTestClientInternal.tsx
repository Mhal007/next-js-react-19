"use client"

import { use } from "react";

const fetchData =
  (id: string) =>
    new Promise<string>((resolve) =>
      setTimeout(
        () => resolve(`${id} = started ${new Date().toLocaleTimeString()}`),
        1000
      )
    )

export const SuspenseTestClientInternal = (props: { name: string }) => {
  const { name } = props;
  
  if (typeof window === 'undefined') {
    throw Error('Should only render on the client')
  }
  
  const data = use(fetchData(name)) as string;

  return (
    <div>
      <h4 onClick={() => {}}>{name}</h4>
      <h4>{data}</h4>
    </div>
  )
}