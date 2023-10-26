import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="self-start mx-3 p-2"
      >
        <MaterialCommunityIcons name="arrow-left" size={25} />
      </TouchableOpacity>
      <View className="mx-5 space-y-2 mt-20">
        <Text>SIGN UP WITH A USERNAME</Text>
        <View className="space-y-2">
          <View>
            <Text className="text-lg font-bold">USERNAME</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Enter a username"
              className="text-lg py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <View>
            <Text className="text-lg font-bold">PASSWORD</Text>
            <TextInput
              placeholder="Enter a password"
              className="text-lg py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <View>
            <Text className="text-lg font-bold">CONFIRM PASSWORD</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Confirm your password"
              className="text-lg py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <TouchableOpacity className="bg-blue-600 p-3 items-center rounded-md">
            <Text className="text-lg text-white/90 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
