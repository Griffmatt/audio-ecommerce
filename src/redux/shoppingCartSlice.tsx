import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartState{
    shoppingCart: any[]
}

const initialState: ShoppingCartState ={
    shoppingCart:[]
}

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
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
        },
        incrementAmount: (state, action) => {
            state.shoppingCart.forEach(item=>{
                if(item.id === action.payload.id){
                    item.amount++
                }
            })
        },
        decrementAmount: (state, action) => {
            state.shoppingCart.forEach(item=>{
                if(item.id === action.payload.id){
                    item.amount--
                }
            })
        }

    },
});

export const { addItem, removeItem, removeAll, incrementAmount, decrementAmount } = shoppingCartSlice.actions;

export const selectCart= (state: any) => state.shoppingCart.shoppingCart;

export default shoppingCartSlice.reducer;