import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SearchUser = ({ id, username, displayName, createdAt, isCurrentUser }: User & { isCurrentUser: boolean }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onPress = () => {
    isCurrentUser ? navigation.navigate("Profile") : navigation.navigate("user-profile", { id })
  }
  return (
    <TouchableOpacity onPress={onPress} className='border p-5 rounded-md'>
      <Text className='font-bold'>{displayName}</Text>
    </TouchableOpacity>
  )
}

export default SearchUser