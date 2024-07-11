"use client"

import { useState } from "react";

export const ClientNotes = (props: { children: React.ReactNode, noteId: number }) => {
  const { children, noteId } = props;
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div key={noteId} onClick={() => setExpanded(expanded => !expanded)}>
      {expanded ? (
        <p>{children} expanded</p>
      ) : (
        <p>{children}</p>
      )}
    </div>
  )
}