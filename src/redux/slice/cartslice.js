import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        updateQuantity:(state,action)=>{
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
        ,
        emptyCart:()=>{
            return []
        }
    }
})

export const {addToCart,removeFromCart,emptyCart,updateQuantity}=cartslice.actions
export default cartslice.reducer