import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./views/Login";
import Signup from "./views/Signup";
//Phạm Văn Đạt - 20520155
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
