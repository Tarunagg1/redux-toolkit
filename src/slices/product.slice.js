import { createSlice } from '@reduxjs/toolkit';
import _products from '../Data/product';

const initialState = {
    loading: false,
    list: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        startFetch: (state) => {
            state.loading = true;
        },
        save: (state, action) => {
            const { payload } = action;
            state.list = payload;
            state.loading = false;
        },
    }
})

export const { startFetch, save } = productSlice.actions;

export const fetchAsyncProduct = () => {
    return async dispatch => {
        dispatch(save([]))
        dispatch(startFetch())

        const products = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(_products);
            },1000);
        })
        dispatch(save(products))
    }
}


const productReducer = productSlice.reducer;

export default productReducer;
