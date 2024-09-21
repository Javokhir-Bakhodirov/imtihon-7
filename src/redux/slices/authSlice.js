import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem("token", state.token);
        },
        signOut: state => {
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const { signIn, signOut, profile } = authSlice.actions;
export default authSlice.reducer;
