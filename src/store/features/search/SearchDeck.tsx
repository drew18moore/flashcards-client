import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";

const SearchDeck = ({
  id,
  name,
  userId,
  isPrivate,
  numCards,
  createdAt,
}: Deck) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const user = useSelector(selectCurrentUser);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(`${user?.id === userId ? "deck" : "user-deck"}`, {
          id,
          name,
          numCards,
          createdAt,
        })
      }
      className="border-2 border-gray-300 p-5 rounded-md bg-white space-y-1"
    >
      <Text className="font-bold">{name}</Text>
      <View className="bg-blue-100 self-start rounded-full px-2">
        <Text>{numCards === 1 ? `${numCards} card` : `${numCards} cards`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchDeck;
