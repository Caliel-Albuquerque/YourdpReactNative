import React, { useState } from "react";

import { Alert } from "react-native";

import { auth } from "../../config/firebaseConfig";

import {
    SafeAreaView,
    TextInput,
    Button,
    StyleSheet,
    Text,
} from "react-native";

export function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Oba', 'Deu tudo certo')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button title="Log in" onPress={handleLogin} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    error: {
        color: "red",
        marginBottom: 16,
    },
});