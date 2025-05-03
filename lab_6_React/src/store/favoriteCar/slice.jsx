import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favoriteCar',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const car = state.find(car => car.id === action.payload.id)
            if (!car) state.push(action.payload)
        },
        removeFavorite: (state, action) => {
            return state.filter(car => car.id !== action.payload)
        },
    },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer