import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentToken, selectCurrentUser } from '../store/features/auth/authSlice';

export default function HomeScreen() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(user)}</Text>
      <Text>{JSON.stringify(token)}</Text>
    </SafeAreaView>
  )
}