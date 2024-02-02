import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number
};

type CartState = {
    items: CartItem[]
};

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { // the action will need some extra data, so its of type payloadaction
        addToCart(state, action: PayloadAction<{ id: string; title: string; price: number }> ) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0) {
                state.items[itemIndex].quantity++ // directly updating the state, should not to when using useReducers, but is allowed with redux toolkit
            } else {
                // the item here is the item we have in the payload, and payload does not have an quantity
                // so we manually add it, because the cart item has the quantity property
                state.items.push({...action.payload, quantity: 1}); // set quantity to 1, because its the first time its added
            }
        }, // the action will need some extra data, so its of type payloadaction
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload); // since id is a string, we dont need to specify it, the whole payload is the id

            if(state.items[itemIndex].quantity === 1) {
                // itemIndex is the item that should be removed, 1 is the amount of items to remove
                state.items.splice(itemIndex, 1);
            } else {
                // if the quantity is more than 1, we remove one by incrementing 
                state.items[itemIndex].quantity--;
            }
        }
    }
}); // configuring the slice

export const {addToCart, removeFromCart} = cartSlice.actions // dispatching actions