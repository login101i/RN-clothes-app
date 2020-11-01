import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({ title, color="white", onPress, textColor='black' }) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor:colors[color]}]}
            onPress={onPress}>
            <Text style={[styles.buttonText,{color:colors[textColor]}]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        width: '100%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginVertical:12
    },
    buttonText: {
        fontSize: 22,
        textTransform: 'uppercase'
    }
})


