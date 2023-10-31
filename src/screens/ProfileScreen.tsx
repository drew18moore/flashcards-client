import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/auth/authSlice";

const ProfileScreen = () => {
  const user = useSelector(selectCurrentUser);

  const formattedDate = new Date(user!.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <SafeAreaView>
      <View className="px-4">
        <View className="space-y-2">
          <Text className="font-bold text-xl">{user?.displayName}</Text>
          <Text>{user?.username}</Text>
          <Text>Joined {formattedDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
