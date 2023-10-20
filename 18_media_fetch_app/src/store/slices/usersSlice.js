import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: { 
        data: [], 
        // defines if the userdata is being loaded
        isLoading: false, // this is not used, we are using useState in the component, just for clarification here hwo it could look!!
        // defines if an error occuserd during loading, null===no error, else error === error object
        error: null, // this is not used, we are using useState in the component, just for clarification here hwo it could look!!
    },
    // reducers: {}, // not needed as the slice does not use reducers just watches for extraReducers
    extraReducers(builder){
        // fetching users
        // this are the actions defined/created in the fetchUsers
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update our state object to show the user the data is being loaded
            state.isLoading = true; 
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Update our state object to show the user the data has beed loaded sucesfull
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            // Update our state object to show the user that there was an error
            state.isLoading = false;
            // action error will have the specific error object
            state.error = action.error;
        });
        // adding users
        builder.addCase(addUser.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            // adding the added user to our data
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action)=>{
            state.isLoading = false;
            // saving the error object
            state.error = action.error;
        });
        // remove user
        builder.addCase(removeUser.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = state.data.filter((user)=>{
                // beacuse the payload is the user object
                return user.id !== action.payload.id; 
            });

        });
        builder.addCase(removeUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;
