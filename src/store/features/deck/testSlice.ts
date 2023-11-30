import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const testSlice = createSlice({
  name: "test",
  initialState: { questions: null as Question[] | null, answers: [] as Answer[] },
  reducers: {
    setTestQuestions: (state, action) => {
      const { questions } = action.payload;
      state.questions = questions;
    },
    submitAnswer: (state, action) => {
      const { questionIndex, response } = action.payload;
      const existingAnswerIndex = state.answers.findIndex((answer) => answer.questionIndex === questionIndex);

      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = { questionIndex, response };
      } else {
        state.answers.push({ questionIndex, response });
      }
    },
  }
})

export const { setTestQuestions, submitAnswer } = testSlice.actions;
export default testSlice.reducer;

export const selectTestQuestions = (state: RootState) => state.test.questions
export const selectTestAnswers = (state: RootState) => state.test.answers;
export const selectAnswerResponseByQuestionId = (questionIndex: number) =>
  createSelector([selectTestAnswers], (answers) =>
    answers.find((answer) => answer.questionIndex === questionIndex)?.response
  );