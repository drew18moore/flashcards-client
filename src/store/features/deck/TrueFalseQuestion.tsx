import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswerResponseByQuestionId, submitAnswer } from "./testSlice";

const TrueFalseQuestion = ({
  index,
  questionText,
  option,
  answer,
}: TrueFalseQuestion & { index: number }) => {
  const dispatch = useDispatch();
  const response = useSelector(selectAnswerResponseByQuestionId(index));
  return (
    <View className="flex-1">
      <View className="border p-2 rounded-md h-1/2 justify-center">
        <Text className="text-lg text-center">{questionText}</Text>
        <View className="border-b-[1px]" />
        <Text className="text-lg text-center">{option}</Text>
      </View>
      <View className="flex-1 space-y-2 justify-center">
        <TouchableOpacity
          onPress={() => dispatch(submitAnswer({ questionIndex: index, response: true }))}
          className={`border px-2 py-4 rounded-md ${
            response ? "border-blue-600" : ""
          }`}
        >
          <Text className={`text-lg ${response ? "text-blue-600" : ""}`}>
            True
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(submitAnswer({ questionIndex: index, response: false }))}
          className={`border p-2 py-4 rounded-md ${
            response === false ? "border-blue-600" : ""
          }`}
        >
          <Text
            className={`text-lg ${response === false ? "text-blue-600" : ""}`}
          >
            False
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrueFalseQuestion;
