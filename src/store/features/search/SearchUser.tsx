import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchUser = ({ id, username, displayName, createdAt }: User) => {
  return (
    <TouchableOpacity className='border p-5 rounded-md'>
      <Text className='font-bold'>{displayName}</Text>
    </TouchableOpacity>
  )
}

export default SearchUser