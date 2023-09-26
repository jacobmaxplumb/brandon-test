import { useState } from "react";

export const TodoForm = (props) => {
    const [description, setDescription] = useState("");
    return (
        <div>
            <input value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <button onClick={() => {props.addTodo(description)}}>submit</button>
        </div>
    )
}