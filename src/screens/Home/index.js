import React, { useState, useEffect } from "react";
import { Container } from "../Styles";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message'

// import * as SecureStore from 'expo-secure-store';
// import jwt from 'jsonwebtoken';
// import { Buffer } from "buffer";
// import Constants from 'expo-constants';
// import jwtDecode from 'jwt-decode';
// import { Buffer } from "buffer"




import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    watchHeadingAsync,
    LocationAccuracy
} from 'expo-location'

import MapView, { Marker } from "react-native-maps";


import { TopBar } from "../../components/Topbar";
import { DateComponent } from "./components/DateComponent";
import { ButtonPoint } from "../../components/Button";
import { InputInfo } from "./components/InputInfo";




export function Home() {

    //Senac Lat: -8.052366292279732, Long:-34.88525659188676
    //Casa latitude: -7.9895394, longitude: -34.8621279,

    

    const RADIUS = 700; // raio em metros
    const FIXED_LOCATION = {
        latitude: -7.9895394,
        longitude: -34.8621279,
    };


    //Calcula a distance entre os locais
    function calculateDistance(location1, location2) {
        const { latitude: lat1, longitude: lon1 } = location1;
        const { latitude: lat2, longitude: lon2 } = location2;
        const R = 6371e3; // raio da Terra em metros
        const phi1 = (lat1 * Math.PI) / 180;
        const phi2 = (lat2 * Math.PI) / 180;
        const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
        const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;
        const a =
            Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) *
            Math.cos(phi2) *
            Math.sin(deltaLambda / 2) *
            Math.sin(deltaLambda / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    }

    const [location, setLocation] = useState(null);
    const [canPunch, setCanPunch] = useState(false);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);

            // console.log(currentPosition)
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {

        watchHeadingAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1,
        }, (response) => {
            console.log("Nova localização:", response)
            setLocation(response)
        });


    }, [])

    useEffect(() => {

        async function checkLocation() {
            const distance = calculateDistance(location.coords, FIXED_LOCATION);
            setCanPunch(distance >= RADIUS);
            // console.log(distance)
        }

        checkLocation();
    }, [location])




    return (
        <Container>


            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} style={{ width: '100%' }}>

                <TopBar />

                <View style={styles.mapContainer}>
                    {
                        location &&
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                        >

                            <Marker
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}

                            />

                        </MapView>
                    }
                </View>

                <DateComponent />

                <ButtonPoint
                    TextBtn={'Bater Ponto'}
                    Status={canPunch}
                />

                <TouchableOpacity style={styles.btnRelato}><Text style={styles.text}>Últimos Registros</Text><Ionicons name="arrow-down" size={24} color="#000" /></TouchableOpacity>



            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 400,
    },
    mapContainer: {
        marginTop: -40,
        marginBottom: 30,
        width: '100%',
        height: 410,
        borderBottomWidth: 4,
        borderBottomColor: '#2D1CC6',
        borderTopWidth: 4,
        borderTopColor: '#2D1CC6',
        alignItems: "center",
        justifyContent: 'center',

    },
    scrollStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnRelato: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 355,
        height: 58,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 10,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})


