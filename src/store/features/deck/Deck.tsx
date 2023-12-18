import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Deck = ({ id, userId, name, isPrivate, createdAt, numCards }: Deck) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("deck", { id })}
      className="border-2 border-gray-300 p-5 rounded-md bg-white space-y-1"
    >
      <Text className="font-bold">{name}</Text>
      <View className="bg-blue-100 self-start rounded-full px-2">
        <Text className="">
          {numCards === 1 ? `${numCards} card` : `${numCards} cards`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Deck;
