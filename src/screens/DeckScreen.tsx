import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetAllDecksQuery } from "../store/features/deck/deckSlice";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import Card from "../store/features/card/Card";
import FloatingPlusButton from "../components/FloatingPlusButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import DeckBottomSheet from "../components/DeckBottomSheet";
import CardBottomSheet from "../components/CardBottomSheet";

const DeckScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const { data: decks } = useGetAllDecksQuery();
  const deck = decks?.filter((deck) => deck.id === id)[0];

  const { data: cards } = useGetAllCardsInDeckQuery(id);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [open, setOpen] = useState(false);
  const [openCardBottomSheet, setOpenCardBottomSheet] = useState(false);
  const [cardId, setCardId] = useState<number>(-1);

  return (
    <SafeAreaView>
      <View className="absolute z-10 bottom-20 right-6">
        <FloatingPlusButton onPress={() => navigation.navigate("new-card", { id })} />
      </View>
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2"
        >
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
        className="self-start mx-3 p-2"
        onPress={() => setOpen(prev => !prev)}
      >
        <MaterialCommunityIcons name="dots-vertical" size={25} />
      </TouchableOpacity>
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
            <View style={{ rowGap: 5, paddingBottom: 60 }}>
              {cards?.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  userId={card.userId}
                  deckId={card.deckId}
                  frontText={card.frontText}
                  backText={card.backText}
                  createdAt={card.createdAt}
                  setOpenCardBottomSheet={setOpenCardBottomSheet}
                  setCardId={setCardId}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <DeckBottomSheet id={id} open={open} setOpen={setOpen} />
      <CardBottomSheet id={cardId} deckId={id} open={openCardBottomSheet} setOpen={setOpenCardBottomSheet} />
    </SafeAreaView>
  );
};

export default DeckScreen;
