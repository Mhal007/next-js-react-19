import { use } from "react";

export const Child = ({promise}: {promise: Promise<string>}) => {
  const data = use(promise);
  return <div>{data}</div>
}