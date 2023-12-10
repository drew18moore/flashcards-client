import { View, Text, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetSearchQuery } from "../store/features/search/searchSlice";

const ExploreScreen = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useGetSearchQuery(
    { query },
    { skip: query.trim() === "" }
  );
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
            onSubmitEditing={({ nativeEvent }) => setQuery(nativeEvent.text)}
          />
        </View>
        <ScrollView className="h-full">
          <Text>{JSON.stringify(data)}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
