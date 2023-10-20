import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLoginMutation } from "../store/features/auth/authApiSlice";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  const onLogin = async () => {
    console.log(username, password);
    const formattedUsername = username.toLowerCase().trim();

    try {
      const res = await login({ username: formattedUsername, password }).unwrap()
      
      setUsername("");
      setPassword("");
      console.log(res);
    } catch (err) {
      console.error("ERROR", err);
    }
  }

  return (
    <SafeAreaView>
      <View className="mx-5 space-y-2 mt-20">
        <Text className="">LOG IN WITH YOUR USERNAME</Text>
        <View className="space-y-2">
          <View>
            <Text className="text-lg font-bold">USERNAME</Text>
            <TextInput autoCapitalize="none" onChangeText={(text) => setUsername(text)} value={username} placeholder="Enter your username" className="text-lg py-1 px-2 border-b-2" />
          </View>
          <View>
            <Text className="text-lg font-bold">PASSWORD</Text>
            <TextInput autoCapitalize="none" onChangeText={(text) => setPassword(text)} value={password} placeholder="Enter your password" className="text-lg py-1 px-2 border-b-2" />
          </View>
          <TouchableOpacity onPress={onLogin} className="bg-blue-600 p-3 items-center rounded-md">
            <Text className="text-lg text-white/90 font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
