import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";

const ProfileScreen = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <SafeAreaView>
      <View className="px-4">
        <View className="space-y-2">
          <Text className="font-bold text-xl">Drew</Text>
          <Text>{user?.username}</Text>
          <Text>Joined October 2023</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
