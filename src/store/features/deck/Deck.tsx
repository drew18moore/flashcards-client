import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Deck = ({ id, userId, name, isPrivate, createdAt }: Deck) => {
  return (
    <TouchableOpacity className="border p-5 rounded-md">
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Deck;
