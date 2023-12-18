import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const user = useSelector(selectCurrentUser);
  const formattedDate = new Date(user!.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView className={`${Platform.OS === "android" ? "pt-6" : ""}`}>
      <View className="px-6 flex-row">
        <View className="space-y-2 flex-1">
          <Text className="font-bold text-xl">{user?.displayName}</Text>
          <Text>@{user?.username}</Text>
          <Text>Joined {formattedDate}</Text>
        </View>
        <View>
          <TouchableOpacity className="p-1 m-1" onPress={() => navigation.navigate("settings")}>
            <MaterialCommunityIcons name="cog-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
