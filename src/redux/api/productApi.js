import { productApi1 } from "./index2";

const productApi = productApi1.injectEndpoints({
    endpoints: build => ({
        productsAll: build.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),
    }),
});

export const { useProductsAllQuery } = productApi;
