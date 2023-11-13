import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

type Props = Card & {
  setOpenCardBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setCardId: React.Dispatch<React.SetStateAction<number>>;
};

const Card = ({
  id,
  frontText,
  backText,
  setOpenCardBottomSheet,
  setCardId,
}: Props) => {
  return (
    <View className="border p-3 rounded-md flex-row justify-between items-start">
      <View className="space-y-2">
        <Text className="font-medium">{frontText}</Text>
        <Text className="text-gray-600 font-medium">{backText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setCardId(id);
          setOpenCardBottomSheet(true);
        }}
        className="p-0"
      >
        <MaterialCommunityIcons name="dots-vertical" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
