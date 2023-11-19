import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFlashcardsOptions,
  setFlashcardsOptions,
} from "../store/features/options/optionsSlice";

const FlashcardsSettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const { isFrontOrientation } = useSelector(selectFlashcardsOptions);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="self-start mx-2 p-2 absolute z-10 left-0"
        >
          <MaterialCommunityIcons name="close" size={25} />
        </TouchableOpacity>
        <Text className="font-bold text-center p-3">Options</Text>
        <TouchableOpacity className="self-start mx-2 p-2 absolute z-10 right-0">
          <MaterialCommunityIcons name="check" size={25} color="#2563EB" />
        </TouchableOpacity>
      </View>

      <View className="p-5 space-y-1">
        <Text className="text-lg font-bold">CARD ORIENTATION</Text>
        <View className="flex-row space-x-2">
          <Pressable
            onPress={() =>
              dispatch(setFlashcardsOptions({ isFrontOrientation: true }))
            }
            className={`border p-2 flex-grow items-center rounded-md ${
              isFrontOrientation ? "border-blue-600" : ""
            }`}
          >
            <Text
              className={`font-bold ${
                isFrontOrientation ? "text-blue-600" : ""
              }`}
            >
              Front
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              dispatch(setFlashcardsOptions({ isFrontOrientation: false }))
            }
            className={`border p-2 flex-grow items-center rounded-md ${
              !isFrontOrientation ? "border-blue-600" : ""
            }`}
          >
            <Text
              className={`font-bold ${
                !isFrontOrientation ? "text-blue-600" : ""
              }`}
            >
              Back
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FlashcardsSettingsScreen;
