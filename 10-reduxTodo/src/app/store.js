// making store here need is store config

import {configureStore} from '@reduxjs/toolkit'
import  todoReducer  from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
});