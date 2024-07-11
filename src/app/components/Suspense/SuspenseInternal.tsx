import { use } from "react";

const fetchData = (id: string) =>
  new Promise<string>((resolve) =>
    setTimeout(
      () => resolve(`${id} = started ${new Date().toLocaleTimeString()}`),
      10000
    )
  );

export const SuspenseInternal = (props: { name: string }) => {
  const { name } = props;
  
  const data = use(fetchData(name)) as string;

  console.log('rendering ' + name)

  return (
    <div>
      <h4>{name}</h4>
      <h4>{data}</h4>
    </div>
  )
}