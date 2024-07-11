"use client"

import { useState } from "react";

const updateName = (name: string) => {
  return new Promise((resolve) => setTimeout(() => resolve(name), 5000));
}

export const UseOptimisticWithState = () => {
  const [currentName, setCurrentName] = useState('name');

  const onUpdateName = (newName: string) => {
    setCurrentName(newName)
  }

  return (
    <div style={{backgroundColor: "orange"}}>
      <UseOptimisticInner currentName={currentName} onUpdateName={onUpdateName} />
    </div>
  )
}


const UseOptimisticInner = ({currentName, onUpdateName}: {currentName: string, onUpdateName: (newName: string) => void}) => {
  const [optimisticName, setOptimisticName] = useState(currentName);
    
  const submitAction = async (formData: FormData) => {
    const newName = formData.get("name") as string;

    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName as string);
  };
    
  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input type="text" name="name" disabled={currentName !== optimisticName} />
      </p>
    </form>
  );
}