import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function AuthRoutes({ children }) {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name="Login">{children}</Stack.Screen>
        </Stack.Navigator>
    );
}
