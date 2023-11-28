import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MultipleChoiceQuestion = ({
  questionText,
  options,
  answer,
}: MultipleChoiceQuestion) => {
  return (
    <View className="flex-1">
      <View className="border p-2 rounded-md h-1/2 justify-center items-center">
        <Text className="text-lg">{questionText}</Text>
      </View>
      <View className="flex-1 space-y-2 justify-center">
        {options.map((option, i) => (
          <TouchableOpacity className="border p-2 rounded-md">
            <Text key={i} className="text-lg">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MultipleChoiceQuestion;
