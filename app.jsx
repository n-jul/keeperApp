import React, { useState } from "react";
import Heading from "./header";
import Note from "./note";
import Footer from "./footer";
import InputArea from "./inputArea";

function App() {

    const [notes, addNote] = useState([{
        noteTitle: "",
        noteContent: ""
    }]);

    function handleClick(title, content) {

        addNote(prevItems => [...prevItems, {
            noteTitle: title,
            noteContent: content
        }]);

    }

    function deleteNote(id) {

        addNote(notes.filter((element, index) => index != id));
    }

    return (
        <div>
            <Heading />
            <InputArea onChecked={handleClick} />

            <div className="box">
                {notes.map((element, index) => {

                    if (index === 0) return;

                    return <Note
                        key={index}
                        id={index}
                        title={element.noteTitle}
                        content={element.noteContent}
                        onChecked={deleteNote}
                    />
                })}
            </div>

            <Footer />
        </div>
    )
}

export default App;