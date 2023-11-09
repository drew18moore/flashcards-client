import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetAllDecksQuery } from "../store/features/deck/deckSlice";
import DeckPopupMenu from "../components/DeckPopupMenu";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import Card from "../store/features/card/Card";

const DeckScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const { data: decks } = useGetAllDecksQuery();
  const deck = decks?.filter((deck) => deck.id === id)[0];

  const { data: cards } = useGetAllCardsInDeckQuery(id);

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
        <DeckPopupMenu id={id} />
      </View>
      <ScrollView className="h-full">
        <View className="mx-6 mt-2">
          <Text className="text-lg font-bold">{deck?.name}</Text>
          <Text className="">
            {deck?.numCards === 1
              ? `${deck?.numCards} card`
              : `${deck?.numCards} cards`}
          </Text>
          <View className="mt-8 space-y-1">
            <Text className="font-bold">Cards</Text>
            <View>
              {cards?.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  userId={card.userId}
                  deckId={card.deckId}
                  frontText={card.frontText}
                  backText={card.backText}
                  createdAt={card.createdAt}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeckScreen;
