import { api } from "./index";

const authApi = api.injectEndpoints({
    endpoints: build => ({
        signUp: build.mutation({
            query: body => ({
                url: "/api/register",
                method: "POST",
                body,
            }),
        }),
        signIn: build.mutation({
            query: body => ({
                url: "/api/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
