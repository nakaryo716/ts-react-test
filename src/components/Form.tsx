import { FormEventHandler} from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const todo = form.get("todoInput");
    
    console.log(todo)
}


export const Form = () => {    
    return (
        <form method="post" onSubmit={handleSubmit}>
            <h1>Todo App</h1>
            <label>
                Todo input
                <input type="text" name="todoInput" defaultValue="" />
            </label>
            <button type="submit">Add Todo</button>
        </form>
    );
}
