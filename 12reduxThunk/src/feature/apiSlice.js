import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    data :  {}
};

export const  apiSlice = createSlice( {
    name: 'apiKey',
    initialState,
    reducers : {
        addData : (state, actions) => {
            state.data = actions.payload
        }
    }
})

export const {addData} = apiSlice.actions;
export default apiSlice.reducer;