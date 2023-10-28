import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Deck = ({ id, userId, name, isPrivate, createdAt, numCards }: Deck) => {
  return (
    <TouchableOpacity className="border p-5 rounded-md">
      <Text>{name}</Text>
      <Text>{numCards} cards</Text>
    </TouchableOpacity>
  );
};

export default Deck;
