import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FlashcardsSettingsScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
        <TouchableOpacity
          className="self-start mx-2 p-2 absolute z-10 right-0"
        >
          <MaterialCommunityIcons
            name="check"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default FlashcardsSettingsScreen