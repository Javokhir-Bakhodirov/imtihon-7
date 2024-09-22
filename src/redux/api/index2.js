import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
    const { dispatch } = api;
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
        prepareHeaders: headers => {
            const token2 = localStorage.getItem("token2");
            if (token2) {
                headers.set("Authorization", `Bearer ${token2}`);
            }
            return headers;
        },
    });

    const response = await rawBaseQuery(args, api, extraOptions);

    return response;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const productApi1 = createApi({
    reducerPath: "productApi1",
    baseQuery: baseQueryWithRetry,
    tagTypes: ["PRODUCT"],
    endpoints: () => ({}),
});
