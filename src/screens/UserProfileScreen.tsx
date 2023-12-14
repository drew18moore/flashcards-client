import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetUserProfileQuery } from "../store/features/user/userApiSlice";

const UserProfileScreen = () => {
  const {
    params: { id },
  } = useRoute<any>();

  const {
    data: user,
    isLoading,
    error,
  } = useGetUserProfileQuery({ userId: id });
  const formattedDate = user?.createdAt
  ? new Date(user!.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  }) : "";

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className={`${Platform.OS === "android" ? "pt-6" : ""}`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-3 p-2"
        >
          <MaterialCommunityIcons name="arrow-left" size={25} />
        </TouchableOpacity>
      </View>
      <View className="px-6 flex-row mt-2">
        <View className="space-y-2 flex-1">
          <Text className="font-bold text-xl">{user?.displayName}</Text>
          <Text>{user?.username}</Text>
          <Text>Joined {formattedDate} </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
