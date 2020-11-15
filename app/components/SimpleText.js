import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../config/styles'

export default function SimpleText({ children, txtColor }) {
    return (
        <View >
            <Text style={[defaultStyles.text, { color: txtColor }]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
