import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchDeck = ({ id, name, userId, isPrivate, numCards, createdAt }: Deck) => {
  return (
    <TouchableOpacity className='border'>
      <Text>SearchDeck</Text>
    </TouchableOpacity>
  )
}

export default SearchDeck