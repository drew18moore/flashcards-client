import { GestureResponderEvent, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const FloatingPlusButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity className="bg-blue-600 rounded-full" onPress={onPress}>
      <MaterialCommunityIcons
        name="plus"
        size={30}
        color="white"
        style={{ padding: 10 }}
      />
    </TouchableOpacity>
  );
};

export default FloatingPlusButton;
