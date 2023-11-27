import { View, Text } from "react-native";
import React from "react";

const MultipleChoiceQuestion = ({
  questionText,
  options,
  answer,
}: MultipleChoiceQuestion) => {
  return (
    <View>
      <Text>MultipleChoiceQuestion</Text>
      <Text>{questionText}</Text>
      <View>
        {options.map((option, i) => (
          <Text key={i}>{option}</Text>
        ))}
      </View>
    </View>
  );
};

export default MultipleChoiceQuestion;
