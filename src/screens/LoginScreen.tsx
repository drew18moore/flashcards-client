import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useLoginMutation } from "../store/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/features/auth/authSlice";
import * as SecureStore from "expo-secure-store";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onLogin = async () => {
    const formattedUsername = username.toLowerCase().trim();

    try {
      const res = await login({
        username: formattedUsername,
        password,
      }).unwrap();
      dispatch(setCredentials({ user: res.userDTO, token: res.token }));

      await SecureStore.setItemAsync("flashcards-jwt", res.token);

      setUsername("");
      setPassword("");
    } catch (err: any) {
      if (err.data.statusCode === 400) {
        setError("Incorrect username or password");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <SafeAreaView className={Platform.OS === "android" ? "pt-6" : ""}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="self-start mx-3 p-2"
      >
        <MaterialCommunityIcons name="arrow-left" size={25} />
      </TouchableOpacity>
      <View className="mx-6 space-y-2 mt-20">
        <Text>LOG IN WITH YOUR USERNAME</Text>
        {error && (
          <Text
            className="bg-red-200 text-red-600 self-center px-2 py-1 overflow-hidden"
            style={{ borderRadius: 6 }}
          >
            {error}
          </Text>
        )}
        <View className="space-y-2">
          <View className="space-y-2">
            <Text className="text-lg font-bold">USERNAME</Text>
            <TextInput
              style={{ fontSize: 18 }}
              autoCapitalize="none"
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Enter your username"
              className="py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <View className="space-y-2">
            <Text className="text-lg font-bold">PASSWORD</Text>
            <TextInput
              style={{ fontSize: 18 }}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Enter your password"
              className="py-1 px-2 border-b-2 focus:border-b-blue-600"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            onPress={onLogin}
            className="bg-blue-600 p-3 items-center rounded-md h-[52px] justify-center"
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-lg text-white/90 font-bold">Log In</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
