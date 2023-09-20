import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const  songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload); // we can change the ste directly bc reduxjs uses immer library!
        },
        removeSong(state, action){
            // state.pop(action.payload);
            const index = state.indexOf(action.payload);
            // removing only one element from the index 
            // we can do that bc reduxjs uses the immer library
            state.splice(index, 1);
        },
    },
    extraReducers(builder) { // this is how we can watch for additional action types like movie/reset
        // // we are passing the 'movie/reset' as a string to watch for this action
        // builder.addCase(moviesSlice.actions.reset, (state, action) => { // mini reducer
        //     return []; // setting the song to emty array like in the movies
        // });
        builder.addCase(reset, (state,action) => {
            return [];
        });
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
