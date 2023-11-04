import { TouchableOpacity } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewDeckButton = () => {
  return (
    <TouchableOpacity className='bg-blue-600 rounded-full'>
      <MaterialCommunityIcons name='plus' size={30} color="white" style={{ padding: 10 }} />
    </TouchableOpacity>
  )
}

export default NewDeckButton