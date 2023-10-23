import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials }
      })
    }),
    getUserFromToken: builder.query<AuthResponse, any>({
      query: () => "/auth/persist"
    })
  })
})

export const {
  useLoginMutation,
  useGetUserFromTokenQuery
} = authApiSlice