import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetAllDecksQuery } from "../store/features/deck/deckSlice";

const DeckScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const { data: decks } = useGetAllDecksQuery();
  const deck = decks?.filter((deck) => deck.id === id)[0];
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2"
        >
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          className="self-start mx-3 p-2"
        >
          <MaterialCommunityIcons name="dots-vertical" size={25} />
        </TouchableOpacity>
      </View>

      <View className="mx-6 mt-2">
        <Text className="text-lg font-bold">{deck?.name}</Text>
        <Text className="">{deck?.numCards} cards</Text>
      </View>
    </SafeAreaView>
  );
};

export default DeckScreen;
