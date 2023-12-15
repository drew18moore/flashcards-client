import {
  Text,
  TouchableOpacity,
  View,
  Switch,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNewDeckMutation } from "../store/features/deck/deckSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const NewDeckScreen = () => {
  const [name, setName] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const navigation = useNavigation();
  const [newDeck] = useNewDeckMutation();

  const onSubmit = async () => {
    const formattedName = name.trim();
    await newDeck({ name: formattedName, isPrivate });
    navigation.goBack();
  };

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">New Deck</Text>
        <TouchableOpacity
          onPress={onSubmit}
          disabled={name.trim() === ""}
          className="self-start mx-3 p-2 absolute z-10 right-0"
        >
          <MaterialCommunityIcons
            name="check"
            size={25}
            color={name.trim() === "" ? "gray" : "#2563EB"}
          />
        </TouchableOpacity>
      </View>
      <View className="p-6 space-y-4">
        <View>
          <Text className="text-lg font-bold">NAME</Text>
          <TextInput
            style={{ fontSize: 18 }}
            onChangeText={(text) => setName(text)}
            value={name}
            autoCapitalize="none"
            placeholder="Enter a name for your deck"
            className="py-1 px-2 border-b-2 focus:border-b-blue-600"
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold">Public</Text>
          <Switch
            value={!isPrivate}
            onValueChange={(value) => setIsPrivate(!value)}
            trackColor={{ true: "#2563EB" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewDeckScreen;
