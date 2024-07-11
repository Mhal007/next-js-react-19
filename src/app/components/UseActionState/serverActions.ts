"use server"

export type State = {
    error?: string | null;
    data?: string | null;
}

export const updateName = async (previousState: State, formData: FormData) => {
  console.log("The name is: " + formData.get("name"))

  return {
    error: undefined,
    data: "data"
  } as State
}