import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useGetAllCardsInDeckQuery } from "../store/features/card/cardSlice";

const EditCardScreen = () => {
  const {
    params: { cardId, deckId },
  } = useRoute<any>();

  const { data: cards } = useGetAllCardsInDeckQuery(deckId);
  const card = cards?.filter((card) => card.id === cardId)[0];

  // const [editDeck] = useEditDeckMutation();

  const [frontText, setFrontText] = useState(card?.frontText || "");
  const [backText, setBackText] = useState(card?.backText || "");

  const navigation = useNavigation();

  const onSubmit = async () => {
    const formattedFrontText = frontText.trim();
    const formattedBackText = backText.trim();
    // await editDeck({deckId: id, name: formattedName, isPrivate });
    // navigation.goBack();
    console.log(formattedFrontText, formattedBackText);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">Edit Card</Text>
        <TouchableOpacity
          onPress={onSubmit}
          disabled={frontText.trim() === "" || backText.trim() === ""}
          className="self-start mx-2 p-2 absolute z-10 right-0"
        >
          <MaterialCommunityIcons
            name="check"
            size={25}
            color={(frontText.trim() === "" || backText.trim() === "") ? "gray" : "#2563EB"}
          />
        </TouchableOpacity>
      </View>
      <View className="p-5 space-y-4">
        <View>
          <Text className="text-lg font-bold">FRONT TEXT</Text>
          <TextInput
            style={{ fontSize: 18 }}
            onChangeText={(text) => setFrontText(text)}
            value={frontText}
            autoCapitalize="none"
            placeholder="Enter a name for your deck"
            className="py-1 px-2 border-b-2 focus:border-b-blue-600"
          />
        </View>
        <View>
          <Text className="text-lg font-bold">BACK TEXT</Text>
          <TextInput
            style={{ fontSize: 18 }}
            onChangeText={(text) => setBackText(text)}
            value={backText}
            autoCapitalize="none"
            placeholder="Enter a name for your deck"
            className="py-1 px-2 border-b-2 focus:border-b-blue-600"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditCardScreen;
