"use client"

import { Button } from "@mantine/core";
import { useState, useTransition } from "react";

const updateName = (name: string) => {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

export const SimpleAction = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  
  const handleSubmit = () => {
    startTransition(async () => {
      await updateName(name);
    })
  };
  
  return (
    <div style={{backgroundColor: 'lightblue', padding: '1em'}}>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <Button onClick={handleSubmit} disabled={isPending}>
          Update
      </Button>
    </div>
  );
}