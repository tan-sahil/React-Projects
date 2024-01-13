import  {configureStore} from'@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import apiReducers from "../feature/apiSlice.js"

 export const store = configureStore({
    reducer : apiReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
 })