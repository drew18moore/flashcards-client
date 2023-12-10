import { apiSlice } from "../../api/apiSlice";

export const searchSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query<Search, { query: string }>({
      query: ({ query }) => ({
        url: "/search",
        params: { query },
      }),
    }),
  }),
});

export const { useGetSearchQuery } = searchSlice;