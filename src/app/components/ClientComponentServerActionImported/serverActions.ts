"use server"

export const onSubmit = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Server action")
}