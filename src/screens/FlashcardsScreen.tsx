import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";

const FlashcardsScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const navigation = useNavigation();
  const { data: cards } = useGetAllCardsInDeckQuery(id);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">1/{cards?.length}</Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <MaterialCommunityIcons name="cog-outline" size={25} />
        </TouchableOpacity>
      </View>
      <Text>FlashcardsScreen</Text>
    </SafeAreaView>
  );
};

export default FlashcardsScreen;
