import { View, Text, Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetSearchQuery } from "../store/features/search/searchSlice";
import SearchDeck from "../store/features/search/SearchDeck";
import SearchUser from "../store/features/search/SearchUser";
import useDebounce from "../hooks/useDebounce";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";

const ExploreScreen = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  const { data, isLoading, error } = useGetSearchQuery(
    { query: debouncedQuery },
    { skip: debouncedQuery.trim() === "" }
  );
  const currUser = useSelector(selectCurrentUser);

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View className="px-6">
        <View className="relative bg-white rounded-full">
          <View className="absolute top-0 bottom-0 aspect-square items-center justify-center">
            <MaterialCommunityIcons name="magnify" size={30} color="gray" />
          </View>
          <TextInput
            style={{ fontSize: 18 }}
            autoCapitalize="none"
            className="border-2 border-gray-300 p-3 rounded-full px-[42px]"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <TouchableOpacity onPress={() => setQuery("")} className={`absolute top-0 bottom-0 right-0 aspect-square items-center justify-center ${query.trim() === "" ? "hidden" : ""}`}>
            <MaterialCommunityIcons name="close" size={30} color="gray" />
          </TouchableOpacity>
        </View>
        <ScrollView className="h-full">
          {debouncedQuery.trim() !== "" && data?.decks.length === 0 && data.users.length === 0 && (
            <Text>No results found</Text>
          )}
          {debouncedQuery.trim() !== "" && data?.decks.length !== undefined && data.decks.length > 0 && (
            <View>
              <Text className="text-lg">Decks</Text>
              <View style={{ rowGap: 5 }}>
                {data?.decks.map((deck) => (
                  <SearchDeck key={deck.id} {...deck} />
                ))}
              </View>
            </View>
          )}
          {debouncedQuery.trim() !== "" && data?.users.length !== undefined && data.users.length > 0 && (
            <View>
              <Text className="text-lg">Users</Text>
              <View style={{ rowGap: 5 }}>
                {data?.users.map((user) => (
                  <SearchUser key={user.id} {...user} isCurrentUser={user.id === currUser?.id} />
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
