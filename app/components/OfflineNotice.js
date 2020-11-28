import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SimpleText from './SimpleText'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'


export default function OfflineNotice() {
    const netInfo = useNetInfo()

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)

        return (
            <View style={styles.container}>
                <SimpleText
                    txtColor="white">
                    Brak połączenia z internetem.
            </SimpleText>
            </View>
        )
    return null
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: 'red',
        height: 50,
        top: Constants.statusBarHeight,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

})
