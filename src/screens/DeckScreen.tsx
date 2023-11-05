import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const DeckScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default DeckScreen;
