import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DecksScreen from "./DecksScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Decks"
        component={DecksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="card-multiple"
              size={20}
              color={focused ? "#2563EB" : "gray"}
            />
          ),
          tabBarLabelStyle: { fontWeight: "bold" },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={20}
              color={focused ? "#2563EB" : "gray"}
            />
          ),
          tabBarLabelStyle: { fontWeight: "bold" },
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
