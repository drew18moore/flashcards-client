import { View, Text, TouchableOpacity, Modal, SafeAreaView, TouchableWithoutFeedback, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {};

const DeckPopupMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableOpacity className="self-start mx-3 p-2" onPress={() => setOpen(true)}>
        <MaterialCommunityIcons name="dots-vertical" size={25} />
      </TouchableOpacity>
      <Modal transparent visible={open} >
        <Pressable className="flex-1" onPress={() => setOpen(false)}>
          <View className="bg-white absolute top-24 right-8 border rounded-md">
            <TouchableOpacity className="px-4 py-2 flex-row items-center space-x-3">
              <MaterialCommunityIcons name="pencil-outline" size={20} />
              <Text className="text-lg">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 flex-row items-center space-x-3">
              <MaterialCommunityIcons name="trash-can-outline" size={20} />
              <Text className="text-lg">Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default DeckPopupMenu;
