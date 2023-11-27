import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const testSlice = createSlice({
  name: "test",
  initialState: { questions: null as Question[] | null },
  reducers: {
    setTestQuestions: (state, action) => {
      const { questions } = action.payload;
      state.questions = questions;
    }
  }
})

export const { setTestQuestions } = testSlice.actions;
export default testSlice.reducer;

export const selectTestQuestions = (state: RootState) => state.test.questions