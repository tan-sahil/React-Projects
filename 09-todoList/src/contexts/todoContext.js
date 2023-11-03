import { createContext, useContext } from "react";

const todoContext = createContext({
    todos: [
       {
        id: 1,
        todo: "this is msg",
        completed: false
       }
    ],
    addTodo: (todo) => {},
    updateTodo : (id, todo) => {},
    taskComplete: (id) => {},
    deleteTodo: (id) => {}
})

export default todoContext;

export const TodoContextProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}