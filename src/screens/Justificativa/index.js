import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export function Justificativa() {
    const [justificativa, setJustificativa] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleEnviar = () => {
        Alert.alert('Sucesso!', 'Seus dados foram enviados');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Justificativa</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Justificativa:</Text>
                <TextInput
                    style={styles.input}
                    value={justificativa}
                    onChangeText={setJustificativa}
                />
                <Text style={styles.label}>Observação:</Text>
                <TextInput
                    style={styles.input}
                    value={observacao}
                    onChangeText={setObservacao}
                    multiline
                />
                <Button title="Enviar" onPress={handleEnviar} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
});
