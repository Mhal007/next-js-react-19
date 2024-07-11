import { ClientComponent } from "./ClientComponent";

export const ServerComponent = async () => {
  const onSubmit = async () => {
    "use server"

    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Server action")
  }

  return (
    <ClientComponent onSubmit={onSubmit} />
  )
}