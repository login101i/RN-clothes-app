import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, } from 'react-native'

import AppButton from '../components/AppButton'
import colors from '../config/colors'


function WelcomeScreen() {
    return (


        <ImageBackground
            style={styles.background}
            source={require('../assets/room-9.jpeg')}
            blurRadius={3}>
            <View
                style={styles.logoContainer}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/css.png')}
                    resizeMode="contain"
                />
                <Text style={styles.tagline}>Sprzedaj tego czego nie używasz</Text>
            </View>
            <View style={styles.buttonsContainer}>

                <AppButton title="Login" onPress={() => console.log('Kliknięte')} />
                <AppButton title="Register" color="secondary" />
            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    tagline: {
        fontSize: 24,
        paddingVertical: 20,
        fontWeight: "600",
        color: colors.white,
        paddingHorizontal:10,
      
        
    },
    logo: {
        height: 100,
        width: 100,

    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center',
       
    }


})



export default WelcomeScreen