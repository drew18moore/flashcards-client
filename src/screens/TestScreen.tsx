import { View, Text, Platform, TouchableOpacity, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectTestAnswers, selectTestQuestions } from "../store/features/deck/testSlice";
import TrueFalseQuestion from "../store/features/deck/TrueFalseQuestion";
import MultipleChoiceQuestion from "../store/features/deck/MultipleChoiceQuestion";
import WrittenQuestion from "../store/features/deck/WrittenQuestion";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TestScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const testQuestions = useSelector(selectTestQuestions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const currentQuestion = () => {
    const question = testQuestions![currentQuestionIndex];
    if (question.questionType === "TRUE_FALSE") {
      const formattedQuestion = question as TrueFalseQuestion;
      return (
        <TrueFalseQuestion
          index={currentQuestionIndex}
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
          index={currentQuestionIndex}
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
          index={currentQuestionIndex}
          questionText={formattedQuestion.questionText}
          answer={formattedQuestion.answer}
          questionType={formattedQuestion.questionType}
        />
      );
    }
  };
  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6 flex-1" : "flex-1"}>
      <View className="relative">
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          className="self-start mx-3 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="absolute top-0 py-[6px] w-full text-center text-lg">
          {currentQuestionIndex + 1}/{testQuestions!.length}
        </Text>
      </View>

      <View className="p-6 mt-10 flex-1 space-y-2">
        <View className="flex-1">{currentQuestion()}</View>
        <View className="flex-row justify-between space-x-4">
          <TouchableOpacity
            disabled={currentQuestionIndex <= 0}
            onPress={() => {
              setCurrentQuestionIndex((prev) => prev - 1);
            }}
            className={`border py-3 rounded-md flex-1 ${currentQuestionIndex === 0 ? "border-gray-400" : ""}`}
          >
            <Text className={`text-lg text-center ${currentQuestionIndex === 0 ? "text-gray-400" : ""}`}>Prev</Text>
          </TouchableOpacity>
          {currentQuestionIndex >= testQuestions!.length - 1 ? (
            <TouchableOpacity
            onPress={() => {
              navigation.replace("test-submit", { id })
            }}
            className="border py-3 rounded-md flex-1 bg-blue-600 border-blue-600"
          >
            <Text className="text-lg text-center text-white">Submit</Text>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity
            disabled={currentQuestionIndex >= testQuestions!.length - 1}
            onPress={() => {
              setCurrentQuestionIndex((prev) => prev + 1);
            }}
            className="border py-3 rounded-md flex-1"
          >
            <Text className="text-lg text-center">Next</Text>
          </TouchableOpacity>
          ) }
          
        </View>
      </View>
      <Modal transparent visible={showModal} animationType="slide">
        <View className="flex-1 justify-center items-center">
          <Pressable
            className="absolute top-0 bottom-0 left-0 right-0"
            onPress={() => setShowModal(false)}
          />
          <View className="bg-white rounded-md p-5 space-y-4 border m-1">
            <Text className="text-center">
              Are you sure you want to end this test? Your progress will not be saved.
            </Text>
            <View className="flex-row items-center justify-center space-x-4">
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                className="border rounded-md flex-1 py-2"
              >
                <Text className="text-lg text-center">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                className="border rounded-md flex-1 py-2 border-blue-600 bg-blue-600"
              >
                <Text className="text-white text-lg text-center">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TestScreen;
