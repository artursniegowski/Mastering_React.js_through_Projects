import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// users/fetch is the action and at the end there will be added 
// users/fetch/pending    or
// users/fetch/fulfilled  or
// users/fetch/rejected   or
// later in my slice i can watch for this as an extraReducer
const fetchUsers = createAsyncThunk('users/fetch', async () => { 
    // here comes the request logic  
    // fetching the users and alter returing them
    const GET_URL = "http://localhost:3005/users";
    const res = await axios.get(GET_URL);
    
    // TODO: clean after development done
    // just for test waiting 1 sec!!!
    await pause(1000);
    
    // returning the array of users, returing the data I want to use in my slice
    // this will be present in the action in the reducer functoin of the extraReducer as payload
    return res.data;
});

// TODO: clean after development done
// DEV ONLY !!
// this will add delay of duration in miliseconds
// just for testing
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };
