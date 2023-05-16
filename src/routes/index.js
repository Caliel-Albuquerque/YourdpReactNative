import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from "../config/firebase";

firebase.initializeApp(firebaseConfig);
import "@firebase/auth";

import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tabs.routes";
import { LoginScreen } from "../screens/Login";
import Toast from 'react-native-toast-message'


export function Routes() {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    if (loading) {
        return null;
    }

    return (

        <>
            <NavigationContainer>
                {authenticated ? (
                    <TabRoutes />
                ) : (
                    <AuthRoutes>
                        <LoginScreen />
                    </AuthRoutes>
                )}
            </NavigationContainer>

        </>

    )
}