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
    newDeck: builder.mutation<Deck, NewDeckRequest>({
      query: (credentials) => ({
        url: "/deck",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: [{ type: "Deck", id: "LIST" }],
    }),
    editDeck: builder.mutation<Deck, EditDeckRequest>({
      query: ({ deckId, name, isPrivate }) => ({
        url: `/deck/${deckId}`,
        method: "PATCH",
        body: { name, isPrivate },
      }),
      invalidatesTags: [{ type: "Deck", id: "LIST" }],
    }),
    deleteDeck: builder.mutation<void, number>({
      query: (deckId) => ({
        url: `/deck/${deckId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Deck", id: "LIST" }]
    })
  }),
});

export const { useGetAllDecksQuery, useNewDeckMutation, useEditDeckMutation, useDeleteDeckMutation } =
  deckApiSlice;
