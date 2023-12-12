import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SearchDeck = ({ id, name, userId, isPrivate, numCards, createdAt }: Deck) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("user-deck", { id, name, numCards, createdAt })} className='border p-5 rounded-md'>
      <Text className='font-bold'>{name}</Text>
      <Text>{numCards === 1 ? `${numCards} card`: `${numCards} cards`}</Text>
    </TouchableOpacity>
  )
}

export default SearchDeck