import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectTestQuestions } from "../store/features/deck/testSlice";
import TrueFalseQuestion from "../store/features/deck/TrueFalseQuestion";
import MultipleChoiceQuestion from "../store/features/deck/MultipleChoiceQuestion";
import WrittenQuestion from "../store/features/deck/WrittenQuestion";

const TestScreen = () => {
  const testQuestions = useSelector(selectTestQuestions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = () => {
    const question = testQuestions![currentQuestionIndex];
    if (question.questionType === "TRUE_FALSE") {
      const formattedQuestion = question as TrueFalseQuestion;
      return (
        <TrueFalseQuestion
          questionText={formattedQuestion.questionText}
          option={formattedQuestion.option}
          answer={formattedQuestion.answer}
          questionType={formattedQuestion.questionType}
        />
      );
    } else if (question.questionType === "MULTIPLE_CHOICE") {
      const formattedQuestion = question as MultipleChoiceQuestion;
      return (
        <MultipleChoiceQuestion
          questionText={formattedQuestion.questionText}
          options={formattedQuestion.options}
          answer={formattedQuestion.answer}
          questionType={formattedQuestion.questionType}
        />
      );
    } else if (question.questionType === "WRITTEN") {
      const formattedQuestion = question as WrittenQuestion;
      return (
        <WrittenQuestion
          questionText={formattedQuestion.questionText}
          answer={formattedQuestion.answer}
          questionType={formattedQuestion.questionType}
        />
      );
    }
  };
  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <Text>TestScreen</Text>
      <Text>{currentQuestionIndex + 1}/{testQuestions!.length}</Text>
      <View>{currentQuestion()}</View>
      <View className="flex-row">
        <TouchableOpacity
          disabled={currentQuestionIndex <= 0}
          onPress={() => {
            setCurrentQuestionIndex((prev) => prev - 1);
          }}
          className="border px-4 py-1 rounded-md"
        >
          <Text className="text-lg">Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentQuestionIndex >= testQuestions!.length - 1}
          onPress={() => {
            setCurrentQuestionIndex((prev) => prev + 1);
          }}
          className="border px-4 py-1 rounded-md"
        >
          <Text className="text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
