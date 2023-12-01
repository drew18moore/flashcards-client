import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import { useGetTestQuestionsMutation } from "../store/features/deck/deckSlice";
import { useDispatch } from "react-redux";
import { setTestQuestions } from "../store/features/deck/testSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TestConfigScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { data: cards } = useGetAllCardsInDeckQuery(id);

  const [numQuestions, setNumQuestions] = useState(
    cards?.length.toString() || "0"
  );
  const [hasTrueFalse, setHasTrueFalse] = useState(true);
  const [hasMultipleChoice, setHasMultipleChoice] = useState(true);
  const [hasWritten, setHasWritten] = useState(true);

  const dispatch = useDispatch();
  const [getTestQuestions] = useGetTestQuestionsMutation();

  const onNumChange = (value: string) => {
    if (value.match(/^([1-9]\d*|)$/)) {
      if (value === "" || parseInt(value) <= cards!.length)
        setNumQuestions(value);
    }
  };

  const onSubmit = async () => {
    try {
      const res = await getTestQuestions({
        deckId: id,
        numQuestions: parseInt(numQuestions),
        multipleChoice: hasMultipleChoice,
        trueFalse: hasTrueFalse,
        written: hasWritten,
      }).unwrap();
      dispatch(setTestQuestions({ questions: res }));

      navigation.replace("test", { id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
      </View>

      <View className="p-5 mt-10">
        <Text className="text-lg font-bold">Set up your test</Text>
      </View>

      <View className="p-5 space-y-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold">Question Count</Text>
            <Text>(Max {cards?.length})</Text>
          </View>
          <TextInput
            inputMode="numeric"
            style={{ fontSize: 18 }}
            onChangeText={onNumChange}
            value={numQuestions}
            autoCapitalize="none"
            className="py-1 w-20 border-b-2 focus:border-b-blue-600"
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-bold">True / False</Text>
          <Switch
            value={hasTrueFalse}
            onValueChange={(value) => setHasTrueFalse(value)}
            trackColor={{ true: "#2563EB" }}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-bold">Multiple Choice</Text>
          <Switch
            value={hasMultipleChoice}
            onValueChange={(value) => setHasMultipleChoice(value)}
            trackColor={{ true: "#2563EB" }}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-bold">Written</Text>
          <Switch
            value={hasWritten}
            onValueChange={(value) => setHasWritten(value)}
            trackColor={{ true: "#2563EB" }}
          />
        </View>
        <TouchableOpacity
          disabled={
            numQuestions === "" ||
            (!hasTrueFalse && !hasMultipleChoice && !hasWritten)
          }
          onPress={onSubmit}
          className={`${
            numQuestions === "" ||
            (!hasTrueFalse && !hasMultipleChoice && !hasWritten)
              ? "bg-gray-400"
              : "bg-blue-600"
          } py-3 rounded-md`}
        >
          <Text className="text-white text-center">Start Test</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestConfigScreen;
