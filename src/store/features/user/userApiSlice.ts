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
  }),
});

export const { useEditUserMutation } = userApiSlice;
