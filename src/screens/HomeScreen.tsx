import { Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useGetAllDecksQuery } from '../store/features/deck/deckSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/features/auth/authSlice';

export default function HomeScreen() {
  const { data } = useGetAllDecksQuery();
  const user = useSelector(selectCurrentUser);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(user)}</Text>
    </SafeAreaView>
  )
}