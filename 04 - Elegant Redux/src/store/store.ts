import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
}); // tells redux how to set up the store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch; // the type of the value