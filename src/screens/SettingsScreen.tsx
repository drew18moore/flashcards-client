import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2 absolute z-10"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
