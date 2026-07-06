import Note from "./Note";

interface NoteType {
    id: number,
    title: string,
    description: string
};

interface NoteProps {
    notesProp: NoteType[],
    onDelete: any,
    onUpdate: any
};

function NoteList(noteArray: NoteProps) {
    return (
        <section className="notelist">
            {noteArray.notesProp.map(note => 
            <Note key={note.id} id={note.id} title={note.title} description={note.description} 
            onDelete={noteArray.onDelete} onUpdate={noteArray.onUpdate}/>)}
        </section>
    )
};

export default NoteList;