import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
   name: 'form',
   initialState: {
    name: '',
    cost: 0,
   },
   reducers: {
    // Assuming the payload will be a string - the name
    changeName(state,action){
        state.name = action.payload;
    },
    // assuimign the payload will be an integer - the cost
    changeCost(state,action){
        state.cost = action.payload;
    },
   },
   extraReducers(builder){
    // we want to add the addCar action to look for
    // and if it happens we set the cost and name back to zero
    // addCar === 'cars/addCar'
    builder.addCase(addCar, (state, action)=>{
        state.name = '';
        state.cost = 0;
    });
   } 
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;