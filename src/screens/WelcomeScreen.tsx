import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

const WelcomeScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className="flex-1">
      <View className="px-8 py-2 justify-between flex-1">
        <Text className="text-2xl font-bold">Flashcards</Text>
        <View className="space-y-4 mb-4">
          <TouchableOpacity className="border bg-blue-600 border-blue-600 p-4 rounded-md">
            <Text className="text-white/90 text-lg text-center">Sign up for free</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")} className="border p-4 rounded-md">
            <Text className="text-lg text-center">Or log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
