import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswerResponseByQuestionId, submitAnswer } from "./testSlice";

const MultipleChoiceQuestion = ({
  index,
  questionText,
  options,
  answer,
}: MultipleChoiceQuestion & { index: number }) => {
  const dispatch = useDispatch();
  const response = useSelector(selectAnswerResponseByQuestionId(index));
  return (
    <View className="flex-1">
      <View className="border p-2 rounded-md h-1/2 justify-center items-center">
        <Text className="text-lg">{questionText}</Text>
      </View>
      <View className="flex-1 space-y-2 justify-center">
        {options.map((option, i) => (
          <TouchableOpacity onPress={() => dispatch(submitAnswer({ questionIndex: index, response: i }))} key={i} className={`border px-2 py-2 rounded-md ${response === i ? "border-blue-600" : ""}`}>
            <Text className={`text-lg ${response === i ? "text-blue-600" : ""}`}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MultipleChoiceQuestion;
