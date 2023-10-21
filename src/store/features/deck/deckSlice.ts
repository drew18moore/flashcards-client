import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const deckSlice = createSlice({
  name: "deck",
  initialState: { decks: null },
  reducers: {},
});

export const selectAllDecks = (state: RootState) => state.deck.decks;
export default deckSlice.reducer;
