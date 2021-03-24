import React from "react";
import {Dimensions} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import {Modal} from "../components/Modal";
import {Routes} from "./Routes";
import {Photos} from "../components/Photos";

const Stack = createStackNavigator();
const width = Dimensions.get('window').width;
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
         headerTitleStyle: {
           textAlign: "center",
           width: width
         }
        }}>
        <Stack.Screen name={Routes.Photos} component={Photos} options={{
          cardStyle: {
            width: width
          }
        }}/>
        <Stack.Screen name={Routes.Modal} component={Modal} options={{
          cardStyle: {
            width: width
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

