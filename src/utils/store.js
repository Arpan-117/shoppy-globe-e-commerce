import { configureStore } from '@reduxjs/toolkit';
// import cartSlice from './cartSlice';
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        // items: cartSlice,
        cart: cartReducer,
    },
});

export default store;