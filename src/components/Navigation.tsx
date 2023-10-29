import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/DecksScreen";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/features/auth/authSlice";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const token = useSelector(selectCurrentToken);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token === null ? (
          <Stack.Group>
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="main" component={MainScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
