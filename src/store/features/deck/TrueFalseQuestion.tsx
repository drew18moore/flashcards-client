import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TrueFalseQuestion = ({
  questionText,
  option,
  answer,
}: TrueFalseQuestion) => {
  return (
    <View className="flex-1">
      <View className="border p-2 rounded-md h-1/2 justify-center">
        <Text className="text-lg text-center">{questionText}</Text>
        <View className="border-b-[1px]" />
        <Text className="text-lg text-center">{option}</Text>
      </View>
      <View className="flex-1 space-y-2 justify-center">
        <TouchableOpacity className="border px-2 py-4 rounded-md">
          <Text className="text-lg">True</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border p-2 py-4 rounded-md">
          <Text className="text-lg">False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrueFalseQuestion;
