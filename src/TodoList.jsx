import React from "react";
import { observer } from "mobx-react";
import todoStore from "./todoStore";

const TodoList = observer(({todoStore}) => {
    return(
        <>
            <h1>To-Do List</h1>
            <ul>
                {todoStore.todos.map(todo => (
                    <li
                    key={todo.text}>
                        <input 
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => todoStore.toggleTodo(todo)} />

                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </span>

                <button onClick={() => todoStore.deleteTodo(todo)}>Delete</button>
                </li>
                ))}
              

            </ul>
        </>
    )
})

export default TodoList