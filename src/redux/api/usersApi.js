import { api } from "./index";

const usersApi = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query({
            query: () => ({
                url: "/api/users?page=2r",
                method: "GET",
            }),
            providesTags: ["USERS"],
        }),
        getSingleUser: build.query({
            query: id => ({
                url: `/api/users/${id}`,
                method: "GET",
            }),
            providesTags: ["USERS"],
        }),
        deleteUser: build.mutation({
            query: id => ({
                url: `/api/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["USERS"],
        }),
        updateUser: build.mutation({
            query: ({ id, ...body }) => ({
                url: `/api/users/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["USERS"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetSingleUserQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
} = usersApi;
