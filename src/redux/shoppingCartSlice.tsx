import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartState{
    shoppingCart: any[]
}

const initialState: ShoppingCartState ={
    shoppingCart:[]
}

export const shoppingCartlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addItem: (state, action) => {
            if(state.shoppingCart.some(item=> item.id === action.payload.id)){
                    state.shoppingCart.forEach(item=>{
                        if(item.id === action.payload.id){
                            item.amount = item.amount + action.payload.amount
                        }
                    })
                return
            }
            state.shoppingCart = [...state.shoppingCart, action.payload]
        },
        removeItem: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload.id)
        },
        removeAll: (state) => {
            state.shoppingCart = []
        }
    },
});

export const { addItem, removeItem, removeAll } = shoppingCartlice.actions;

export const selectCart= (state: any) => state.shoppingCart.shoppingCart;

export default shoppingCartlice.reducer;