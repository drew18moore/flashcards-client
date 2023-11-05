import { TouchableOpacity } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const NewDeckButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity className='bg-blue-600 rounded-full' onPress={() => navigation.navigate("new-deck")}>
      <MaterialCommunityIcons name='plus' size={30} color="white" style={{ padding: 10 }} />
    </TouchableOpacity>
  )
}

export default NewDeckButton