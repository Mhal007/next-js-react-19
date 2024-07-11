"use client"

import { Button } from "@mantine/core";

export const FormClientAction = async () => {
  const onSubmit = async (formData: FormData) => {
    // Cannot include "use server"
    console.log("The name is: " + formData.get("name"))
  }

  return (
    <div style={{backgroundColor: 'brown'}}>
      <form action={onSubmit}>
        <input type="text" name="name" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}