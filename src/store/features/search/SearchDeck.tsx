import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchDeck = ({ id, name, userId, isPrivate, numCards, createdAt }: Deck) => {
  return (
    <TouchableOpacity className='border p-5 rounded-md'>
      <Text className='font-bold'>{name}</Text>
      <Text>{numCards === 1 ? `${numCards} card`: `${numCards} cards`}</Text>
    </TouchableOpacity>
  )
}

export default SearchDeck