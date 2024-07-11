import { Suspense } from "react";
import { Note } from "./types";
import { ClientComponent } from "./ClientComponent";

const NOTES: Note[] = [{
  id: 1,
  content: 'note 1'
}]

const db = {
  notes: {
    get: async (id: number) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return NOTES.find(note => note.id === id);
    }
  }
}

export const ServerComponent = () => {
  const notePromise = db.notes.get(1);

  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <Suspense fallback={<p>Loading note...</p>}>
        <ClientComponent notePromise={notePromise} />
      </Suspense>
    </div>
  );
}