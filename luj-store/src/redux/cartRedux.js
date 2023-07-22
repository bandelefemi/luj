import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        showCart: false
    },
    reducers: {
        addProducts: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price
        },
        toggleCart: (state, action) => {
            state.showCart = action.payload.showCart
        }
    }
})

export const {addProducts, toggleCart} = cartSlice.actions

export default cartSlice.reducer