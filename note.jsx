import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteSharp';

function Note(props) {

    return <div>
        <div className="container">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
        <button
            className="del-button"
            onClick={() => { props.onChecked(props.id) }}>
            <DeleteIcon />
        </button>
    </div>
}

export default Note;