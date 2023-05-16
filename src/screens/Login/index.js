import React, { useState } from "react";
import firebaseConfig from "../../config/firebase";
import { firebase } from "@firebase/app";
import "@firebase/auth";
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
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => setError(err.message));
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