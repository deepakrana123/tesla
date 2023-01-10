import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cars: ["Model S" ,
            "Model B" ,
            "Model X",
            "Model Y"  
    ]
}


const carSlice=createSlice({
    name:"car",
    initialState,
    reducers:{}
})


export const selectCars = state => state.car.cars;


export default carSlice.reducer;