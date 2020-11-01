import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

export default function LIstItemSeparator() {
    return (
        <View style={styles.separator}>


        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "90%",
        height: 2,
        backgroundColor: colors.lightGrey
    }
})
