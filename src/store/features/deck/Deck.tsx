import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Deck = ({ id, userId, name, isPrivate, createdAt, numCards }: Deck) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("deck", { id })} className="border p-5 rounded-md">
      <Text>{name}</Text>
      <Text>{numCards} cards</Text>
    </TouchableOpacity>
  );
};

export default Deck;
