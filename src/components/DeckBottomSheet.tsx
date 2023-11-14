import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useDeleteDeckMutation } from "../store/features/deck/deckSlice";

type Props = {
  id: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const DeckBottomSheet = ({ id, open, setOpen }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteDeck] = useDeleteDeckMutation();

  const onDelete = async () => {
    await deleteDeck(id);
    navigation.goBack();
  }

  return (
    <>
      <Modal transparent visible={open} animationType="slide">
        <Pressable className="flex-1" onPress={() => setOpen(false)}>
          <View className="bg-white absolute bottom-0 right-0 left-0 border rounded-bl-none rounded-br-none rounded-t-md space-y-2 px-3 pt-4 pb-6">
            <TouchableOpacity
              onPress={() => {
                setOpen(false);
                navigation.navigate("edit-deck", { id });
              }}
              className="px-4 py-4 flex-row items-center space-x-3 border rounded-md"
            >
              <MaterialCommunityIcons name="pencil-outline" size={20} />
              <Text className="text-lg">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowDeleteModal(true);
                setOpen(false);
              }}
              className="px-4 py-4 flex-row items-center space-x-3 border rounded-md"
            >
              <MaterialCommunityIcons name="trash-can-outline" size={20} />
              <Text className="text-lg">Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      <Modal transparent visible={showDeleteModal} animationType="slide">
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
              <TouchableOpacity
                onPress={() => setShowDeleteModal(false)}
                className="border rounded-md px-2 py-1"
              >
                <Text className="text-lg">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onDelete}
                className="border rounded-md px-2 py-1 border-red-500 bg-red-500"
              >
                <Text className="text-white text-lg">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeckBottomSheet;
