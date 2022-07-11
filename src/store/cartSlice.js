import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    cartGoods: [],
    totalQuantity: 0,
    totalAmount: 0,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const isExistItem = state.cartGoods.find(item => item.articul === payload.articul);

            if (!isExistItem) {
                state.cartGoods = [...state.cartGoods, { ...payload, quantity: 1, price: payload.cost }]
            } else {
                state.cartGoods = state.cartGoods.map(item => {
                    if (item.articul === payload.articul) {
                        return { ...item, quantity: item.quantity + 1, price: item.price += payload.cost }
                    } else {
                        return item;
                    }
                })
            }
            state.totalQuantity++;
            state.totalAmount += payload.cost
        },
        removeFromCart: (state, { payload }) => {
            state.cartGoods = state.cartGoods.filter(item => item.articul !== payload.articul);

            state.totalQuantity -= payload.quantity;
            state.totalAmount -= payload.price;
        },
        addItemQuantity: (state, { payload }) => {
            state.cartGoods = state.cartGoods.map(item => {
                if (item.articul === payload.articul) {
                    return { ...item, quantity: item.quantity + 1, price: item.price += payload.cost }
                } else {
                    return item;
                }
            })

            state.totalQuantity++;
            state.totalAmount += payload.cost;
        },
        subtractItemQuantity: (state, { payload }) => {
            const subItem = state.cartGoods.find(item => item.articul === payload.articul);

            if (subItem.quantity === 1) {
                state.cartGoods = state.cartGoods.filter(item => item.articul !== subItem.articul);
            } else {
                subItem.quantity -= 1;
                subItem.price -= subItem.cost;
            }
            state.totalQuantity--;
            state.totalAmount -= subItem.cost;
        }
    }
});

export const { addToCart, removeFromCart, addItemQuantity, subtractItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;