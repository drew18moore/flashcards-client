import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetUserProfileQuery } from "../store/features/user/userApiSlice";
import { useGetAllPublicUserDecksQuery } from "../store/features/deck/deckSlice";
import Deck from "../store/features/deck/Deck";

const UserProfileScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const {
    data: user,
    isLoading: isLoadingUser,
    error,
  } = useGetUserProfileQuery({ userId: id });
  const { data: decks, isLoading: isLoadingDecks } =
    useGetAllPublicUserDecksQuery({ userId: id });

  const formattedDate = user?.createdAt
    ? new Date(user!.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "";

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className={`${Platform.OS === "android" ? "pt-6" : ""}`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2"
        >
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView className="px-6 mt-2 h-full">
        <View className="space-y-2">
          <Text className="font-bold text-xl">{user?.displayName}</Text>
          <Text>{user?.username}</Text>
          <Text>Joined {formattedDate} </Text>
        </View>
        <Text className="text-lg font-bold mt-6">Decks</Text>
        <View className="flex-1">
          {decks?.map((deck) => (
            <Deck
              key={deck.id}
              id={deck.id}
              userId={deck.userId}
              name={deck.name}
              isPrivate={deck.isPrivate}
              createdAt={deck.createdAt}
              numCards={deck.numCards}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
