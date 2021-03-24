import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import {Modal} from "../components/Modal";
import {Routes} from "./Routes";
import {Photos} from "../components/Photos";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false
        }}>
        <Stack.Screen name={Routes.Photos} component={Photos} />
        <Stack.Screen name={Routes.Modal} component={Modal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

