import { ActivityIndicator, Platform, RefreshControl, ScrollView, Text, View } from "react-native";
import React from "react";
import { useGetAllDecksQuery } from "../store/features/deck/deckSlice";
import Deck from "../store/features/deck/Deck";
import NewDeckButton from "../components/FloatingPlusButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DecksScreen() {
  const { data: decks, refetch, isLoading } = useGetAllDecksQuery();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View className="absolute z-10 bottom-16 right-6">
        <NewDeckButton onPress={() => navigation.navigate("new-deck")} />
      </View>
      <Text className="text-lg font-bold px-6 py-2">Decks</Text>
      <ScrollView
        className="h-full px-6"
        contentContainerStyle={{ rowGap: 5, paddingBottom: 60 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          decks?.map((deck) => (
            <Deck
              key={deck.id}
              id={deck.id}
              userId={deck.userId}
              name={deck.name}
              isPrivate={deck.isPrivate}
              createdAt={deck.createdAt}
              numCards={deck.numCards}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
