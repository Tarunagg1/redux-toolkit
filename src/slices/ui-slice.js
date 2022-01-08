import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartDrawerVisible: false
}

const uiSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        toggle: (state) => {
            state.cartDrawerVisible = !state.cartDrawerVisible;
        }
    }
})


export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
