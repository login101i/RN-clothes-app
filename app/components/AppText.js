import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

export default function AppText({ title, subTitle, colorek = "black" }) {
    return (
        <>
            <View style={styles.container}>
                {title && <Text
                  style={[styles.text, { textTransform: 'uppercase' }]}>{title}</Text> }
                {subTitle &&<Text style={[styles.subtitleText, {color:colors[colorek]}]}>{subTitle}</Text>}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:5
    },
    text: {
        color: colors.black,
        fontSize: 18,
        fontWeight:"bold"
    },
    subtitleText:{
        fontWeight:'200',
        fontSize: 18,
    }
})
