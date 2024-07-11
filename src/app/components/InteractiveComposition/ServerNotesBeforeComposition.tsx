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

export const ServerNotesBeforeComposition = async () => {
  const notes = await fetchNotes();

  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <span>{note.title}</span>
        </div>
      ))}
    </div>
  )
}