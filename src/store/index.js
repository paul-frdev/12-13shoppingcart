import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import goodsSlice from './goodsSlice';

export default configureStore({
    reducer: {
        goods: goodsSlice,
        cart: cartSlice
    },
});