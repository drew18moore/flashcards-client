import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDeleteDeckMutation } from "../store/features/deck/deckSlice";

type Props = {
  id: number;
};

const DeckPopupMenu = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [deleteDeck] = useDeleteDeckMutation();

  const onDelete = async () => {
    await deleteDeck(id);
    navigation.goBack();
  }
  return (
    <>
      <TouchableOpacity
        className="self-start mx-3 p-2"
        onPress={() => setOpen(true)}
      >
        <MaterialCommunityIcons name="dots-vertical" size={25} />
      </TouchableOpacity>
      <Modal transparent visible={open}>
        <Pressable className="flex-1" onPress={() => setOpen(false)}>
          <View className="bg-white absolute top-24 right-8 border rounded-md">
            <TouchableOpacity
              onPress={() => {
                setOpen(false);
                navigation.navigate("edit-deck", { id });
              }}
              className="px-4 py-2 flex-row items-center space-x-3"
            >
              <MaterialCommunityIcons name="pencil-outline" size={20} />
              <Text className="text-lg">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowDeleteModal(true);
                setOpen(false);
              }}
              className="px-4 py-2 flex-row items-center space-x-3"
            >
              <MaterialCommunityIcons name="trash-can-outline" size={20} />
              <Text className="text-lg">Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      <Modal transparent visible={showDeleteModal} className="">
        <View className="flex-1 justify-center items-center">
          <Pressable
            className="absolute top-0 bottom-0 left-0 right-0"
            onPress={() => setShowDeleteModal(false)}
          />
            <View className="bg-white rounded-md p-5 space-y-4 border">
              <Text className="text-center">
                Are you sure you want to delete this deck?
              </Text>
              <View className="flex-row items-center justify-center space-x-4">
                <TouchableOpacity onPress={() => setShowDeleteModal(false)} className="border rounded-md px-2 py-1">
                  <Text className="text-lg">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} className="border rounded-md px-2 py-1 border-red-500 bg-red-500">
                  <Text className="text-white text-lg">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Modal>
    </>
  );
};

export default DeckPopupMenu;
