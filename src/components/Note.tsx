import { useState } from "react";
import Button from "./Button";
import save from "../assets/save.svg"
import cross from "../assets/cross.svg"
import pencil from "../assets/pencil.svg"


interface Note {
    id: number,
    title: string,
    description: string
    onDelete: any,
    onUpdate: any
};

function Note(note: Note) {
    let [isEditing, setIsEditing] = useState<boolean>(false);
    let [title, setTitle] = useState<string>(note.title);
    let [description, setDesccription] = useState<string>(note.description);
    return(
        <article className="note">
            {isEditing 
            ?<>
                <input type="text" className="note_input_title" 
                defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>

                <input type="text" className="note_input_description" 
                defaultValue={description} onChange={(e) => setDesccription(e.target.value)}/>
            </> 
            :<>
                <h3 className="note_title">{title}</h3> 
                <p className="note_description">{description}</p>
             </>}
            
            {isEditing 
            ?<Button onClick={() => {setIsEditing(!isEditing); note.onUpdate({id: note.id, title: title, description: description})}} className="note_save_button">
                <img src={save} alt="save" />
            </Button>

            :<Button onClick={() => setIsEditing(!isEditing)} className="note_edit_button">
                <img src={pencil} alt="pencil" />
             </Button>}

            <Button onClick={() => note.onDelete(note.id)} className="note_delete_button">
                <img src={cross} alt="cross" />
            </Button>
        </article>
    )
};

export default Note;