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
    <TouchableOpacity onPress={onPress} className='border-2 border-gray-300 p-5 rounded-md bg-white'>
      <Text className='font-bold'>{displayName}</Text>
      <Text className='text-gray-600'>@{username}</Text>
    </TouchableOpacity>
  )
}

export default SearchUser