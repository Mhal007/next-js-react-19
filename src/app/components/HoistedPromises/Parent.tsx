import { Suspense } from "react";
import { Child } from "./Child";

const fetchData1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'data 1'
}

const fetchData2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'data 2'
}

export const Parent = () => {
  const data1Promise = fetchData1();
  const data2Promise = fetchData2();

  return (
    <div style={{backgroundColor: 'cyan'}}>
      <Suspense fallback="Loading...">
        <Child promise={data1Promise} />
        <Child promise={data2Promise} />
      </Suspense>
    </div>
  )
}