import { Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllDecks } from '../store/features/deck/deckSlice';

export default function HomeScreen() {
  const decks = useSelector(selectAllDecks);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(decks)}</Text>
    </SafeAreaView>
  )
}