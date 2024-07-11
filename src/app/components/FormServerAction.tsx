import { Button } from "@mantine/core";

export const FormServerAction = async () => {
  const onSubmit = async (formData: FormData) => {
    "use server";

    console.log("The name is: " + formData.get("name"))
  }

  return (
    <form action={onSubmit}>
      <input type="text" name="name" />
      <Button type="submit">Submit</Button>
    </form>
  )
}