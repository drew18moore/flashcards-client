import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/features/auth/authSlice";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import DeckScreen from "../screens/DeckScreen";
import EditDeckScreen from "../screens/EditDeckScreen";
import NewCardScreen from "../screens/NewCardScreen";
import EditCardScreen from "../screens/EditCardScreen";

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
          <Stack.Group>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen
              name="settings"
              component={SettingsScreen}
            />
            <Stack.Screen name="new-deck" component={NewDeckScreen} />
            <Stack.Screen name="edit-deck" component={EditDeckScreen} />
            <Stack.Screen name="deck" component={DeckScreen} />
            <Stack.Screen name="new-card" component={NewCardScreen} />
            <Stack.Screen name="edit-card" component={EditCardScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
