const delayRender = () => {
  let a = 0;
  const repeats = 20000;
  for (let i = 0; i<repeats; i++) {
    for (let j = 0; j<repeats; j++) {
      a = a + i + j + 2
    } 
  }
}

export const SuspenseLongRenderItem = ({ id }: { id: string }) => {
  // delayRender();


  return <h2>SuspenseLongRenderItem {id}</h2>;
}