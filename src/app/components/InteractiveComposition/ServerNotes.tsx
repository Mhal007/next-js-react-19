import { ClientNotes } from "./ClientNotes";

const fetchNotes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [{
    id: 1,
    title: "Note 1",
  },{
    id: 2,
    title: "Note 2",
  },]
}

export const ServerNotes = async () => {
  const notes = await fetchNotes();

  return (
    <div>
      {notes.map(note => (
        <ClientNotes noteId={note.id} key={note.id}>
          <span>{note.title}</span>
        </ClientNotes>
      ))}
    </div>
  )
}