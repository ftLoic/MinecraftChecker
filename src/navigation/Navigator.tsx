import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PlayerScreen from "../screens/PlayerScreen";

import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Routes.PLAYER_SCREEN} component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
