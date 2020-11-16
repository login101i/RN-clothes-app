import React from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppButton from '../components/AppButton'

export default function WelcomeScreens({navigation}) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/lg.jpg')} >
            <View style={styles.logoContainer}>
                <Text style={styles.tagline}>Tinderella</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="login"
                    color='white'
                    onPress={()=>navigation.navigate("Login")}
                    />
                <AppButton 
                title="register" 
                color="black"
                textColor='white'
                    onPress={() => navigation.navigate("Account")}

                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    buttonsContainer: {
        width: '100%'
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 50,
    },
    tagline: {
        color: '#fff',
        fontSize: 44,
        opacity: 0.8
    },
    registerButton: {
        width: '100%',
        height: 43,
        backgroundColor: colors.white,
        opacity: 0.8,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
