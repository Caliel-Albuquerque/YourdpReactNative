import { View, Button, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import Toast from 'react-native-toast-message';

import * as LocalAuthentication from 'expo-local-authentication';

import { useState, useEffect } from "react";

export function ButtonPoint(props) {

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Aviso',
            text2: 'Você está fora da área da empresa'
        });
    }



    const [isAuth, setIsAuth] = useState(false)

    async function verifyAvailableAuthentication() {
        const auth = await LocalAuthentication.hasHardwareAsync();
        console.log(auth)

        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types.map(type => LocalAuthentication.AuthenticationType[type]));
    }

    async function handleAuthent() {
        const isBiometric = await LocalAuthentication.isEnrolledAsync();

        if (!isBiometric) {
            return Alert.alert('Error', 'Nenhuma biometria encontrada')
        }

        const authBiometric = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticação de biometria',
            fallbackLabel: 'Error na autenticação de biometria'
        });

        setIsAuth(authBiometric.success)

        if (isAuth) {
            return Alert.alert('Sucesso', 'Ponto Cadastrado')
        }
    }

    useEffect(() => {
        verifyAvailableAuthentication();
    }, [])


    const ShowNotification = props.Status ? showToast : handleAuthent;



    return (
        <View>

            <TouchableOpacity onPress={ShowNotification} style={[styles.btn, props.Status && styles.btnBlock]}>
                <Text style={styles.textBtn}>{props.TextBtn}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#2D1CC6',
        borderRadius: 20,
        width: 355,
        height: 58,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    btnBlock: {
        backgroundColor: '#a5a8bf'
    },

    textBtn: {
        fontWeight: '500',
        fontSize: 24,
        color: '#FFFFFF',
    }

})

