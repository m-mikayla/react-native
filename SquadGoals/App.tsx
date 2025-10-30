import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login/Login";
import Entry from "./src/screens/Entry/Entry";
import SignUp from "./src/screens/SignUp/SignUp";
import Home from "./src/screens/Home/Home";
import AddTask from "./src/screens/AddTask/AddTask";

export type RootStackParamList = Record<string, undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Entry" component={Entry} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add task" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
