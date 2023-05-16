import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export function TopBar() {
    return (


        <View style={{justifyContent: 'center', alignItems:'center'}}>

            <View style={styles.topBar}>
                <View style={styles.contentUser}>
                    <Image style={styles.userImage} source={require('./../../../assets/iconDefautlt.jpg')} />
                    <Text style={styles.userName}>Breno</Text>
                </View>
                <View style={styles.contentInfo}>
                    <Ionicons name="arrow-back-outline" size={24} color="#000" />
                </View>

            </View>

        </View>



    )
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 90,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 100,
        marginBottom: 40

    },
    contentUser: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    contentInfo: {

    },
});