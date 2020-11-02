import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SimpleText from './SimpleText'

import colors from '../config/colors'

export default function ErrorMessage({ error, visible }) {

    if (!error || !visible) return null
    return (
        <Text style={styles.error}>
            {error}
        </Text>
    )
}

const styles = StyleSheet.create({
    error: {
        color: colors.red
    }
})
