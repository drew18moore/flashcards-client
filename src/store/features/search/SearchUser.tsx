import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchUser = ({ id, username, displayName, createdAt }: User) => {
  return (
    <TouchableOpacity className='border'>
      <Text>SearchUser</Text>
    </TouchableOpacity>
  )
}

export default SearchUser