import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ExploreScreen = () => {
  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View className="px-4">
        <View className="relative">
          <View className="absolute top-0 bottom-0 aspect-square items-center justify-center">
            <MaterialCommunityIcons name="magnify" size={30} />
          </View>
          <TextInput
            style={{ fontSize: 18 }}
            autoCapitalize="none"
            className="border p-3 rounded-md pl-[42px]"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
