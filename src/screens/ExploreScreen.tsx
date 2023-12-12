import { View, Text, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetSearchQuery } from "../store/features/search/searchSlice";
import SearchDeck from "../store/features/search/SearchDeck";
import SearchUser from "../store/features/search/SearchUser";

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
          <View>
            <Text className="text-lg">Decks</Text>
            <View style={{ rowGap: 5 }}>
              {data?.decks.map((deck) => (
                <SearchDeck key={deck.id} {...deck} />
              ))}
            </View>
          </View>
          <View>
            <Text className="text-lg">Users</Text>
            <View style={{ rowGap: 5 }}>
              {data?.users.map((user) => (
                <SearchUser key={user.id} {...user} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
