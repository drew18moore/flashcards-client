import { View, Text } from "react-native";
import React from "react";

const TrueFalseQuestion = ({
  questionText,
  option,
  answer,
}: TrueFalseQuestion) => {
  return (
    <View>
      <Text>TrueFalseQuestion</Text>
      <Text>{questionText}</Text>
      <Text>{option}</Text>
    </View>
  );
};

export default TrueFalseQuestion;
