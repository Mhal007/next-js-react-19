"use client"

import { use } from "react";
import { Note } from "./types";

export const ClientComponent = ({notePromise}) => {
  const note = use(notePromise);

  const onClick = () => {
    console.log('Note clicked ', note.id);
  }

  return (
    <div onClick={onClick}>
      {note.content}
    </div>
  )
}

