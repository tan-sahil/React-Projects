import { addData } from './apiSlice.js';
export const getResultFromApi = (id) => {
    return async function  (dispatch, getState){
        console.log(id)
      
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(json =>dispatch(addData(json)) )
            
    }
}

