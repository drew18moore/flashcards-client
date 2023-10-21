import { apiSlice } from "../../api/apiSlice";

export const deckApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDecks: builder.query<Deck[], void>({
      query: () => "/deck",
      providesTags: (result) =>
        result
          ? [
              { type: "Deck", id: "LIST" },
              ...result.map(({ id }) => ({
                type: "Deck" as const,
                id,
              })),
            ]
          : [{ type: "Deck", id: "LIST" }],
    }),
  }),
});

export const { useGetAllDecksQuery } = deckApiSlice;
