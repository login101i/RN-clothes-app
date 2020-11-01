import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({ name, color, size=40 }) {
    return (

        <View style={styles.container}>
            <MaterialCommunityIcons
                name={name}
                color={color}
                size={size}
            />

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor:'#f5f6d4',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'purple',
        opacity:0.8
    }
})
