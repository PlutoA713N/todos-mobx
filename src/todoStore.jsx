import { observable, action } from "mobx";

const todoStore = observable({
    todos: [],

    addTodo: action(function(todoText) {
        this.todos.push({text: todoText, completed: false})
    }),

    toggleTodo: action(function(todo) {
        todo.completed = !todo.completed
    }),

    deleteTodo: action(function(todo) {
        this.todos.remove(todo)
    })
})

export default todoStore;
