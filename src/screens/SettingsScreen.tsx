import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser, setUser } from "../store/features/auth/authSlice";
import * as SecureStorage from "expo-secure-store";
import { useEditUserMutation } from "../store/features/user/userApiSlice";

const SettingsScreen = () => {
  const user = useSelector(selectCurrentUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [editUser] = useEditUserMutation();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [username, setUsername] = useState(user?.username || "");

  const onLogout = async () => {
    dispatch(logout());
    await SecureStorage.deleteItemAsync("flashcards-jwt");
  };

  const saveProfile = async () => {
    console.log(displayName, username);

    const formattedDisplayName = displayName.trim();
    const formattedUsername = username.toLowerCase().trim();

    try {
      const res = await editUser({
        userId: user!.id,
        displayName: formattedDisplayName,
        username: formattedUsername,
      }).unwrap();
      dispatch(setUser(res));
    } catch (err) {
      console.error(err);
    }
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
        <Text className="font-bold text-center p-3">Settings</Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <Text onPress={saveProfile} className="font-bold p-1 text-blue-600">
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
      <View className="p-5 space-y-2">
        <View>
          <Text className="text-lg font-bold">DISPLAY NAME</Text>
          <TextInput
            style={{ fontSize: 18 }}
            onChangeText={(text) => setDisplayName(text)}
            value={displayName}
            autoCapitalize="none"
            placeholder="Enter a display name"
            className="py-1 px-2 border-b-2 focus:border-b-blue-600"
          />
        </View>
        <View>
          <Text className="text-lg font-bold">USERNAME</Text>
          <TextInput
            style={{ fontSize: 18 }}
            onChangeText={(text) => setUsername(text)}
            value={username}
            autoCapitalize="none"
            placeholder="Enter a username"
            className="py-1 px-2 border-b-2 focus:border-b-blue-600"
          />
        </View>
      </View>
      <TouchableOpacity
        className="mx-5 p-2 items-center border rounded-md"
        onPress={onLogout}
      >
        <Text className="font-bold p-1 text-blue-600">LOG OUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
