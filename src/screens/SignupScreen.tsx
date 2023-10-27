import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useSignupMutation } from "../store/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/features/auth/authSlice";
import * as SecureStore from "expo-secure-store";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [signup] = useSignupMutation();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSignup = async () => {
    console.log(username, password, confirmPassword);
    const formattedUsername = username.toLowerCase().trim();

    try {
      const res = await signup({
        username: formattedUsername,
        password,
        confirmPassword,
      }).unwrap();
      dispatch(setCredentials({ user: res.userDTO, token: res.token }));

      await SecureStore.setItemAsync("flashcards-jwt", res.token);

      setUsername("");
      setPassword("");
    } catch (err: any) {
      if (err.data.statusCode === 400) {
        setError("Invalid username or password");
      } else {
        setError("Something went wrong");
      }
    }
  };

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
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
              placeholder="Enter a username"
              className="py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <View className="space-y-2">
            <Text className="text-lg font-bold">PASSWORD</Text>
            <TextInput
              style={{ fontSize: 18 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter a password"
              className="py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <View className="space-y-2">
            <Text className="text-lg font-bold">CONFIRM PASSWORD</Text>
            <TextInput
              style={{ fontSize: 18 }}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              autoCapitalize="none"
              placeholder="Confirm your password"
              className="py-1 px-2 border-b-2 focus:border-b-blue-600"
            />
          </View>
          <TouchableOpacity
            onPress={onSignup}
            className="bg-blue-600 p-3 items-center rounded-md"
          >
            <Text className="text-lg text-white/90 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
