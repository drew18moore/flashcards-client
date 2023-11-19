import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";


const initialState = {
  flashcards: {
    isFrontOrientation: true
  }
}

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setFlashcardsOptions: (state, action) => {
      const { isFrontOrientation } = action.payload
      state.flashcards.isFrontOrientation = isFrontOrientation
    }
  }
})

export const { setFlashcardsOptions } = optionsSlice.actions;
export default optionsSlice.reducer;

export const selectFlashcardsOptions = (state: RootState) => state.options.flashcards;