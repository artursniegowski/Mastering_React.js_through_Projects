import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload); // we can change the ste directly bc reduxjs uses immer library!
        },
        removeMovie(state, action){
            // state.pop(action.payload);
            const index = state.indexOf(action.payload);
            // removing only one element from the index 
            // we can do that bc reduxjs uses the immer library
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state,action) => {
            return [];
        });
    }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer; // documentation recomendation
// export default moviesSlice.reducer; // documentation recomendation