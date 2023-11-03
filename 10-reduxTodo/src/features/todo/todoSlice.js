// ynha pr reducer bnane hai and unko export krna hai

import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id : 1, text : "Hello World"}]
}
export const todoSlice = createSlice({
    name : "todos",  // helps in chrome redux dev tool me
    initialState,
    reducers: {
        // state keep the knowledge of current state and action keep the values info
        addTodo : (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload,
               
            }
            state.todos.push(todo);
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => (todo.id !== action.payload))
        }, 
        updateTodo: (state, action) =>{
            state.todos = state.todos.map(todo => (
                todo.id === action.payload ? action.payload : todo
            ))
        }
    }
})

export const {addTodo, removeTodo, updateTodo}  = todoSlice.actions

export default todoSlice.reducer