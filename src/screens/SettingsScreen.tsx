import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="self-start mx-3 p-2"
      >
        <MaterialCommunityIcons name="close" size={25} />
      </TouchableOpacity>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  )
}

export default SettingsScreen