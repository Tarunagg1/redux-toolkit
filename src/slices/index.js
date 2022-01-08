import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart.slice';
import productReducer from './product.slice';
import uiReducer from './ui-slice';


const Store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        ui: uiReducer
    }
});

export default Store;