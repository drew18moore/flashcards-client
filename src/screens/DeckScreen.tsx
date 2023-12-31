import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetAllDecksQuery } from "../store/features/deck/deckSlice";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";
import Card from "../store/features/card/Card";
import FloatingPlusButton from "../components/FloatingPlusButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import DeckBottomSheet from "../components/DeckBottomSheet";
import CardBottomSheet from "../components/CardBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

const DeckScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const { data: decks } = useGetAllDecksQuery();
  const deck = decks?.filter((deck) => deck.id === id)[0];

  const { data: cards, isLoading } = useGetAllCardsInDeckQuery(id);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [open, setOpen] = useState(false);
  const [openCardBottomSheet, setOpenCardBottomSheet] = useState(false);
  const [cardId, setCardId] = useState<number>(-1);

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View className="absolute z-10 bottom-20 right-6">
        <FloatingPlusButton
          onPress={() => navigation.navigate("new-card", { id })}
        />
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
          onPress={() => setOpen((prev) => !prev)}
        >
          <MaterialCommunityIcons name="dots-vertical" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView className="h-full">
        <View className="mx-6 mt-2 space-y-3 pb-11">
          <View className="space-y-1">
            <View>
              <Text className="text-lg font-bold">{deck?.name}</Text>
              <Text className="">
                {deck?.numCards === 1
                  ? `${deck?.numCards} card`
                  : `${deck?.numCards} cards`}
              </Text>
            </View>

            <View className="space-y-1">
              <TouchableOpacity
                disabled={cards?.length === 0}
                onPress={() => navigation.navigate("flashcards", { id })}
                className={`flex-row border p-3 rounded-md items-center space-x-3 ${
                  cards?.length === 0 ? "border-gray-400" : ""
                }`}
              >
                <MaterialCommunityIcons
                  name="card-multiple"
                  size={25}
                  color={`${cards?.length === 0 ? "#9CA3AF" : "#2563EB"}`}
                />
                <View>
                  <Text
                    className={`font-bold ${
                      cards?.length === 0 ? "text-gray-400" : ""
                    }`}
                  >
                    Flashcards
                  </Text>
                  <Text
                    className={`${cards?.length === 0 ? "text-gray-400" : ""}`}
                  >
                    Review terms an definitions
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={cards?.length === 0}
                onPress={() => navigation.navigate("test-config", { id })}
                className={`flex-row border p-3 rounded-md items-center space-x-3 ${
                  cards?.length === 0 ? "border-gray-400" : ""
                }`}
              >
                <MaterialCommunityIcons
                  name="file-document-multiple"
                  size={25}
                  color={`${cards?.length === 0 ? "#9CA3AF" : "#2563EB"}`}
                />
                <View>
                  <Text
                    className={`font-bold ${
                      cards?.length === 0 ? "text-gray-400" : ""
                    }`}
                  >
                    Test
                  </Text>
                  <Text
                    className={`${cards?.length === 0 ? "text-gray-400" : ""}`}
                  >
                    Take a practice test
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="space-y-1">
            <Text className="font-bold">Cards</Text>
            <View style={{ rowGap: 5, paddingBottom: 60 }}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                cards?.map((card) => (
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
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      <DeckBottomSheet id={id} open={open} setOpen={setOpen} />
      <CardBottomSheet
        id={cardId}
        deckId={id}
        open={openCardBottomSheet}
        setOpen={setOpenCardBottomSheet}
      />
    </SafeAreaView>
  );
};

export default DeckScreen;
