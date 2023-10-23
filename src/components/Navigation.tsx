import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../store/features/auth/authSlice';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const token = useSelector(selectCurrentToken);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { token === null ? (
          <Stack.Screen name="login" component={LoginScreen} />
        ): (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}