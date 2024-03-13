import React, {useState } from "react";

export const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleSubmit = () => {
        setTodos([...todos, todo]);
        // console.log(todos);
    }

    return(
        <>
            <h1>Todo App</h1>
            <label>
                Todo:
                <input type="text" value={todo} onChange={(e) => handleChenge(e)}/>
                <button onClick={handleSubmit}>Add</button>
            </label>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </>
    );  
}