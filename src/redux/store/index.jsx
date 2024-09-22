import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/";
import { productApi1 } from "../api/index2";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
        [productApi1.reducerPath]: productApi1.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(productApi1.middleware),
});
