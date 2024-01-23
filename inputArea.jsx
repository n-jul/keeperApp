import React, { useState } from "react";
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';

function InputArea(props) {

    const [title, addTitle] = useState("");
    const [content, addContent] = useState("");

    function handleTitleChange(event) {

        const newTitle = event.target.value;
        addTitle(newTitle);
    }

    function handleContentChange(event) {

        const newContent = event.target.value;
        addContent(newContent);
    }

    return (
        <div className="container input-item">
            <input
                className="title"
                type="text"
                placeHolder="Enter Title..."
                onChange={handleTitleChange}
                value={title}>
            </input>
            <input
                className="content"
                type="text"
                placeHolder="Enter Content..."
                onChange={handleContentChange}
                value={content}>
            </input>
            <button
                className="add-button"
                onClick={() => {
                    props.onChecked(title, content);
                    addTitle("");
                    addContent("");
                }}>
                <AddCircleSharpIcon />
            </button>
        </div>
    )
}

export default InputArea;