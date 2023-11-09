import { apiSlice } from "../../api/apiSlice";

export const cardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCardsInDeck: builder.query<Card[], number>({
      query: (deckId) => `/deck/${deckId}/cards`,
      providesTags: (result) =>
        result
          ? [
              { type: "Card", id: "LIST" },
              ...result.map(({ id }) => ({
                type: "Card" as const,
                id,
              })),
            ]
          : [{ type: "Card", id: "LIST" }],
    }),
  }),
});

export const { useGetAllCardsInDeckQuery } = cardApiSlice;