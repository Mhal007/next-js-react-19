import { Suspense } from "react";

// const delayRender = () => {
//   let a = 0;
//   const repeats = 20000;

//   for (let i = 0; i<repeats; i++) {
//     for (let j = 0; j<repeats; j++) {
//       a = a + i + j + 2
//     } 
//   }
// }

const callApi = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "Hello";

  // delayRender();
}

const AsyncComponentInternal = async () => {
  const result = await callApi();

  return (
    <div>
      <h1>Async Component</h1>
      <span>{result}</span>
    </div>
  )
}

export const AsyncComponent = () => {
  return (
    <div style={{backgroundColor: "blue"}}>
      <Suspense fallback={<div>Loading async server component...</div>}>
        <AsyncComponentInternal />
        <AsyncComponentInternal />
      </Suspense>
    </div>
  )
}