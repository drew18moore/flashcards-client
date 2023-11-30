import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

const WrittenQuestion = ({
  index,
  questionText,
  answer,
}: WrittenQuestion & { index: number }) => {
  const [value, setValue] = useState("");
  return (
    <View className="flex-1">
      <View className="border p-2 rounded-md h-1/2 justify-center items-center">
        <Text className="text-lg">{questionText}</Text>
      </View>
      <View className="flex-1 justify-center">
        <TextInput
          style={{ fontSize: 18 }}
          onChangeText={(text) => setValue(text)}
          value={value}
          autoCapitalize="none"
          placeholder="Enter the answer"
          className="py-1 px-2 border-b-2 focus:border-b-blue-600"
        />
      </View>
    </View>
  );
};

export default WrittenQuestion;
