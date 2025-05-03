import { configureStore } from "@reduxjs/toolkit";
import favoriteCarReducer from './favoriteCar/slice'

const store = configureStore({
    reducer: {
        favoriteCar: favoriteCarReducer,
    },
})

export default store;