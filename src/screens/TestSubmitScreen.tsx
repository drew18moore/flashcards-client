import { View, Text, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import {
  selectTestAnswers,
  selectTestQuestions,
} from "../store/features/deck/testSlice";

const TestSubmitScreen = () => {
  const questions = useSelector(selectTestQuestions);
  const answers = useSelector(selectTestAnswers);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState<number>();

  useEffect(() => {
    let correctAnswers = 0;
    for (let i in questions!) {
      if (questions[i].questionType === "TRUE_FALSE") {
        const question = questions[i] as TrueFalseQuestion;
        if (question.answer === answers[i].response) correctAnswers++;
      } else if (questions[i].questionType === "MULTIPLE_CHOICE") {
        const question = questions[i] as MultipleChoiceQuestion;
        if (question.answer === answers[i].response) correctAnswers++;
      } else if (questions[i].questionType === "WRITTEN") {
        const question = questions[i] as WrittenQuestion;
        if (question.answer === answers[i].response) correctAnswers++;
      }
    }
    setNumCorrectAnswers(correctAnswers);
  }, []);

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : "flex-1"}>
      <Text>TestSubmitScreen</Text>
      <Text>{(numCorrectAnswers! / questions!.length) * 100}%</Text>
    </SafeAreaView>
  );
};

export default TestSubmitScreen;
