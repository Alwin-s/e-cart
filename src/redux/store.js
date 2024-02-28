import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slice/wishlistslice";
import cartslice from "./slice/cartslice";

const store =configureStore({
    reducer:{
        wishlistReducer:wishlistslice,
        cartReducer:cartslice
    }
})
export default store;