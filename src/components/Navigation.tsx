import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/features/auth/authSlice';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { currentUser === null ? (
          <Stack.Screen name="login" component={LoginScreen} />
        ): (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}