import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.loading = true;
            const { id } = payload;
            const isItemExists = state.cart.find((item) => item.id === id);

            if (isItemExists) {
                let dataNew = state.cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item;
                })
                state.cart = dataNew;
            } else {
                state.cart.push({ ...payload, quantity: 1 });
            }
        },
        removeCart: (state, { payload }) => {
            const { id } = payload;
            console.log(id);
        },

        increment: (state, { payload }) => {
            const { id } = payload;
            return state.cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        },
        decrement: (state, { payload }) => {
            const { id } = payload;
            return state.cart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        },

        clear: (state) => {
            state.cart = [];
        },
    }
})




export const { addToCart, removeCart, increment, decrement, clear } = cartSlice.actions;

export default cartSlice.reducer;
