import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //the payload will have the name and the cost of the car that we want to add - assumtion for this to work
            // action.payload === { name: 'ab', cots: 140}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                // creating random unique id
                id: nanoid()
            });
        },
        removeCar(state, action){
            // Assumtion action.payload === the id of the car we want to remove
            const updated = state.data.filter((car)=>{
                return car.id !== action.payload;
            });
            state.data = updated;
        },
    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;