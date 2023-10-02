import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// users/remove is the action and at the end there will be added 
// users/remove/pending    or
// users/remove/fulfilled  or
// users/remove/rejected   or
// later in my slice i can watch for this as an extraReducer
const removeUser = createAsyncThunk('users/remove', async (user) => {
    const DELETE_URL = `http://localhost:3005/users/${user.id}`;
    // const res = await axios.delete(DELETE_URL);
    await axios.delete(DELETE_URL); 

    // returning the array of users, returing the data I want to use in my slice
    // this will be present in the action in the reducer functoin of the extraReducer as payload
    // we return the user that was supose to be deleted
    return user;
});

export { removeUser };
