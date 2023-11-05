import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const NewDeckScreen = () => {
  const [name, setName] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">New Deck</Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <MaterialCommunityIcons name="check" size={25} color="#2563EB" />
        </TouchableOpacity>
      </View>
      <View className="p-5 space-y-4">
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
