import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import auth from '@react-native-firebase/auth';




import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tabs.routes";
import { LoginScreen } from "../screens/Login";
import Toast from 'react-native-toast-message'


export function Routes() {


    return (

        <>
            <NavigationContainer>

                <TabRoutes /> 

                {/* <AuthRoutes>
                    <LoginScreen />
                </AuthRoutes> */}

                {/* <LoginScreen /> */}

            </NavigationContainer>

        </>

    )
}