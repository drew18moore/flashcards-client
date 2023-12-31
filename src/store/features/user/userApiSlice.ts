import { apiSlice } from "../../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    editUser: builder.mutation<User, EditUserRequest>({
      query: ({ userId, displayName, username }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        body: { displayName, username },
      }),
    }),
    getUserProfile: builder.query<User, { userId: number }>({
      query: ({ userId }) => ({
        url: `/user/${userId}`,
        method: "GET"
      }),
    }),
  }),
});

export const { useEditUserMutation, useGetUserProfileQuery } = userApiSlice;
