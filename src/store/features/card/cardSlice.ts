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
    newCard: builder.mutation<Card, NewCardRequest>({
      query: (credentials) => ({
        url: "/card",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: [{ type: "Card", id: "LIST" }],
    }),
    editCard: builder.mutation<Card, EditCardRequest>({
      query: ({ cardId, frontText, backText }) => ({
        url: `/card/${cardId}`,
        method: "PATCH",
        body: { frontText, backText },
      }),
      invalidatesTags: [{ type: "Card", id: "LIST" }],
    }),
    deleteCard: builder.mutation<void, number>({
      query: (cardId) => ({
        url: `/card/${cardId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Card", id: "LIST" }]
    }),
  }),
});

export const {
  useGetAllCardsInDeckQuery,
  useNewCardMutation,
  useEditCardMutation,
  useDeleteCardMutation
} = cardApiSlice;
