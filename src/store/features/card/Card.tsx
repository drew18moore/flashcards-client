import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Card = ({ frontText, backText }: Card) => {
  return (
    <View className="border p-3 rounded-md flex-row justify-between items-start">
      <View className="space-y-2">
        <Text className="font-medium">{frontText}</Text>
        <Text className="text-gray-600 font-medium">{backText}</Text>
      </View>
      <TouchableOpacity
          className="p-0"
        >
          <MaterialCommunityIcons name="dots-vertical" size={25} />
        </TouchableOpacity>
    </View>
  );
};

export default Card;
