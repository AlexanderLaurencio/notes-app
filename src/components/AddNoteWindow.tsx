import { useState } from "react"
import Button from "./Button";

interface onNewNote {
    openAddNoteWindw: any,
    onAddNewNote: any
}

function AddNoteWindow(onActions: onNewNote) {
    let [title, setTitle] = useState<string>();
    let [description, setDescription] = useState<string>();
    function onCancel(e: any) {
        e.preventDefault();
        onActions.openAddNoteWindw();
    };

    function onAdd(e: any) {
         e.preventDefault();
        if (!title || !description) {  
            alert("Fill all the fields")
        } else {
            onActions.onAddNewNote({title: title, description: description})
        }
    };
    return(
        <dialog className="add_note_dialog">
            <form className="form">
                <label htmlFor="form_input_title">
                    Title
                    <input type="text" className="form_input" id="form_input_title"
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="form_input_description">
                    Description
                    <input type="text" className="form_input" id="form_input_description"
                    onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <div className="form_buttons_container">
                    <Button className="form_cancel_button" onClick={onCancel}>Cancel</Button>
                    <Button className="form_save_button" onClick={onAdd}>Save</Button>
                </div>
            </form>
        </dialog>
    )
};

export default AddNoteWindow;