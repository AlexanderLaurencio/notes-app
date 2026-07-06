import { useEffect, useState } from "react";
import NoteList from "./NoteList";
import Button from "./Button";
import { addNote, deleteNote, getNotes, updateNote } from "../services/IndexedDB";
import AddNoteWindow from "./AddNoteWindow";

interface NoteType {
    id: number,
    title: string,
    description: string
};


function Notes() {
    let [notes, setNotes] = useState();
    let [isAddingNote, setIsAddingNote] = useState<boolean>();
    useEffect(() =>{
        getAllNotes()
    },[]);
    async function getAllNotes() {
            let allNotes: any = await getNotes();
            setNotes(allNotes);
        };
    function onDeleteNote(id: number) {
        deleteNote(id);
        getAllNotes();
    };
    function onUpdateNote(note: NoteType) {
        updateNote(note);
        getAllNotes();
    };
    function openAddNoteWindow() {
        setIsAddingNote(!isAddingNote)
    };
    function onAddNewNote(note: NoteType) {
        setIsAddingNote(!isAddingNote);
        addNote(note);
        getAllNotes();
    };
    return (
        <main className="notes">
            {notes && <NoteList notesProp={notes} onDelete={onDeleteNote} onUpdate={onUpdateNote}/>}
            <Button onClick={openAddNoteWindow} className="button_add_note">
                <img src="src/assets/plus.svg" alt="plus" />
            </Button>
            {isAddingNote && <AddNoteWindow onAddNewNote={onAddNewNote} openAddNoteWindw={openAddNoteWindow}/>}
        </main>
    )
};

export default Notes;