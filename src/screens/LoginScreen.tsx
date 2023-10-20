import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    console.log(username, password);
  }

  return (
    <SafeAreaView>
      <View className="mx-5 space-y-2 mt-20">
        <Text className="">LOG IN WITH YOUR USERNAME</Text>
        <View className="space-y-2">
          <View>
            <Text className="text-lg font-bold">USERNAME</Text>
            <TextInput autoCapitalize="none" onChangeText={(text) => setUsername(text)} placeholder="Enter your username" className="text-lg py-1 px-2 border-b-2" />
          </View>
          <View>
            <Text className="text-lg font-bold">PASSWORD</Text>
            <TextInput autoCapitalize="none" onChangeText={(text) => setPassword(text)} placeholder="Enter your password" className="text-lg py-1 px-2 border-b-2" />
          </View>
          <TouchableOpacity onPress={onLogin} className="bg-blue-600 p-3 items-center rounded-md">
            <Text className="text-lg text-white/90 font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
