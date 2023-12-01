import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import {
  selectTestAnswers,
  selectTestQuestions,
} from "../store/features/deck/testSlice";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TestSubmitScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const questions = useSelector(selectTestQuestions);
  const answers = useSelector(selectTestAnswers);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState<number>();

  useEffect(() => {
    let correctAnswers = 0;
    for (let i in questions!) {
      if (questions[i].questionType === "TRUE_FALSE") {
        const question = questions[i] as TrueFalseQuestion;
        if (answers[i] && question.answer === answers[i].response)
          correctAnswers++;
      } else if (questions[i].questionType === "MULTIPLE_CHOICE") {
        const question = questions[i] as MultipleChoiceQuestion;
        if (answers[i] && question.answer === answers[i].response)
          correctAnswers++;
      } else if (questions[i].questionType === "WRITTEN") {
        const question = questions[i] as WrittenQuestion;
        if (answers[i]) {
          const response = answers[i].response as string;
          if (
            question.answer.trim().toLowerCase() ===
            response.trim().toLowerCase()
          )
            correctAnswers++;
        }
      }
    }
    setNumCorrectAnswers(correctAnswers);
  }, []);

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : "flex-1"}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 "
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
      </View>
      <View className="px-5">
        <View>
          <Text className="text-lg font-bold">Your results</Text>
          <View className="flex-row items-center space-x-4 py-4">
            <Text className="text-3xl font-bold p-2">
              {(numCorrectAnswers! / questions!.length) * 100}%
            </Text>
            <View className="flex-1 space-y-2">
              <View className="flex-row items-center justify-between">
                <Text className="font-bold text-green-700">Correct</Text>
                <View className="border border-green-700 rounded-full h-5 w-5 items-center justify-center">
                  <Text className="font-bold text-green-700">
                    {numCorrectAnswers}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="font-bold text-red-700">Incorrect</Text>
                <View className="border border-red-700 rounded-full h-5 w-5 items-center justify-center">
                  <Text className="font-bold text-red-700">
                    {questions!.length - numCorrectAnswers!}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="space-y-1">
          <Text className="text-lg font-bold">Next steps</Text>
          <View className="space-y-2">
            <TouchableOpacity
              onPress={() => {
                navigation.replace("test-config", { id })
              }}
              className="border items-center rounded-md bg-blue-600 border-blue-600 py-3"
            >
              <View className="flex-row items-center space-x-3">
                <MaterialCommunityIcons
                  name="file-document-multiple"
                  size={25}
                  color="#fff"
                />
                <Text className="font-bold text-white">Take a new test</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.replace("flashcards", { id })
              }}
              className="border items-center rounded-md py-3"
            >
              <View className="flex-row items-center space-x-3">
                <MaterialCommunityIcons
                  name="card-multiple"
                  size={25}
                  color="#2563EB"
                />
                <Text className="font-bold">Study flashcards</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestSubmitScreen;
