import { observable, action } from "mobx";

const todoStore = observable({
    todos: [],

    addTodo: action((todoText) => {
        this.todos.push({text: todoText, completed: false})
    }),

    toggleTodo: action((todo) => {
        todo.completed = !todo.completed
    }),

    deleteTodo: action((todo) => {
        this.todos.remove(todo)
    })
})

export default todoStore