import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// users/add is the action and at the end there will be added 
// users/add/pending    or
// users/add/fulfilled  or
// users/add/rejected   or
// later in my slice i can watch for this as an extraReducer
const addUser = createAsyncThunk('users/add', async ()=>{
    const POST_URL = "http://localhost:3005/users";
    const res = await axios.post(POST_URL,{
        name: faker.person.fullName()// randomly generated
    });

    // returning the array of users, returing the data I want to use in my slice
    // this will be present in the action in the reducer functoin of the extraReducer as payload
    return res.data;
});

export { addUser };