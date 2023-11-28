import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectTestQuestions } from "../store/features/deck/testSlice";
import TrueFalseQuestion from "../store/features/deck/TrueFalseQuestion";
import MultipleChoiceQuestion from "../store/features/deck/MultipleChoiceQuestion";
import WrittenQuestion from "../store/features/deck/WrittenQuestion";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
      <View className="bg-red-500 relative">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="absolute top-0 py-[6px] w-full text-center text-lg">
          {currentQuestionIndex + 1}/{testQuestions!.length}
        </Text>
      </View>

      <View className="p-5 mt-10">
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
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
