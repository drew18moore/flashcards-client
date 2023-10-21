import { Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useGetAllDecksQuery } from '../store/features/deck/deckSlice';

export default function HomeScreen() {
  const { data } = useGetAllDecksQuery();

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  )
}