import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import todoStore from "./todoStore";


const App = () => {

 const handleAddTodo = (text) => {
    console.log( '3', text)
    todoStore.addTodo(text)
 }

    return(
    <>
        <AddTodo onAdd={handleAddTodo} />
        <TodoList todoStore={todoStore} />
    </>)
}

export default App;